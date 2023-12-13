import { defineEchartsConfig } from 'vuepress-plugin-md-enhance/client';
import 'vuepress-theme-hope/presets/bounce-icon.scss';
import 'vuepress-theme-hope/presets/shinning-feature-panel.scss';

defineEchartsConfig({
  setup: async () => {
    await import('echarts-wordcloud');
  },
});

export default {};
