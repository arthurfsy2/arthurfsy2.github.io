import{_ as a,r,o as l,c as o,a as e,b as n,d as s,e as t}from"./app-D6nVAPWt.js";const d={},c=t('<h1 id="home-assistant-总结" tabindex="-1"><a class="header-anchor" href="#home-assistant-总结"><span>HOME ASSISTANT 总结</span></a></h1><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装"><span>1.安装</span></a></h2><h3 id="docker方式" tabindex="-1"><a class="header-anchor" href="#docker方式"><span>docker方式：</span></a></h3><ul><li><strong>Win10:</strong></li></ul>',4),h={href:"https://blog.csdn.net/m0_56000832/article/details/120992771",target:"_blank",rel:"noopener noreferrer"},u=t(`<p>命令：</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run --init -d --name=&quot;home-assistant&quot; -e &quot;TZ=Asia/Shanghai&quot; -v /d/home_assistant/config:/config --net=host homeassistant/home-assistant:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>Linux（云服务器）:</strong></li></ul><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code>docker run --init -d --name=&quot;home-assistant&quot; -e &quot;TZ=Asia/Shanghai&quot; -v //www/wwwroot/device.4a1801.life/config:/config --net=host homeassistant/home-assistant:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>群晖:</strong></li></ul>`,5),m={id:"home-assistan安装—之群晖docker玩法",tabindex:"-1"},_={class:"header-anchor",href:"#home-assistan安装—之群晖docker玩法"},p={href:"https://zhuanlan.zhihu.com/p/341395089",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"_2-配置ssl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-配置ssl"},[e("span",null,"2.配置SSL")])],-1),b={href:"https://www.9kr.cc/archives/114/",target:"_blank",rel:"noopener noreferrer"},g=t(`<p>注1：宝塔反代设置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#PROXY-START/

location ^~ /
{
    proxy_pass http://127.0.0.1:8123;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection &quot;upgrade&quot;;
    proxy_read_timeout 86400;
    add_header X-Cache $upstream_cache_status;


    #Set Nginx Cache


  

    set $static_fileSIjN7esB 0;
    if ( $uri ~* &quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot; )
    {
        set $static_fileSIjN7esB 1;
        expires 12h;
        }
    if ( $static_fileSIjN7esB = 0 )
    {
    add_header Cache-Control no-cache;
    }

}

#PROXY-END/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#PROXY-START/

location ^~ /
{
    proxy_pass http://127.0.0.1:8123;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection &quot;upgrade&quot;;
    proxy_read_timeout 86400;
    add_header X-Cache $upstream_cache_status;


    #Set Nginx Cache


  

    set $static_fileSIjN7esB 0;
    if ( $uri ~* &quot;\\.(gif|png|jpg|css|js|woff|woff2)$&quot; )
    {
        set $static_fileSIjN7esB 1;
        expires 12h;
        }
    if ( $static_fileSIjN7esB = 0 )
    {
    add_header Cache-Control no-cache;
    }

}

#PROXY-END/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注2:configuration.yaml修改如下<code>&lt;mark&gt;</code>（群晖在线文件配置需要编码格式为UTF-8才能备注里加中文）<code>&lt;/mark&gt;</code></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 119.23.60.199   //公网IP地址
    - 172.17.0.1
    - 127.0.0.1
    - ::1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-安装集成" tabindex="-1"><a class="header-anchor" href="#_3-安装集成"><span>3.安装集成</span></a></h2><h3 id="主要集成-hacs、hass-xiaomi-miot、gree-climate" tabindex="-1"><a class="header-anchor" href="#主要集成-hacs、hass-xiaomi-miot、gree-climate"><span>主要集成：HACS、hass-xiaomi-miot、Gree climate</span></a></h3><p>注：也可以通过下载zip文件解压缩方式安装集成</p>`,8),f={href:"https://zhuanlan.zhihu.com/p/400985801",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/hacs-china/integration",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zhuanlan.zhihu.com/p/444212384",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"小米",-1),S={href:"https://zhuanlan.zhihu.com/p/397561665",target:"_blank",rel:"noopener noreferrer"},B=e("strong",null,"格力空调",-1),y={href:"https://post.smzdm.com/p/a4pn9rdw/",target:"_blank",rel:"noopener noreferrer"},E=e("strong",null,"通过小爱同学",-1),T={href:"https://post.smzdm.com/p/a4pn9rdw/",target:"_blank",rel:"noopener noreferrer"},w=e("strong",null,"美的设备（部分）",-1),H={href:"https://bbs.hassbian.com/thread-6868-1-2.html",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"海尔",-1),C=e("strong",null,"比亚迪",-1),I=e("strong",null,"抓包",-1),$={href:"https://github.com/CubicPill/china_southern_power_grid_stat",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/arthurfsy/home-assistant-garmin_connect_CN",target:"_blank",rel:"noopener noreferrer"},z={href:"https://github.com/cyberjunky/home-assistant-garmin_connect",target:"_blank",rel:"noopener noreferrer"},O={href:"https://zhuanlan.zhihu.com/p/456741817",target:"_blank",rel:"noopener noreferrer"},j=e("br",null,null,-1),L={href:"https://pan.4a1801.life/Onedrive-swu/%E4%B8%AA%E4%BA%BA%E5%BB%BA%E7%AB%99/Home%20Assistant/Node-red",target:"_blank",rel:"noopener noreferrer"},R=e("blockquote",null,[e("p",null,"注：也可以通过下载zip文件解压缩方式安装集成")],-1),M={href:"https://github.com/al-one/hass-xiaomi-miot/releases",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/hacs/integration/releases",target:"_blank",rel:"noopener noreferrer"},X=e("h2",{id:"_4-主题设置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-主题设置"},[e("span",null,"4.主题设置")])],-1),D={href:"https://www.bilibili.com/read/cv11631791",target:"_blank",rel:"noopener noreferrer"},Z=e("h2",{id:"_5-参考教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-参考教程"},[e("span",null,"5.参考教程")])],-1),F={href:"https://bbs.iobroker.cn/t/topic/12943/14",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://ha.jiluxinqing.com/#/",target:"_blank",rel:"noopener noreferrer"};function G(V,W){const i=r("ExternalLinkIcon");return l(),o("div",null,[c,e("p",null,[e("a",h,[n("windows10安装docker"),s(i)])]),u,e("h4",m,[e("a",_,[e("span",null,[e("a",p,[n("Home Assistan安装—之群晖Docker玩法"),s(i)])])])]),v,e("p",null,[e("a",b,[n("宝塔反代HomeAssistant并添加SSL笔记 - Yuan (9kr.cc)"),s(i)])]),g,e("ol",null,[e("li",null,[e("p",null,[e("a",f,[n("HACS"),s(i)]),n("：可理解为第三方“应用市场”，可安装"),e("a",k,[n("HACS 极速版 "),s(i)])])]),e("li",null,[e("p",null,[e("a",x,[n(" xiaomi-miot-auto"),s(i)]),n("：可接入"),A,n("设备")])]),e("li",null,[e("p",null,[e("a",S,[n("Gree climate"),s(i)]),n("：可接入"),B])]),e("li",null,[e("p",null,[e("a",y,[n("巴法 bemfa"),s(i)]),n("：可"),E,n("控制美的、格力等其他品牌空调")])]),e("li",null,[e("p",null,[e("a",T,[n("Midea AC LAN"),s(i)]),n(":可接入"),w])]),e("li",null,[e("p",null,[e("a",H,[n("Node-red"),s(i)]),n(":可通过该方式接入其他实体，如油价查询、"),N,n("设备、企业微信消息推送、"),C,n("数据接入、各种"),I,n("数据接入")])]),e("li",null,[e("p",null,[e("a",$,[n("南方电网HA集成 "),s(i)]),n("：可接入南方电网数据查询电费")])]),e("li",null,[e("p",null,[n("["),e("a",q,[n("Garmin Connect HA集成（自己修改版本）"),s(i)]),n("]("),e("a",z,[n("https://github.com/cyberjunky/home-assistant-garmin_connect"),s(i)]),n(")")])]),e("li",null,[e("p",null,[e("a",O,[n("NodeRed安装配置 "),s(i)]),j,e("a",L,[n("Node-red节点备份"),s(i)])])])]),R,e("p",null,[e("a",M,[n("Releases · al-one/hass-xiaomi-miot (github.com)"),s(i)])]),e("p",null,[e("a",P,[n("Releases · hacs/integration (github.com)"),s(i)])]),X,e("p",null,[n("["),e("a",D,[n("HassOS系列] HomeAssistant主题的安装使用 )"),s(i)])]),Z,e("ul",null,[e("li",null,[e("a",F,[n("智趣盒子home-assistant全面版&高级版专用说明书 - 社区交流 - ioBroker中国"),s(i)])]),e("li",null,[e("a",Y,[n("HomeAssistant学习笔记 (jiluxinqing.com)"),s(i)]),n("a")])])])}const J=a(d,[["render",G],["__file","Home Assistant 部署总结.html.vue"]]),K=JSON.parse(`{"path":"/%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93/IT%E6%80%BB%E7%BB%93/others/Home%20Assistant%20%E9%83%A8%E7%BD%B2%E6%80%BB%E7%BB%93.html","title":"HOME ASSISTANT 总结","lang":"zh-CN","frontmatter":{"icon":"edit","date":"2022-03-08T00:00:00.000Z","category":["经验总结"],"tag":["IT总结"],"description":"HOME ASSISTANT 总结 1.安装 docker方式： Win10: windows10安装docker 命令： Linux（云服务器）: 群晖: Home Assistan安装—之群晖Docker玩法 2.配置SSL 宝塔反代HomeAssistant并添加SSL笔记 - Yuan (9kr.cc) 注1：宝塔反代设置 注2:configu...","head":[["meta",{"property":"og:url","content":"https://blog.4a1801.life/%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93/IT%E6%80%BB%E7%BB%93/others/Home%20Assistant%20%E9%83%A8%E7%BD%B2%E6%80%BB%E7%BB%93.html"}],["meta",{"property":"og:site_name","content":"Family's Life"}],["meta",{"property":"og:title","content":"HOME ASSISTANT 总结"}],["meta",{"property":"og:description","content":"HOME ASSISTANT 总结 1.安装 docker方式： Win10: windows10安装docker 命令： Linux（云服务器）: 群晖: Home Assistan安装—之群晖Docker玩法 2.配置SSL 宝塔反代HomeAssistant并添加SSL笔记 - Yuan (9kr.cc) 注1：宝塔反代设置 注2:configu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-13T13:17:45.000Z"}],["meta",{"property":"article:author","content":"Mr.Arthur"}],["meta",{"property":"article:tag","content":"IT总结"}],["meta",{"property":"article:published_time","content":"2022-03-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-13T13:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HOME ASSISTANT 总结\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-03-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-13T13:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Arthur\\",\\"url\\":\\"https://blog.4a1801.life\\"}]}"]]},"headers":[{"level":2,"title":"1.安装","slug":"_1-安装","link":"#_1-安装","children":[{"level":3,"title":"docker方式：","slug":"docker方式","link":"#docker方式","children":[]}]},{"level":2,"title":"2.配置SSL","slug":"_2-配置ssl","link":"#_2-配置ssl","children":[]},{"level":2,"title":"3.安装集成","slug":"_3-安装集成","link":"#_3-安装集成","children":[{"level":3,"title":"主要集成：HACS、hass-xiaomi-miot、Gree climate","slug":"主要集成-hacs、hass-xiaomi-miot、gree-climate","link":"#主要集成-hacs、hass-xiaomi-miot、gree-climate","children":[]}]},{"level":2,"title":"4.主题设置","slug":"_4-主题设置","link":"#_4-主题设置","children":[]},{"level":2,"title":"5.参考教程","slug":"_5-参考教程","link":"#_5-参考教程","children":[]}],"git":{"createdTime":1695206120000,"updatedTime":1702473465000,"contributors":[{"name":"arthurfsy2","email":"fsyflh@gmail.com","commits":3}]},"readingTime":{"minutes":2.17,"words":650},"filePathRelative":"经验总结/IT总结/others/Home Assistant 部署总结.md","localizedDate":"2022年3月8日","excerpt":"\\n<h2>1.安装</h2>\\n<h3>docker方式：</h3>\\n<ul>\\n<li><strong>Win10:</strong></li>\\n</ul>\\n<p><a href=\\"https://blog.csdn.net/m0_56000832/article/details/120992771\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">windows10安装docker</a></p>\\n<p>命令：</p>\\n<div class=\\"language-docker\\" data-ext=\\"docker\\" data-title=\\"docker\\"><pre class=\\"language-docker\\"><code>docker run --init -d --name=\\"home-assistant\\" -e \\"TZ=Asia/Shanghai\\" -v /d/home_assistant/config:/config --net=host homeassistant/home-assistant:latest \\n</code></pre></div>","autoDesc":true}`);export{J as comp,K as data};
