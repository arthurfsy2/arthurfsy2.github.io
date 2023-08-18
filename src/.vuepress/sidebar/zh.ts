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
    {
      text: "Mr.Arthur",
      icon: "book",
      prefix: "article/Arthur/",
      children: "structure",
    },
    
	
  ],
  
 
});
