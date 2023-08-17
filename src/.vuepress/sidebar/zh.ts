import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
	
  "/": [
	  
	  
    "",
    {
      text: "家庭",
      icon: "people-roof",
      prefix: "article/Family/",
      link: "",
      children: "structure",
    },
    {
      text: "IT",
      icon: "globe",
      prefix: "article/IT/",
      children: "structure",
    },
    
	
  ],
  
 
});
