import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme(
  {
    hostname: "https://blog.4a1801.life",

    author: {
      name: "Mr.Arthur",
      url: "https://blog.4a1801.life",
    },

    logo: "/logo1.jpg",

    repo: "arthurfsy2/arthurfsy2.github.io",

    docsDir: "src",

    // 导航栏
    navbar,

    // 侧边栏
    sidebar,

    // 页脚
    footer:
      '<a href="https://beian.miit.gov.cn/">备案号：粤ICP备2021168515号-1</a>',
    displayFooter: true,

    // 博客相关
    blog: {
      description: "一个对运动、编程又菜又爱玩的中年老男人+1年“工作经验”的奶爸",
      intro: "https://blog.4a1801.life",
      medias: {
        Gmail: "mailto:fsyflh@gmail.com",
        QQ: "http://wpa.qq.com/msgrd?v=3&uin=254904240&site=qq&menu=yes",
        Wechat: "/家庭/intro.html#联系我们",
        Weibo: "https://weibo.com/u/2091797297",
        Zhihu: "https://www.zhihu.com/people/Arthurfsy",
      },
      avatar: "/logo2.jpg",
    },

    // 加密配置
    encrypt: {
      config: {
        "/Arthur/个人资料": ["364115"],
        "/Arthur/Tieba": ["364115"],
        "/Arthur/随笔": ["364115"],
        "/Arthur/日记里的我": ["364115"],
        "/Arthur/Qzone": ["364115"],
        "/Arthur/作文、小说、诗词": ["364115"],
        "/Arthur/搜狗问问": ["364115"],
        "/Arthur/postcrossing": ["happypostcrossing", "364115"],
        "/叶子飞/": ["615881"],
      },
    },

    // 多语言配置
    metaLocales: {
      editLink: "在 GitHub 上编辑此页",
    },

    // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
    // hotReload: true,

    // 此处开启了很多功能用于演示，你应仅保留用到的功能。
    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      // demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      include: true,
      mark: true,
      // plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // 取消注释它们如果你需要 TeX 支持
      math: {
        // 启用前安装 katex
        type: "katex",
        // 或者安装 mathjax-full
        // type: "mathjax",
      },

      // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
      // revealjs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 chart.js
      // chartjs: true,

      // insert component easily

      // 在启用之前安装 echarts
      echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // 在启用之前安装 mermaid
      mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // 在启用之前安装 sandpack-vue3
      // sandpack: true,
      markmap: true,
    },

    // 在这里配置主题提供的插件
    plugins: {
      blog: true,
      icon: {
        assets: "fontawesome-with-brands",
      },

      // 启用之前需安装 @waline/client
      // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
      comment: {
        provider: "Waline",
        serverURL: "https://waline-discuss.vercel.app",
      },

      components: {
        components: [
          // "ArtPlayer",
          "Badge",
          "BiliBili",
          // "CodePen",
          "PDF",
          "Share",
          "SiteInfo",
          // "StackBlitz",
          "VidStack",
          // "XiGua",
        ],
      },
      docsearch: {
        appId: "LA02Z7ZAIR",
        apiKey: "feb14375090c8acf567a71e858d95f82",
        indexName: "4a1801",
        placeholder: "搜索文档",
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            searchBox: {
              resetButtonTitle: "清除查询条件",
              resetButtonAriaLabel: "清除查询条件",
              cancelButtonText: "取消",
              cancelButtonAriaLabel: "取消",
            },
            startScreen: {
              recentSearchesTitle: "搜索历史",
              noRecentSearchesText: "没有搜索历史",
              saveRecentSearchButtonTitle: "保存至搜索历史",
              removeRecentSearchButtonTitle: "从搜索历史中移除",
              favoriteSearchesTitle: "收藏",
              removeFavoriteSearchButtonTitle: "从收藏中移除",
            },
            errorScreen: {
              titleText: "无法获取结果",
              helpText: "你可能需要检查你的网络连接",
            },
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
              searchByText: "搜索提供者",
            },
            noResultsScreen: {
              noResultsText: "无法找到相关结果",
              suggestedQueryText: "你可以尝试查询",
              reportMissingResultsText: "你认为该查询应该有结果？",
              reportMissingResultsLinkText: "点击反馈",
            },
          },
        },
      },
      // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
      // pwa: {
      //   favicon: "/favicon.ico",
      //   cacheHTML: true,
      //   cacheImage: true,
      //   appendBase: true,
      //   apple: {
      //     icon: "/assets/icon/apple-icon-152.png",
      //     statusBarColor: "black",
      //   },
      //   msTile: {
      //     image: "/assets/icon/ms-icon-144.png",
      //     color: "#ffffff",
      //   },
      //   manifest: {
      //     icons: [
      //       {
      //         src: "/assets/icon/chrome-mask-512.png",
      //         sizes: "512x512",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-mask-192.png",
      //         sizes: "192x192",
      //         purpose: "maskable",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-512.png",
      //         sizes: "512x512",
      //         type: "image/png",
      //       },
      //       {
      //         src: "/assets/icon/chrome-192.png",
      //         sizes: "192x192",
      //         type: "image/png",
      //       },
      //     ],
      //     shortcuts: [
      //       {
      //         name: "Demo",
      //         short_name: "Demo",
      //         url: "/demo/",
      //         icons: [
      //           {
      //             src: "/assets/icon/guide-maskable.png",
      //             sizes: "192x192",
      //             purpose: "maskable",
      //             type: "image/png",
      //           },
      //         ],
      //       },
      //     ],
      //   },
      // },
    },
    pageInfo: [
      "Author",
      "Original",
      "Date",
      "Category",
      "Tag",
      "ReadingTime",
      "Word",
      "PageView",
    ],
  },
  { custom: true }
);
