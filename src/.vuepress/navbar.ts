import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  {
    text: "文章",
    icon: "pencil",
    prefix:"article/",
    children: [
      {
        text: "家庭",
        icon: "people-roof",
        link: "Family/" 
        
      },
      {
        text: "总结/心得",
        icon: "lightbulb",
        link: "Summary/" 
        
      },
      {
        text: "Mr.Arthur",
        icon: "person",
        link: "Arthur/" 
        
      },
    ],
   },
  {
    text: "邀请函",
    icon: "envelope",
    children: [
      {
        text: "入伙邀请",
        icon: "envelope",
        link: "https://g.gd-share.cn/p/sqtrz2cm" 
        
      },
      {
        text: "结婚邀请函",
        icon: "envelope",
        prefix:"/",
        link: "article/Family/婚礼邀请/" 
        
      },
    ],
  },
  {text: "关于我们",icon: "image-portrait",prefix:"/",link: "intro"  },
  {text: "WIFI",icon: "wifi",prefix:"/",link: "wifi"  },
]);
