import{_ as l,r as t,o as a,c as d,a as e,b as n,d as s,e as r}from"./app-f5e949b4.js";const o={},c={id:"电费插件-node-red流-广东南方电网-2022-10-1更新修复bug",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#电费插件-node-red流-广东南方电网-2022-10-1更新修复bug","aria-hidden":"true"},"#",-1),u={href:"https://bbs.hassbian.com/thread-17830-1-1.html",target:"_blank",rel:"noopener noreferrer"},m=e("blockquote",null,[e("h2",{id:"概要",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概要","aria-hidden":"true"},"#"),n(" 概要")]),e("p",null,"写在前面：这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也 ... 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ,『瀚思彼岸』» 智能家居技术论坛")],-1),b=e("hr",null,null,-1),h=e("p",null,[e("em",null,"本帖最后由 arthurfsy 于 2023-4-14 15:50 编辑")],-1),_=e("br",null,null,-1),p=e("br",null,null,-1),g={href:"https://bbs.hassbian.com/thread-18578-1-1.html",target:"_blank",rel:"noopener noreferrer"},y=r(`<p>Changelog:</p><ul><li><p>2022/10/1 flow更新：修复“月份控制”BUG。改为：跨月后，前3号还是取上月数据</p></li><li><p>2022/9/27 flow更新：增加当月每日记录2(date、power为数组格式，配合apexcharts卡片使用），分享自用卡片（先下载apexcharts，然后用yaml自定义）<img src="https://attachment.hasstatic.com/forum/202209/27/114108vc4b41tiu4ww4h7t.png" alt="" loading="lazy"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type: vertical-stack
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>2022/9/19 flow更新：增加当月每日记录、月份控制（避免跨越需要更新，当然，如果cookies撑不到一个月就只能再次抓包了）</p></li><li><p>2022/9/18 flow更新：新增今年、去年电量统计</p></li></ul>`,2),f=e("br",null,null,-1),w={href:"https://bbs.hassbian.com/forum.php?mod=viewthread&tid=13414&highlight=%E7%94%B5%E8%B4%B9",target:"_blank",rel:"noopener noreferrer"},x=e("br",null,null,-1),z=e("br",null,null,-1),k=e("strong",null,"XXXX代替，仅供参考格式。使用前需要自己抓包填入！",-1),N=e("figure",null,[e("img",{src:"https://www.hasstatic.com/image/common/none.gif",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),B=e("p",null,[n("NR流使用主要流程"),e("br"),n(" 1.在HASS安装Node-red集成"),e("br"),n(" 2.手机下载“南网在线”，登陆APP，打开“日电量”页面")],-1),D=e("p",null,[e("img",{src:"https://www.hasstatic.com/image/common/none.gif",alt:"",loading:"lazy"}),e("br"),n(" 3.通过Stream抓包（对应NR的msg.headers、msg.payload），每个链接的headers、payload都要填")],-1),M=e("p",null,[n("主要是以下"),e("strong",null,"3"),n("个请求：")],-1),E={href:"https://95598.csg.cn/ucs/ma/zt/charge/queryDayElectricByMPoint",target:"_blank",rel:"noopener noreferrer"},P={href:"https://95598.csg.cn/ucs/ma/zt/charge/queryLatelyBillElec",target:"_blank",rel:"noopener noreferrer"},R={href:"https://95598.csg.cn/ucs/ma/zt/charge/getAnalyzeFeeDetails",target:"_blank",rel:"noopener noreferrer"},T=r('<figure><img src="https://www.hasstatic.com/image/common/none.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3.将抓到的headers、payload数据填入NR流的</p><p><strong>“控制年份/月份”、****“获取XXXX”的function函数</strong>中（注意每个请求对应的数据不完全一样），点击运行(HOMEASSISTANT需要改为自己系统的)，输入完后<strong>点击部署</strong><br> 4.实体名称说明<br> 最近日电量：LastDate_Power当月每日明细：EveryDay_Power（9/19更新，具体每日数据放在属性里）<br> **当月每日明细2：EveryDay_Power2（9/27更新，date、power为数组格式，配合apexcharts卡片使用）<br> **当月电量：CurMonth_Power<br> 预计当月电费：CurMonth_Fee<br> 上月电量：LastMonth_Power<br><strong>上月电费：LastMonth_Fee（9/27更新，从原来的“上月电量”属性中拆分）</strong><br> 今年总电量：year_Power（9/18更新）<br><strong>今年总电费：year_Fee（9/27更新，从原来的“今年总电量”属性中拆分）</strong><br> 去年总电量：lastYear_Power（9/18更新）<br><strong>去年总电费：lastYear_Fee（9/27更新，从原来的“去年总电量”属性中拆分）</strong></p>',3),L=e("br",null,null,-1),q=e("br",null,null,-1),X={href:"https://95598.csg.cn/#/sz/serviceInquire/LRLayer/elePriceInquire",target:"_blank",rel:"noopener noreferrer"},A=e("img",{src:"https://www.hasstatic.com/image/filetype/zip.gif",alt:"",loading:"lazy"},null,-1),I={href:"https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDEzMDR8NWQ2MTUwMzB8MTY5NDcwMjI4MHw1NzI4M3wxNzgzMA%3D%3D",target:"_blank",rel:"noopener noreferrer"},S=e("em",null,"(5.32 KB, 下载次数: 329)",-1);function F(U,G){const i=t("ExternalLinkIcon");return a(),d("div",null,[e("h1",c,[v,n(),e("a",u,[n("电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） "),s(i)])]),m,b,h,e("p",null,[n("写在前面："),_,n(" 这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也在用这个集成。"),p,e("a",g,[n("南方电网电费数据集成，支持用户名和密码直接登陆 (hassbian.com)"),s(i)])]),y,e("p",null,[n("主要借鉴："),f,e("a",w,[n("也分享一个电费查询（NR)-安徽 (hassbian.com)"),s(i)]),x,n(" NR运行效果："),z,n(" 注意：flow里面的headers、payload部分数据是用"),k]),N,B,D,M,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",E,[n("https://95598.csg.cn/ucs/ma/zt/charge/queryDayElectricByMPoint"),s(i)])]),e("li",null,[e("a",P,[n("https://95598.csg.cn/ucs/ma/zt/charge/queryLatelyBillElec"),s(i)])]),e("li",null,[e("strong",null,[e("a",R,[n("https://95598.csg.cn/ucs/ma/zt/charge/getAnalyzeFeeDetails"),s(i)])])])])]),T,e("p",null,[n("5.NR流填入说明："),L,n(" 深圳地区是春冬季、电量总量阶梯收费，如果是广东其他地区，可以通过以下官方链接查询单价，并修改“阶梯电费设置”的function"),q,e("a",X,[n("南方电网95598 (csg.cn)"),s(i)])]),e("p",null,[A,n(),e("a",I,[n("南方电网抓包.zip"),s(i)]),n(),S])])}const V=l(o,[["render",F],["__file","电费插件（Node-Red流）-广东南方电网（2022101更新修复BUG）.html.vue"]]);export{V as default};
