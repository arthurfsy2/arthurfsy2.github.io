import{_ as r,r as t,o as l,c as d,a as e,b as n,d as s,e as a}from"./app-v_lDTlSn.js";const o={},c={href:"https://bbs.hassbian.com/thread-17830-1-1.html",target:"_blank",rel:"noopener noreferrer"},v=e("blockquote",null,[e("h2",{id:"概要",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概要","aria-hidden":"true"},"#"),n(" 概要")]),e("p",null,"写在前面：这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也 ... 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ,『瀚思彼岸』» 智能家居技术论坛")],-1),u=e("hr",null,null,-1),m=e("p",null,[e("em",null,"本帖最后由 arthurfsy 于 2023-4-14 15:50 编辑")],-1),h={class:"hint-container note"},b=e("p",{class:"hint-container-title"},"写在前面：",-1),_=e("br",null,null,-1),p={href:"https://bbs.hassbian.com/thread-18578-1-1.html",target:"_blank",rel:"noopener noreferrer"},g=a(`<h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog:</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- 2022/10/1 flow更新：修复“月份控制”BUG。改为：跨月后，前3号还是取上月数据
- 2022/9/27 flow更新：增加当月每日记录2(date、power为数组格式，配合apexcharts卡片使用），分享自用卡片（先下载apexcharts，然后用yaml自定义）![](https://attachment.hasstatic.com/forum/202209/27/114108vc4b41tiu4ww4h7t.png =400x)
- 2022/9/19 flow更新：增加当月每日记录、月份控制（避免跨越需要更新，当然，如果cookies撑不到一个月就只能再次抓包了）
- 2022/9/18 flow更新：新增今年、去年电量统计
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>卡片代码</summary><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  type: vertical-stack
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="主要借鉴" tabindex="-1"><a class="header-anchor" href="#主要借鉴" aria-hidden="true">#</a> 主要借鉴：</h2>`,4),y={href:"https://bbs.hassbian.com/forum.php?mod=viewthread&tid=13414&highlight=%E7%94%B5%E8%B4%B9",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),w=e("br",null,null,-1),x=e("strong",null,"XXXX代替，仅供参考格式。使用前需要自己抓包填入！",-1),k=a('<figure><img src="https://attachment.hasstatic.com/forum/202209/19/150602b5q6d6dy86y2nd5p.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="nr流使用主要流程" tabindex="-1"><a class="header-anchor" href="#nr流使用主要流程" aria-hidden="true">#</a> NR流使用主要流程</h2><h3 id="_1-在hass安装node-red集成" tabindex="-1"><a class="header-anchor" href="#_1-在hass安装node-red集成" aria-hidden="true">#</a> 1.在HASS安装Node-red集成</h3><h3 id="_2-手机下载-南网在线-登陆app-打开-日电量-页面" tabindex="-1"><a class="header-anchor" href="#_2-手机下载-南网在线-登陆app-打开-日电量-页面" aria-hidden="true">#</a> 2.手机下载“南网在线”，登陆APP，打开“日电量”页面</h3><figure><img src="https://attachment.hasstatic.com/forum/202209/17/154514rqqmnu8bw4i2mu0y.png" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-通过stream抓包-对应nr的msg-headers、msg-payload-每个链接的headers、payload都要填" tabindex="-1"><a class="header-anchor" href="#_3-通过stream抓包-对应nr的msg-headers、msg-payload-每个链接的headers、payload都要填" aria-hidden="true">#</a> 3.通过Stream抓包（对应NR的msg.headers、msg.payload），每个链接的headers、payload都要填</h3><p>主要是以下<strong>3</strong>个请求：</p>',7),z={href:"https://95598.csg.cn/ucs/ma/zt/charge/queryDayElectricByMPoint",target:"_blank",rel:"noopener noreferrer"},N={href:"https://95598.csg.cn/ucs/ma/zt/charge/queryLatelyBillElec",target:"_blank",rel:"noopener noreferrer"},B={href:"https://95598.csg.cn/ucs/ma/zt/charge/getAnalyzeFeeDetails",target:"_blank",rel:"noopener noreferrer"},D=a('<figure><img src="https://attachment.hasstatic.com/forum/202209/17/153333ainttkkf667tm39t.png" alt="" width="400" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_4-将抓到的headers、payload数据填入nr流的" tabindex="-1"><a class="header-anchor" href="#_4-将抓到的headers、payload数据填入nr流的" aria-hidden="true">#</a> 4.将抓到的headers、payload数据填入NR流的</h3><p><strong>“控制年份/月份”、****“获取XXXX”的function函数</strong>中（注意每个请求对应的数据不完全一样），点击运行(HOMEASSISTANT需要改为自己系统的)，输入完后<strong>点击部署</strong></p><h3 id="_5-实体名称说明" tabindex="-1"><a class="header-anchor" href="#_5-实体名称说明" aria-hidden="true">#</a> 5.实体名称说明</h3><p>最近日电量：LastDate_Power当月每日明细：EveryDay_Power（9/19更新，具体每日数据放在属性里）<br> **当月每日明细2：EveryDay_Power2（9/27更新，date、power为数组格式，配合apexcharts卡片使用）<br> **当月电量：CurMonth_Power<br> 预计当月电费：CurMonth_Fee<br> 上月电量：LastMonth_Power<br><strong>上月电费：LastMonth_Fee（9/27更新，从原来的“上月电量”属性中拆分）</strong><br> 今年总电量：year_Power（9/18更新）<br><strong>今年总电费：year_Fee（9/27更新，从原来的“今年总电量”属性中拆分）</strong><br> 去年总电量：lastYear_Power（9/18更新）<br><strong>去年总电费：lastYear_Fee（9/27更新，从原来的“去年总电量”属性中拆分）</strong></p><h3 id="_6-nr流填入说明" tabindex="-1"><a class="header-anchor" href="#_6-nr流填入说明" aria-hidden="true">#</a> 6.NR流填入说明：</h3>',6),M=e("br",null,null,-1),E={href:"https://95598.csg.cn/#/sz/serviceInquire/LRLayer/elePriceInquire",target:"_blank",rel:"noopener noreferrer"},P=e("img",{src:"https://www.hasstatic.com/image/filetype/zip.gif",alt:"",loading:"lazy"},null,-1),R={href:"https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDEzMDR8NWQ2MTUwMzB8MTY5NDcwMjI4MHw1NzI4M3wxNzgzMA%3D%3D",target:"_blank",rel:"noopener noreferrer"},q=e("em",null,"(5.32 KB, 下载次数: 329)",-1);function T(L,X){const i=t("ExternalLinkIcon");return l(),d("div",null,[e("p",null,[e("a",c,[n("电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） "),s(i)])]),v,u,m,e("div",h,[b,e("p",null,[n("这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也在用这个集成。"),_,e("a",p,[n("南方电网电费数据集成，支持用户名和密码直接登陆 (hassbian.com)"),s(i)])])]),g,e("p",null,[e("a",y,[n("也分享一个电费查询（NR)-安徽 (hassbian.com)"),s(i)]),f,n(" NR运行效果："),w,n(" 注意：flow里面的headers、payload部分数据是用"),x]),k,e("blockquote",null,[e("ul",null,[e("li",null,[e("a",z,[n("https://95598.csg.cn/ucs/ma/zt/charge/queryDayElectricByMPoint"),s(i)])]),e("li",null,[e("a",N,[n("https://95598.csg.cn/ucs/ma/zt/charge/queryLatelyBillElec"),s(i)])]),e("li",null,[e("strong",null,[e("a",B,[n("https://95598.csg.cn/ucs/ma/zt/charge/getAnalyzeFeeDetails"),s(i)])])])])]),D,e("p",null,[n("深圳地区是春冬季、电量总量阶梯收费，如果是广东其他地区，可以通过以下官方链接查询单价，并修改“阶梯电费设置”的function"),M,e("a",E,[n("南方电网95598 (csg.cn)"),s(i)])]),e("p",null,[P,n(),e("a",R,[n("南方电网抓包.zip"),s(i)]),n(),q])])}const I=r(o,[["render",T],["__file","电费插件（Node-Red流）-广东南方电网（2022101更新修复BUG）.html.vue"]]);export{I as default};
