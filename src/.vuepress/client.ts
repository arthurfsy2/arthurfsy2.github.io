import { defineClientConfig } from "vuepress/client";
import { defineAsyncComponent } from "vue";
import { onMounted } from "vue";
// import { defineEChartsConfig } from "vuepress-plugin-md-enhance/client";
// import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
// import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.d.ts";
import "vuepress-theme-hope/presets/round-blogger-avatar.scss";
import "vuepress-theme-hope/presets/left-blog-info.scss";
import "vuepress-theme-hope/presets/shinning-feature-panel.scss";
import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/hr-driving-car.scss";

const MyIcon = defineAsyncComponent(() => import("./components/MyIcon.vue"));
const NavMusic = defineAsyncComponent(
  () => import("./components/NavMusic.vue")
);
// defineEChartsConfig({
//   options: {
//     // 全局 ECharts 配置
//   },
//   setup: async () => {
//     // ECharts 设置
//     await import("echarts-wordcloud");
//   },
// });

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.component("MyIcon", MyIcon);
  },
  setup() {
    onMounted(() => {});
  },
  rootComponents: [
    NavMusic,

    // ...
  ],
});
