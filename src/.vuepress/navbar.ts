import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  {text: "文章",icon: "grommet-icons:article",prefix: "/",link: "/article/" },
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
        link: "https://g.gd-share.cn/p/sqtrz2cm" 
        
      },
    ],
  },
  {
	  
      text: "关于我们",
      icon: "image-portrait",
      link: "/article/Family/intro" 
      
    },

]);
