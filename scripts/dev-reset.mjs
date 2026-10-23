/**
 * dev-reset.mjs — 启动 dev 前清理本项目残留的 VuePress / Vite 进程与端口占用
 *
 * ============================================================================
 * 【背景】
 *  1) VuePress 默认监听 8080；端口被占用时 Vite 会自动退到 8081，且终端提示
 *     容易被忽略，导致浏览器打开的是旧实例或别的项目。
 *  2) Windows 下用 Ctrl+C / 任务管理器关掉外层 pnpm/cmd 后，真正的 node
 *     (vuepress-vite.js) 子进程可能变成孤儿继续占用端口；仅按端口 kill 能杀掉
 *     监听者，但重复运行会留下多个缓存进程。
 *
 * 【策略】（移植自 medical_escort / ai-interview-notebook 的 dev-reset 思路）
 *  1) 主杀：枚举 node.exe，命令行同时包含本项目路径（D:\web\blog）和
 *     vuepress 的进程，树杀（taskkill /F /T），覆盖 vuepress-vite 主进程及其
 *     子进程；不会误伤其他项目的 node。
 *  2) 兜底：按端口杀占用 8080 的 LISTENING 进程（无论是不是 node）。
 *  3) 等待 1s 让端口 / 文件句柄释放后再启动 dev。
 *
 * 【使用】
 *  已接入 package.json 的 docs:dev / docs:clean-dev，无需手动执行。
 *  端口可用环境变量覆盖：DEV_PORT=8080 pnpm run docs:dev
 * ============================================================================
 */
import { execSync } from "node:child_process";

const PORT = process.env.DEV_PORT || "8080";
const PROJECT_PATH = "d:\\web\\blog\\"; // 小写；带尾分隔符，避免误匹配 blog20241211 等兄弟目录
const MARKER = "vuepress"; // 命令行匹配标志

function kill(pid, label) {
  try {
    execSync(`taskkill /F /T /PID ${pid}`, { stdio: "ignore" });
    console.log(`[dev-reset] killed ${label} (pid ${pid})`);
    return true;
  } catch {
    // 进程可能已自行退出
    return false;
  }
}

// 1) 主杀：命令行含「本项目路径 + vuepress」的 node 进程（含孤儿子进程）
let killed = 0;
try {
  const out = execSync(
    "powershell -NoProfile -Command \"Get-CimInstance Win32_Process | Where-Object { $_.Name -eq 'node.exe' } | ForEach-Object { $_.ProcessId.ToString() + '|' + $_.CommandLine }\"",
    { encoding: "utf8" }
  );
  const pids = new Set();
  for (const line of out.split(/\r?\n/)) {
    const m = line.match(/^(\d+)\|(.*)$/);
    if (!m) continue;
    const pid = m[1];
    if (pid === String(process.pid)) continue;
    const cmdline = (m[2] || "").toLowerCase();
    if (cmdline.includes(PROJECT_PATH) && cmdline.includes(MARKER)) pids.add(pid);
  }
  for (const pid of pids) if (kill(pid, "project vuepress process")) killed++;
} catch (e) {
  console.warn("[dev-reset] process scan failed, fallback to port-kill only:", e.message);
}

// 2) 兜底：杀掉占用端口的 LISTENING 进程（任何程序）
try {
  const out = execSync("netstat -ano", { encoding: "utf8" });
  const pids = new Set();
  for (const line of out.split(/\r?\n/)) {
    if (!/LISTENING/i.test(line)) continue;
    // 精确匹配本地地址末尾的 :PORT，避免把 :80801 误判为 :8080
    if (!new RegExp(`:${PORT}\\s`).test(line)) continue;
    const pid = line.trim().split(/\s+/).pop();
    if (/^\d+$/.test(pid) && pid !== "0" && pid !== String(process.pid)) pids.add(pid);
  }
  for (const pid of pids) if (kill(pid, `port ${PORT} listener`)) killed++;
} catch {
  /* ignore */
}

if (killed === 0) console.log(`[dev-reset] nothing to kill, port ${PORT} clean`);

// 3) 等待端口 / 句柄释放
await new Promise((resolve) => setTimeout(resolve, 1000));
