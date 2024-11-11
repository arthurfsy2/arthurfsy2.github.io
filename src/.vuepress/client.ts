import { defineClientConfig } from "vuepress/client";
import { defineEChartsConfig } from "vuepress-plugin-md-enhance/client";
// import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
// import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.d.ts";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss"
import "vuepress-theme-hope/presets/left-blog-info.scss"
import "vuepress-theme-hope/presets/shinning-feature-panel.scss"
import "vuepress-theme-hope/presets/bounce-icon.scss"
import "vuepress-theme-hope/presets/hr-driving-car.scss"

defineEChartsConfig({
 
  options: {
    // 全局 ECharts 配置
  },
  setup: async () => {
    // ECharts 设置
    await import("echarts-wordcloud")
  },
});

export default defineClientConfig({
  setup() {
    // setupRunningTimeFooter(
    //   new Date("2021-12-10"),
    //   {
    //     "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
    //     "/zh/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒",
    //   },
    //   true,
    // );
  },
});