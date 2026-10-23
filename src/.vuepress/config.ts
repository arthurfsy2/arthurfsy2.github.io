import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import theme from "./theme.js";
import { getDirname, path } from "vuepress/utils";
const __dirname = getDirname(import.meta.url);
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Family's Life",
  description: "一个关于Mr.Feng和Ms.Wu，以及他们笑笑大崽崽的故事。",

  theme,
  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue",
    ),
  },
  // 排除日记草稿（bref 初稿）：仅本地保留，不生成页面、不进侧边栏和搜索
  pagePatterns: ["**/*.md", "!.vuepress", "!**/*-bref.md"],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
