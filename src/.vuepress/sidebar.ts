import { sidebar } from "vuepress-theme-hope";

export default sidebar({
	
  "/": [
	  
	  
    "",
    {
      text: "家庭",
      collapsible: true,
      icon: "people-roof",
      prefix: "article/Family/",
      link: "",
      children: "structure",
    },
    {
      text: "IT",
      collapsible: true,
      icon: "globe",
      prefix: "article/IT/",
      children: "structure",
    },
    {
      text: "Mr.Arthur",
      collapsible: true,
      icon: "book",
      prefix: "article/Arthur/",
      children: "structure",
    },
    
	
  ],
  
 
});
