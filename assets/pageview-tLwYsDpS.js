import{M as t}from"./app-KZ151xca.js";var a={provider:"Waline",dark:'html[data-theme="dark"]',serverURL:"https://waline-discuss.vercel.app"};const n=async()=>{try{const{pageviewCount:e}=await t(()=>import("./app-KZ151xca.js").then(r=>r.N),__vite__mapDeps([]));return e({serverURL:a.serverURL})}catch{console.error("@waline/client is not installed!");return}};export{n as updatePageview};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
