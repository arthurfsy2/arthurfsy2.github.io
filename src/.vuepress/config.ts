import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",
 //
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Family's Life",
      description: "一个关于Mr.Feng和Ms.Wu，以及他们笑笑大崽崽的故事。",
    },
  },

  theme,
  alias: {

    
    '@theme-hope/modules/blog/components/BlogHero': path.resolve(
      __dirname,
      './components/BlogHero.vue',
    ),
  },  


  shouldPrefetch: false,
});
