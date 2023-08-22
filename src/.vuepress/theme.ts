import { hopeTheme } from "vuepress-theme-hope";
//import { zhNavbar } from "./navbar/index.js";
import navbar from "./navbar.js";
//import { zhSidebar } from "./sidebar/index.js";
import sidebar from "./sidebar.js";
export default hopeTheme({
  
  hostname: "https://blog.4a1801.life",
 
 
   
  author: {
    name: "Mr.Arthur",
    url: "https://blog.4a1801.life",
  },
// 关键词: "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
  iconAssets: "fontawesome",
  
  favicon: "/logo1.jpg",
  logo: "/logo1.jpg",

  repo: "arthurfsy2",

  docsDir: "docs",

  blog: {
    medias: {
      Gmail: "mailto:fsyflh@gmail.com",
      QQ: "254904240",
      Wechat: "arthurfsy",
      Weibo: "https://weibo.com/u/2091797297",
      Zhihu: "https://www.zhihu.com/people/Arthurfsy",

    },
  },

  locales: {

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar,

      // sidebar
      sidebar,

      footer: '<a href="https://beian.miit.gov.cn/">备案号：粤ICP备2021168515号-1</a>',
      displayFooter: true,

      blog: {
        description: "一个对运动、编程又菜又爱玩的中年老男人+1年“工作经验”的奶爸",
        intro: "https://blog.4a1801.life",
        roundAvatar: true,
        avatar: "/logo2.jpg",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/article/Arthur/private": ["364115"],
      
    },
  },

  plugins: {
    blog: true,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
	  /*
      provider: "Giscus",
      repo: "vuepress-theme-hope/giscus-discussions",
      repoId: "R_kgDOG_Pt2A",
      category: "Announcements",
      categoryId: "DIC_kwDOG_Pt2M4COD69",
	 */
      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
       provider: "Waline",
       serverURL: "https://waline-discuss.vercel.app/",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
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
      vPre: true,
      vuePlayground: true,
    },
    
components: {
        // 你想使用的组件
	components: [
          "ArtPlayer",
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "CodePen",
          "PDF",
          "Replit",
          "Share",
          "SiteInfo",
          "StackBlitz",
          // "VidStack",
          "VideoPlayer",
          "XiGua",
          "YouTube",
        ],
    
      },


    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
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
 pageInfo : ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"]
 

},
{custom :true}
);
