import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  
  {
    text: "文章",
    icon: "pencil",   
    children: [
      {
        text: "家庭",        
        icon: "people-roof",
        link: "/家庭/"        
      },
      {
        text: "经验总结",       
        icon: "lightbulb",
        link: "/经验总结/"        
      },
      {
        text: "冯先生",       
        icon: "person",
        link: "/Arthur/" ,
      },
      {
        text: "吴女士",       
        icon: "person-dress",
        link: "/叶子飞/" ,
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
        link: "/家庭/邀请函/婚礼邀请/" 
        
      },
    ],
  },
  {text: "关于我们",icon: "image-portrait",link: "/家庭/intro/"  },
  {text: "WIFI",icon: "wifi",link: "/家庭/wifi/"  },
]);
