import{_ as s,r as l,o,c as r,a as e,b as n,d as t,e as a}from"./app-f5e949b4.js";const d={},c={id:"【node-red长期稳定】联通话费余额、语音等余量数据接入ha",tabindex:"-1"},_=e("a",{class:"header-anchor",href:"#【node-red长期稳定】联通话费余额、语音等余量数据接入ha","aria-hidden":"true"},"#",-1),m={href:"https://bbs.hassbian.com/thread-20040-1-1.html",target:"_blank",rel:"noopener noreferrer"},u=e("blockquote",null,[e("h2",{id:"概要",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概要","aria-hidden":"true"},"#"),n(" 概要")]),e("p",null,"此前我自己也有通过NR抓包过联通余量数据，但是发现token过期很快，然后也看到了下面的帖子，实现方式和我NR的方式差不多。补充：联通话费余额、语音、流量和积分数据接入 ... 【node-red长期稳定】联通话费余额、语音等余量数据接入HA ,『瀚思彼岸』» 智能家居技术论坛")],-1),v=e("hr",null,null,-1),h=e("p",null,[e("em",null,"本帖最后由 arthurfsy 于 2023-4-24 16:21 编辑")],-1),p=e("br",null,null,-1),b={href:"https://bbs.hassbian.com/thread-18940-1-1.html",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),k=a('<p>动态获取a_token数据，那么这个NR就是解决了token_online保存的问题（其实不保存问题也不大，token_online实测时效很久）<br><strong>Tips：本flow的默认更新间隔为5分钟，如果出现无法获取数据的情况，可以把间隔时间改为10-20分钟</strong> <img src="https://attachment.hasstatic.com/forum/202303/14/143425pkn9ub5rnr6ruhn5.jpg" alt="" loading="lazy"></p><p>本flow功能：<br> 1.可定时查询联通余量（话费、语音、流量、积分数据4个实体可配合卡片展示）。<br> 2.可查看目前已保存的token_online数据（相当于导出，以备其他使用需求）<br> 3.可清空token_online数据（如果发现数据不对，可先清空再重新运行）</p><p>使用方法：<br> 1.对联通APP进行抓包/通过1TS获取<br>    该步骤</p>',3),f=e("br",null,null,-1),w={href:"https://www.xgiu.com/llljk_1st",target:"_blank",rel:"noopener noreferrer"},y=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>下载地址:
https://wwt.lanzoul.com/iDpXD0ecgkfi
密码:xgiu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：下载1TS APP软件后，需要先通过短信成功登陆一次，然后点击首页的“联通”——左上角“小水滴形状”——右上角“窗口”切换登陆方式。即可看到“token_online”、“appid”数据（小坑：token_online的字符很长，可能复制起来比较折腾）<br><img src="https://www.hasstatic.com/image/common/none.gif" alt="" loading="lazy"><img src="https://www.hasstatic.com/image/common/none.gif" alt="" loading="lazy"><br> 3.修改NR流里的“设置原始tokenOnline”节点，将复制的“token_online”、“appid”粘贴到对应位置 <img src="https://www.hasstatic.com/image/common/none.gif" alt="" loading="lazy"><br> 4.修改file节点里的path目录，如我的是/data/token_online.txt（文件名可自行取值）</p><p><img src="https://www.hasstatic.com/image/common/none.gif" alt="" loading="lazy"><br> 特别注意：如果NR是docker容器部署的，需要填写对应容器内部的目录<br> 如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>主机/存储卷目录（实际文件存放目录）：/www/server/docker/volumes/node_red_data/_data
挂载路径（容器内部路径）：/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果NR是虚拟机加载项部署的，需要填写以下内容（#34提供的方法，已置顶）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/config/node-red/data/token_online.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>那么file节点的路径需要填写为/data/token_online.txt，实际存储路径为/www/server/docker/volumes/node_red_data/_data/token_online.txt</p><p>5.全部设置好后，先运行“联通a_token取值”，然后运行“联通取值--稳定取值”，即可生成实体</p><p>卡片代码分享：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type: vertical-stack
cards:
  - type: custom:mushroom-title-card
    title: 更新时间： {{states(&#39;sensor.lian_tong_tao_can_geng_xin_shi_jian&#39;)}}
  - type: horizontal-stack
    cards:
      - type: custom:mushroom-entity-card
        entity: sensor.lian_tong_sheng_yu_hua_fei
        name: 剩余话费
        layout: vertical
        icon: mdi:currency-cny
        icon_color: green
      - type: custom:mushroom-entity-card
        entity: sensor.lian_tong_sheng_yu_liu_liang
        name: 剩余流量
        layout: vertical
        icon: mdi:clipboard-flow
      - type: custom:mushroom-entity-card
        entity: sensor.lian_tong_sheng_yu_yu_yin
        name: 剩余语音
        layout: vertical
        icon: mdi:account-tie-voice
        icon_color: purple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),x=e("img",{src:"https://www.hasstatic.com/image/filetype/unknown.gif",alt:"",loading:"lazy"},null,-1),N={href:"https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDYyNzN8YjEzMDI4YmZ8MTY5NDcwMjI2NHw1NzI4M3wyMDA0MA%3D%3D",target:"_blank",rel:"noopener noreferrer"},z=e("em",null,"(23.37 KB, 下载次数: 101)",-1);function A(R,D){const i=l("ExternalLinkIcon");return o(),r("div",null,[e("h1",c,[_,n(),e("a",m,[n("【node-red长期稳定】联通话费余额、语音等余量数据接入HA "),t(i)])]),u,v,h,e("p",null,[n("此前我自己也有通过NR抓包过联通余量数据，但是发现token过期很快，然后也看到了下面的帖子，实现方式和我NR的方式差不多。"),p,e("a",b,[n("补充：联通话费余额、语音、流量和积分数据接入HomeAssistant (hassbian.com)"),t(i)]),g,n(" 后来通过查询，找到联通可以通过token_online+appId的方式，")]),k,e("p",null,[n("可选，或者下载ITS这个软件进行抓包获取token_online+appId"),f,n(" 我是在这个网页下面找到对应的APP下载链接："),e("a",w,[n("联通流量实时监控软件1TS流量监控免费版下载"),t(i)])]),y,e("p",null,[x,n(),e("a",N,[n("获取联通余量.json"),t(i)]),n(),z])])}const T=s(d,[["render",A],["__file","【node-red长期稳定】联通话费余额、语音等余量数据接入HA.html.vue"]]);export{T as default};
