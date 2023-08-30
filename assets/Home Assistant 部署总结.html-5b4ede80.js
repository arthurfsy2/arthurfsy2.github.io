import{_ as a,r as t,o as l,c as d,a as e,b as n,d as s,e as r}from"./app-70bbda08.js";const o={},c=r('<h1 id="home-assistant-总结" tabindex="-1"><a class="header-anchor" href="#home-assistant-总结" aria-hidden="true">#</a> HOME ASSISTANT 总结</h1><h2 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h2><h3 id="docker方式" tabindex="-1"><a class="header-anchor" href="#docker方式" aria-hidden="true">#</a> docker方式：</h3><ul><li><strong>Win10:</strong></li></ul>',4),h={href:"https://blog.csdn.net/m0_56000832/article/details/120992771",target:"_blank",rel:"noopener noreferrer"},u=r(`<p>命令：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run --init -d --name=&quot;home-assistant&quot; -e &quot;TZ=Asia/Shanghai&quot; -v /d/home_assistant/config:/config --net=host homeassistant/home-assistant:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>Linux（云服务器）:</strong></li></ul><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code>docker run --init -d --name=&quot;home-assistant&quot; -e &quot;TZ=Asia/Shanghai&quot; -v //www/wwwroot/device.4a1801.life/config:/config --net=host homeassistant/home-assistant:latest 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>群晖:</strong></li></ul>`,5),_={id:"home-assistan安装—之群晖docker玩法",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#home-assistan安装—之群晖docker玩法","aria-hidden":"true"},"#",-1),m={href:"https://zhuanlan.zhihu.com/p/341395089",target:"_blank",rel:"noopener noreferrer"},b=e("h2",{id:"_2-配置ssl",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-配置ssl","aria-hidden":"true"},"#"),n(" 2.配置SSL")],-1),p={href:"https://www.9kr.cc/archives/114/",target:"_blank",rel:"noopener noreferrer"},g=r(`<p>注1：宝塔反代设置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#PROXY-START/

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#PROXY-START/

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注2:configuration.yaml修改如下<code>&lt;mark&gt;</code>（群晖在线文件配置需要编码格式为UTF-8才能备注里加中文）<code>&lt;/mark&gt;</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 119.23.60.199   //公网IP地址
    - 172.17.0.1
    - 127.0.0.1
    - ::1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-安装集成" tabindex="-1"><a class="header-anchor" href="#_3-安装集成" aria-hidden="true">#</a> 3.安装集成</h2><h3 id="主要集成-hacs、hass-xiaomi-miot、gree-climate" tabindex="-1"><a class="header-anchor" href="#主要集成-hacs、hass-xiaomi-miot、gree-climate" aria-hidden="true">#</a> 主要集成：HACS、hass-xiaomi-miot、Gree climate</h3><p>注：也可以通过下载zip文件解压缩方式安装集成</p>`,8),f={href:"https://zhuanlan.zhihu.com/p/400985801",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/hacs-china/integration",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zhuanlan.zhihu.com/p/444212384",target:"_blank",rel:"noopener noreferrer"},w=e("strong",null,"小米",-1),A={href:"https://zhuanlan.zhihu.com/p/397561665",target:"_blank",rel:"noopener noreferrer"},S=e("strong",null,"格力空调",-1),y={href:"https://post.smzdm.com/p/a4pn9rdw/",target:"_blank",rel:"noopener noreferrer"},$=e("strong",null,"通过小爱同学",-1),N={href:"https://post.smzdm.com/p/a4pn9rdw/",target:"_blank",rel:"noopener noreferrer"},q=e("strong",null,"美的设备（部分）",-1),C={href:"https://bbs.hassbian.com/thread-6868-1-2.html",target:"_blank",rel:"noopener noreferrer"},H=e("strong",null,"海尔",-1),B=e("strong",null,"比亚迪",-1),j=e("strong",null,"抓包",-1),z={href:"https://github.com/CubicPill/china_southern_power_grid_stat",target:"_blank",rel:"noopener noreferrer"},E={href:"https://github.com/arthurfsy/home-assistant-garmin_connect_CN",target:"_blank",rel:"noopener noreferrer"},T={href:"https://github.com/cyberjunky/home-assistant-garmin_connect",target:"_blank",rel:"noopener noreferrer"},R={href:"https://zhuanlan.zhihu.com/p/456741817",target:"_blank",rel:"noopener noreferrer"},I=e("br",null,null,-1),O={href:"https://pan.4a1801.life/Onedrive-swu/%E4%B8%AA%E4%BA%BA%E5%BB%BA%E7%AB%99/Home%20Assistant/Node-red",target:"_blank",rel:"noopener noreferrer"},X=e("blockquote",null,[e("p",null,"注：也可以通过下载zip文件解压缩方式安装集成")],-1),P={href:"https://github.com/al-one/hass-xiaomi-miot/releases",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/hacs/integration/releases",target:"_blank",rel:"noopener noreferrer"},F=e("h2",{id:"_4-主题设置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_4-主题设置","aria-hidden":"true"},"#"),n(" 4.主题设置")],-1),Y={href:"https://www.bilibili.com/read/cv11631791",target:"_blank",rel:"noopener noreferrer"},M=e("h2",{id:"_5-参考教程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_5-参考教程","aria-hidden":"true"},"#"),n(" 5.参考教程")],-1),V={href:"https://bbs.iobroker.cn/t/topic/12943/14",target:"_blank",rel:"noopener noreferrer"},D={href:"https://ha.jiluxinqing.com/#/",target:"_blank",rel:"noopener noreferrer"};function G(U,Z){const i=t("ExternalLinkIcon");return l(),d("div",null,[c,e("p",null,[e("a",h,[n("windows10安装docker"),s(i)])]),u,e("h4",_,[v,n(),e("a",m,[n("Home Assistan安装—之群晖Docker玩法"),s(i)])]),b,e("p",null,[e("a",p,[n("宝塔反代HomeAssistant并添加SSL笔记 - Yuan (9kr.cc)"),s(i)])]),g,e("ol",null,[e("li",null,[e("p",null,[e("a",f,[n("HACS"),s(i)]),n("：可理解为第三方“应用市场”，可安装"),e("a",x,[n("HACS 极速版 "),s(i)])])]),e("li",null,[e("p",null,[e("a",k,[n(" xiaomi-miot-auto"),s(i)]),n("：可接入"),w,n("设备")])]),e("li",null,[e("p",null,[e("a",A,[n("Gree climate"),s(i)]),n("：可接入"),S])]),e("li",null,[e("p",null,[e("a",y,[n("巴法 bemfa"),s(i)]),n("：可"),$,n("控制美的、格力等其他品牌空调")])]),e("li",null,[e("p",null,[e("a",N,[n("Midea AC LAN"),s(i)]),n(":可接入"),q])]),e("li",null,[e("p",null,[e("a",C,[n("Node-red"),s(i)]),n(":可通过该方式接入其他实体，如油价查询、"),H,n("设备、企业微信消息推送、"),B,n("数据接入、各种"),j,n("数据接入")])]),e("li",null,[e("p",null,[e("a",z,[n("南方电网HA集成 "),s(i)]),n("：可接入南方电网数据查询电费")])]),e("li",null,[e("p",null,[n("["),e("a",E,[n("Garmin Connect HA集成（自己修改版本）"),s(i)]),n("]("),e("a",T,[n("https://github.com/cyberjunky/home-assistant-garmin_connect"),s(i)]),n(")")])]),e("li",null,[e("p",null,[e("a",R,[n("NodeRed安装配置 "),s(i)]),I,e("a",O,[n("Node-red节点备份"),s(i)])])])]),X,e("p",null,[e("a",P,[n("Releases · al-one/hass-xiaomi-miot (github.com)"),s(i)])]),e("p",null,[e("a",L,[n("Releases · hacs/integration (github.com)"),s(i)])]),F,e("p",null,[n("["),e("a",Y,[n("HassOS系列] HomeAssistant主题的安装使用 )"),s(i)])]),M,e("ul",null,[e("li",null,[e("a",V,[n("智趣盒子home-assistant全面版&高级版专用说明书 - 社区交流 - ioBroker中国"),s(i)])]),e("li",null,[e("a",D,[n("HomeAssistant学习笔记 (jiluxinqing.com)"),s(i)]),n("a")])])])}const J=a(o,[["render",G],["__file","Home Assistant 部署总结.html.vue"]]);export{J as default};
