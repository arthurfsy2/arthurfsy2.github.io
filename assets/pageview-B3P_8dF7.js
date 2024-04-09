function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{f as o,Y as n}from"./app-DX_2kq2o.js";const s=async()=>{try{const{pageviewCount:e}=await o(()=>import("./app-DX_2kq2o.js").then(r=>r.Z),__vite__mapDeps([])),t=n();return e({serverURL:t.serverURL})}catch{console.error("@waline/client is not installed!")}};export{s as updatePageview};
