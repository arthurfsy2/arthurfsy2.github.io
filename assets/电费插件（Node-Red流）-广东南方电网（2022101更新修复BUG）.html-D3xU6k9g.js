import{_ as s,r,o as l,c as d,a as e,b as n,d as a,e as t}from"./app-3k2UBi5Q.js";const o={},c={href:"https://bbs.hassbian.com/thread-17830-1-1.html",target:"_blank",rel:"noopener noreferrer"},m=e("blockquote",null,[e("h2",{id:"概要",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概要"},[e("span",null,"概要")])]),e("p",null,"写在前面：这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也 ... 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ,『瀚思彼岸』» 智能家居技术论坛")],-1),v=e("hr",null,null,-1),h=e("p",null,[e("em",null,"本帖最后由 arthurfsy 于 2023-4-14 15:50 编辑")],-1),u={class:"hint-container note"},p=e("p",{class:"hint-container-title"},"写在前面：",-1),b=e("br",null,null,-1),_={href:"https://bbs.hassbian.com/thread-18578-1-1.html",target:"_blank",rel:"noopener noreferrer"},g=t(`<h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog"><span>Changelog:</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>- 2022/10/1 flow更新：修复“月份控制”BUG。改为：跨月后，前3号还是取上月数据
- 2022/9/27 flow更新：增加当月每日记录2(date、power为数组格式，配合apexcharts卡片使用），分享自用卡片（先下载apexcharts，然后用yaml自定义）![](https://attachment.hasstatic.com/forum/202209/27/114108vc4b41tiu4ww4h7t.png =400x)
- 2022/9/19 flow更新：增加当月每日记录、月份控制（避免跨越需要更新，当然，如果cookies撑不到一个月就只能再次抓包了）
- 2022/9/18 flow更新：新增今年、去年电量统计
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>卡片代码</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastdate_power
          name: 最近用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.curmonth_power
          name: 本月用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.curmonth_fee
          name: 本月电费
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastmonth_power
          name: 上月用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastmonth_fee
          name: 上月电费
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.year_power
          name: 今年用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.year_fee
          name: 今年电费
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastyear_power
          name: 去年用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastyear_fee
          name: 去年电费
    - type: custom:apexcharts-card
      header:
        show: true
        title: 当月用电趋势图
      graph_span: 35d
      span:
        start: month
        offset: &#39;-30d&#39;
      series:
        - entity: sensor.everyday_power2
          data_generator: |
            return entity.attributes.date.map((item, index) =&gt; {
             return [new Date(item).getTime(), entity.attributes.power[index]];
            });
          extend_to: false
          float_precision: 2
          name: 每日电量（kWh）
    - type: custom:apexcharts-card
      header:
        show: true
        title: 今年往月用电趋势图
      graph_span: 1y
      span:
        start: year
      series:
        - entity: sensor.everymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) =&gt; {
             return [new Date(item).getTime(), entity.attributes.power[index]];
            });
          extend_to: false
          float_precision: 2
          name: 每月电量（kWh）
        - entity: sensor.everymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) =&gt; {
             return [new Date(item).getTime(), entity.attributes.fee[index]];
            });
          extend_to: false
          float_precision: 2
          name: 每月电费（元）
    - type: custom:apexcharts-card
      header:
        show: true
        title: 去年往月用电趋势图
      graph_span: 1y
      span:
        start: year
        offset: &#39;-1y&#39;
      series:
        - entity: sensor.lastyeareverymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) =&gt; {
             return [new Date(item).getTime(), entity.attributes.power[index]];
            });
          extend_to: false
          float_precision: 2
          name: 去年每月电量（kWh）
        - entity: sensor.lastyeareverymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) =&gt; {
             return [new Date(item).getTime(), entity.attributes.fee[index]];
            });
          extend_to: false
          float_precision: 2
          name: 去年每月电费（元）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="主要借鉴" tabindex="-1"><a class="header-anchor" href="#主要借鉴"><span>主要借鉴：</span></a></h2>`,4),y={href:"https://bbs.hassbian.com/forum.php?mod=viewthread&tid=13414&highlight=%E7%94%B5%E8%B4%B9",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),B=e("br",null,null,-1),w=e("strong",null,"XXXX代替，仅供参考格式。使用前需要自己抓包填入！",-1),E=t('<figure><img src="https://attachment.hasstatic.com/forum/202209/19/150602b5q6d6dy86y2nd5p.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="nr流使用主要流程" tabindex="-1"><a class="header-anchor" href="#nr流使用主要流程"><span>NR流使用主要流程</span></a></h2><h3 id="_1-在hass安装node-red集成" tabindex="-1"><a class="header-anchor" href="#_1-在hass安装node-red集成"><span>1.在HASS安装Node-red集成</span></a></h3><h3 id="_2-手机下载-南网在线-登陆app-打开-日电量-页面" tabindex="-1"><a class="header-anchor" href="#_2-手机下载-南网在线-登陆app-打开-日电量-页面"><span>2.手机下载“南网在线”，登陆APP，打开“日电量”页面</span></a></h3><figure><img src="https://attachment.hasstatic.com/forum/202209/17/154514rqqmnu8bw4i2mu0y.png" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-通过stream抓包-对应nr的msg-headers、msg-payload-每个链接的headers、payload都要填" tabindex="-1"><a class="header-anchor" href="#_3-通过stream抓包-对应nr的msg-headers、msg-payload-每个链接的headers、payload都要填"><span>3.通过Stream抓包（对应NR的msg.headers、msg.payload），每个链接的headers、payload都要填</span></a></h3><p>主要是以下<strong>3</strong>个请求：</p>',7),x={href:"https://95598.csg.cn/ucs/ma/zt/charge/queryDayElectricByMPoint",target:"_blank",rel:"noopener noreferrer"},N={href:"https://95598.csg.cn/ucs/ma/zt/charge/queryLatelyBillElec",target:"_blank",rel:"noopener noreferrer"},k={href:"https://95598.csg.cn/ucs/ma/zt/charge/getAnalyzeFeeDetails",target:"_blank",rel:"noopener noreferrer"},R=t('<figure><img src="https://attachment.hasstatic.com/forum/202209/17/153333ainttkkf667tm39t.png" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-将抓到的headers、payload数据填入nr流的" tabindex="-1"><a class="header-anchor" href="#_4-将抓到的headers、payload数据填入nr流的"><span>4.将抓到的headers、payload数据填入NR流的</span></a></h3><p><strong>“控制年份/月份”、****“获取XXXX”的function函数</strong>中（注意每个请求对应的数据不完全一样），点击运行(HOMEASSISTANT需要改为自己系统的)，输入完后<strong>点击部署</strong></p><h3 id="_5-实体名称说明" tabindex="-1"><a class="header-anchor" href="#_5-实体名称说明"><span>5.实体名称说明</span></a></h3><p>最近日电量：LastDate_Power当月每日明细：EveryDay_Power（9/19更新，具体每日数据放在属性里）<br> **当月每日明细2：EveryDay_Power2（9/27更新，date、power为数组格式，配合apexcharts卡片使用）<br> **当月电量：CurMonth_Power<br> 预计当月电费：CurMonth_Fee<br> 上月电量：LastMonth_Power<br><strong>上月电费：LastMonth_Fee（9/27更新，从原来的“上月电量”属性中拆分）</strong><br> 今年总电量：year_Power（9/18更新）<br><strong>今年总电费：year_Fee（9/27更新，从原来的“今年总电量”属性中拆分）</strong><br> 去年总电量：lastYear_Power（9/18更新）<br><strong>去年总电费：lastYear_Fee（9/27更新，从原来的“去年总电量”属性中拆分）</strong></p><h3 id="_6-nr流填入说明" tabindex="-1"><a class="header-anchor" href="#_6-nr流填入说明"><span>6.NR流填入说明：</span></a></h3>',6),z=e("br",null,null,-1),D={href:"https://95598.csg.cn/#/sz/serviceInquire/LRLayer/elePriceInquire",target:"_blank",rel:"noopener noreferrer"},T=e("img",{src:"https://www.hasstatic.com/image/filetype/zip.gif",alt:"",loading:"lazy"},null,-1),F={href:"https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDEzMDR8NWQ2MTUwMzB8MTY5NDcwMjI4MHw1NzI4M3wxNzgzMA%3D%3D",target:"_blank",rel:"noopener noreferrer"},A=e("em",null,"(5.32 KB, 下载次数: 329)",-1);function U(C,G){const i=r("ExternalLinkIcon");return l(),d("div",null,[e("p",null,[e("a",c,[n("电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） "),a(i)])]),m,v,h,e("div",u,[p,e("p",null,[n("这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也在用这个集成。"),b,e("a",_,[n("南方电网电费数据集成，支持用户名和密码直接登陆 (hassbian.com)"),a(i)])])]),g,e("p",null,[e("a",y,[n("也分享一个电费查询（NR)-安徽 (hassbian.com)"),a(i)]),f,n(" NR运行效果："),B,n(" 注意：flow里面的headers、payload部分数据是用"),w]),E,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",x,[n("https://95598.csg.cn/ucs/ma/zt/charge/queryDayElectricByMPoint"),a(i)])]),e("li",null,[e("a",N,[n("https://95598.csg.cn/ucs/ma/zt/charge/queryLatelyBillElec"),a(i)])]),e("li",null,[e("strong",null,[e("a",k,[n("https://95598.csg.cn/ucs/ma/zt/charge/getAnalyzeFeeDetails"),a(i)])])])])]),R,e("p",null,[n("深圳地区是春冬季、电量总量阶梯收费，如果是广东其他地区，可以通过以下官方链接查询单价，并修改“阶梯电费设置”的function"),z,e("a",D,[n("南方电网95598 (csg.cn)"),a(i)])]),e("p",null,[T,n(),e("a",F,[n("南方电网抓包.zip"),a(i)]),n(),A])])}const P=s(o,[["render",U],["__file","电费插件（Node-Red流）-广东南方电网（2022101更新修复BUG）.html.vue"]]),q=JSON.parse(`{"path":"/%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93/IT%E6%80%BB%E7%BB%93/Node-red/%E7%94%B5%E8%B4%B9%E6%8F%92%E4%BB%B6%EF%BC%88Node-Red%E6%B5%81%EF%BC%89-%E5%B9%BF%E4%B8%9C%E5%8D%97%E6%96%B9%E7%94%B5%E7%BD%91%EF%BC%882022101%E6%9B%B4%E6%96%B0%E4%BF%AE%E5%A4%8DBUG%EF%BC%89.html","title":"电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG）","lang":"zh-CN","frontmatter":{"title":"电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG）","icon":"fab fa-node","category":["经验总结"],"tag":["IT总结","Node-Red"],"date":"2022-09-17T00:00:00.000Z","description":"电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） 概要 写在前面：这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也 ... 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ,『瀚思彼岸』»...","head":[["meta",{"property":"og:url","content":"https://blog.4a1801.life/%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93/IT%E6%80%BB%E7%BB%93/Node-red/%E7%94%B5%E8%B4%B9%E6%8F%92%E4%BB%B6%EF%BC%88Node-Red%E6%B5%81%EF%BC%89-%E5%B9%BF%E4%B8%9C%E5%8D%97%E6%96%B9%E7%94%B5%E7%BD%91%EF%BC%882022101%E6%9B%B4%E6%96%B0%E4%BF%AE%E5%A4%8DBUG%EF%BC%89.html"}],["meta",{"property":"og:site_name","content":"Family's Life"}],["meta",{"property":"og:title","content":"电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG）"}],["meta",{"property":"og:description","content":"电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） 概要 写在前面：这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也 ... 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ,『瀚思彼岸』»..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://attachment.hasstatic.com/forum/202209/27/114108vc4b41tiu4ww4h7t.png =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-13T13:17:45.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG）"}],["meta",{"property":"article:author","content":"Mr.Arthur"}],["meta",{"property":"article:tag","content":"IT总结"}],["meta",{"property":"article:tag","content":"Node-Red"}],["meta",{"property":"article:published_time","content":"2022-09-17T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-13T13:17:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG）\\",\\"image\\":[\\"https://attachment.hasstatic.com/forum/202209/27/114108vc4b41tiu4ww4h7t.png =400x\\",\\"https://attachment.hasstatic.com/forum/202209/19/150602b5q6d6dy86y2nd5p.png\\",\\"https://attachment.hasstatic.com/forum/202209/17/154514rqqmnu8bw4i2mu0y.png =400x\\",\\"https://attachment.hasstatic.com/forum/202209/17/153333ainttkkf667tm39t.png =400x\\",\\"https://www.hasstatic.com/image/filetype/zip.gif\\"],\\"datePublished\\":\\"2022-09-17T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-13T13:17:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Arthur\\",\\"url\\":\\"https://blog.4a1801.life\\"}]}"]]},"headers":[{"level":2,"title":"Changelog:","slug":"changelog","link":"#changelog","children":[]},{"level":2,"title":"主要借鉴：","slug":"主要借鉴","link":"#主要借鉴","children":[]},{"level":2,"title":"NR流使用主要流程","slug":"nr流使用主要流程","link":"#nr流使用主要流程","children":[{"level":3,"title":"1.在HASS安装Node-red集成","slug":"_1-在hass安装node-red集成","link":"#_1-在hass安装node-red集成","children":[]},{"level":3,"title":"2.手机下载“南网在线”，登陆APP，打开“日电量”页面","slug":"_2-手机下载-南网在线-登陆app-打开-日电量-页面","link":"#_2-手机下载-南网在线-登陆app-打开-日电量-页面","children":[]},{"level":3,"title":"3.通过Stream抓包（对应NR的msg.headers、msg.payload），每个链接的headers、payload都要填","slug":"_3-通过stream抓包-对应nr的msg-headers、msg-payload-每个链接的headers、payload都要填","link":"#_3-通过stream抓包-对应nr的msg-headers、msg-payload-每个链接的headers、payload都要填","children":[]},{"level":3,"title":"4.将抓到的headers、payload数据填入NR流的","slug":"_4-将抓到的headers、payload数据填入nr流的","link":"#_4-将抓到的headers、payload数据填入nr流的","children":[]},{"level":3,"title":"5.实体名称说明","slug":"_5-实体名称说明","link":"#_5-实体名称说明","children":[]},{"level":3,"title":"6.NR流填入说明：","slug":"_6-nr流填入说明","link":"#_6-nr流填入说明","children":[]}]}],"git":{"createdTime":1694703271000,"updatedTime":1702473465000,"contributors":[{"name":"arthurfsy2","email":"fsyflh@gmail.com","commits":5}]},"readingTime":{"minutes":4.2,"words":1260},"filePathRelative":"经验总结/IT总结/Node-red/电费插件（Node-Red流）-广东南方电网（2022101更新修复BUG）.md","localizedDate":"2022年9月17日","excerpt":"<p><a href=\\"https://bbs.hassbian.com/thread-17830-1-1.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） </a></p>\\n<blockquote>\\n<h2>概要</h2>\\n<p>写在前面：这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也 ... 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ,『瀚思彼岸』» 智能家居技术论坛</p>\\n</blockquote>","autoDesc":true}`);export{P as comp,q as data};
