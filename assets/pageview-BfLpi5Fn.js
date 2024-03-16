function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{f as t}from"./app-ATtvKsN2.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-discuss.vercel.app"};const s=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-ATtvKsN2.js").then(r=>r.Y),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!")}};export{s as updatePageview};
