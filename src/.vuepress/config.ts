import { getDirname, path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
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

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
    componentsPlugin({
      componentOptions: {
        pdf: {
          pdfjs: "/assets/lib/pdfjs",
        },
      },
    }),
  ],
  
  shouldPrefetch: false,
});
