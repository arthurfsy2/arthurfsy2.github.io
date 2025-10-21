import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{ah as d,ao as n,ak as a,aj as i,am as l,ai as h}from"./app-DbTJb0H3.js";const r={};function B(k,s){const e=l("ECharts"),p=l("Mermaid");return h(),d("div",null,[s[0]||(s[0]=n('<div class="hint-container tip"><p class="hint-container-title">前言</p><p>其实之前已经通过 node-red 实现了获取云麦好轻的数据，并在 Home Assistant 上展示家庭体重了，但是感觉自动化还是有点欠缺。刚好借着写 Blog 的时候发现 vuepress-theme-hope 支持 echarts 扩展，就想着尝试通过折线图实现。</p></div><h2 id="成果展示" tabindex="-1"><a class="header-anchor" href="#成果展示"><span>成果展示</span></a></h2><p>vuepress-theme-hope 内置的 markdownEnhance 功能，已经支持 echarts 图表（大部分）的展示了，可以通过 await+fetch 的方式引入 json 文件，并生成折线图。<br> 效果如下：</p><p>新增：<a href="https://haoqing.fengsy.cn/static/index.html" target="_blank" rel="noopener noreferrer">在线导出数据</a></p><div class="hint-container important"><p class="hint-container-title">说明</p><p>以上在线导出网站的前端，是通过 python 的 flask 库实现，整个服务是通过宝塔面板的 <code>网站——Python项目</code> 进行管理。</p></div>',5)),a(e,{config:"eJzVVs2KG0cQvuspGoXAiA0jreTdtbTZwF4MCzGBxBCIMaZ31DPq7Ey36K7RD0aHJIecQg6BkHtIbr774rfx71u4qmemNZJGZtd4wZ6DRlNT/X1V9VV3TaSVBTbmwNkZ43MugcUCoknQYqw9AZjaUbdr+DxMJGTSGG3CSGddbmCSm9gu+91lrjIuH8+FTCbwWCzA8Aj6P1utumhX3fIF+oZkbLc6IUyECgIjbIedfcPw7t4Enc5pq7UOqH/LEc2X8bUimnHDqDoUU5jxaRDnKgKpFQskiKzDnmBkRkBuFCNDWOCftlZ+NaXiUrr5eu+cCDifJQE3plhBwDbPELl3io+xNiwgm3QWvH3N0DdMhUpggs8HB8U65lYdnLEpN1ZcKCDIh/IRkjG2KoH5LEEYcuzWUdaBogMGWMmlpy7EM0cAWqcgp6OSDYxMEmFGrM0X0ra/Ihb6SYwcVz6piAEdjr50r5GECoCGQ2+51AA6I1OvMDmMxTlCjthD51JAMVfo0fvVKq56zSMjOIgHMhOUJF2rTsHsiJrQ94t5Y/hH9LNsSgaWU4FZz3iai7IUKGDEU7SCyUVlUjwjvxfP/3r7+x/ecaqtpODwDZXY23kqE/VARlfIV0chhb6VCpHWadiJnm96lRUp3fmlSOv+2IgZB3CKP3Fxr64Sz1yuXWdN3XKpFxVCqfxhr/CLsWy5qcWDWxO0M/goLJ+Jc3uR8aRmdjf3Q1L9pKl3NitrAY+MEbtbMm3JXNZdKivHVeHXQc+kzXl6n2OTb4EKI4W9UGOBGZXIlCM6HvnHWo6VTlJEwmtfB6QrBQzlaBgO71QIzloUvv3ylz9f//O/LzBdkU41lT8xYll74Su2CZ9gLLvoxHlyEp4cN3G+evrvy2fP9nEKdT3SXXgiHfbCk/6eRN/89ncjqTZcJev98V7WEr+B4M2v/+0jMGLchO6agS6dw3fx9xREfStUq78YDoeNO2BP4xxWvmM9x73b2DmF4TqNMwjvHB/dXufswhPr8TAc3GLr7MIT6d1eOLzN1inxP4nWceuLrtk+hMpZcN+E93Bsb42E8mBL8ZT3NjdGtw8tN462jXaZXWpKWOnaeptpDZPNIfFBU7j68lmPyPJvxs3VzmCS+FWCqsQ8tZ4WJUG3H2BJA7Kuny/oYDBoVruIeL2TNvX387n6DsOPRn1PLsQ46JejfAfRa9y85yudbPhjfkOV/Anx0VS6ydfM5yRT/0N1QuPqtPUOIINfBA==",type:"js"}),s[1]||(s[1]=i("h2",{id:"方法思路",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#方法思路"},[i("span",null,"方法思路")])],-1)),s[2]||(s[2]=i("p",null,"总体来说，数据处理的思路是:",-1)),a(p,{code:"eJzT1dXlKsksyUm1Ung2dcuTvZOfNcx9sX09F0g8LSe/PDkjsahEwSeIi0sBCBwDAl42tD2dMFFX1+7Z1A3Pete96Nv+tH8agtu+6mnXiqc9057N3vJs2gag+NPZ+14sXPF049TnS3ZxcQEAIRY4cQ=="}),s[3]||(s[3]=n(`<h3 id="app-逆向" tabindex="-1"><a class="header-anchor" href="#app-逆向"><span>APP 逆向</span></a></h3><p>其中对我而言最困难的就是“APP 逆向”这个步骤，毕竟对抓包也只是略懂皮毛，后来花了 200 大洋找了大佬逆向了好轻 APP 登陆算法，才完成最关键也是最开始的一步。</p><h3 id="数据获取" tabindex="-1"><a class="header-anchor" href="#数据获取"><span>数据获取</span></a></h3><h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript"><span>Javascript</span></a></h4><p>数据获取其实有很多种方式，像我之前是通过 node-red 来进行数据处理、清洗，然后转换为 HA 的插件所支持的数据格式，感兴趣的可以看这里 →<a href="https://bbs.hassbian.com/thread-20999-1-1.html" target="_blank" rel="noopener noreferrer">【node-red 长期稳定】云麦好轻 app 体重数据接入 HA</a></p><h4 id="python" tabindex="-1"><a class="header-anchor" href="#python"><span>Python</span></a></h4><p>其实写 python 脚本的时候。是照着 node-red 的流程来写的，编程小白在这里又一次借鉴了 ChatGPT 的神秘力量完成了编程，并解决了 RSA 加密这一最关键的一步<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p><h3 id="数据化自动更新" tabindex="-1"><a class="header-anchor" href="#数据化自动更新"><span>数据化自动更新</span></a></h3><p>如果是希望数据采集更稳定和方便，那可以借助 Github Action 了，可设置为每天定时运行 workflows，进行定期取数。具体使用方法可看这里 →<a href="https://github.com/arthurfsy2/yunmai_weight_extract2json" target="_blank" rel="noopener noreferrer">arthurfsy2/yunmai_weight_extract2json</a></p><h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码"><span>参考代码</span></a></h2><div class="hint-container tip"><p class="hint-container-title">双人体重</p><p>修改以下代码的<br><code>const data = await fetch()</code>对应的链接、标题名称等内容即可。</p></div><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::echarts</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`js</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">const data = await fetch(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &quot;https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_fsy.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).then((res) =&gt; res.json());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">const data2 = await fetch(</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &quot;https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_wyf.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">).then((res) =&gt; res.json());</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">var a = data.map(function (item) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  return item.weight;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">var a2 = data2.map(function (item) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  return item.weight;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">function getAvg(arr) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  var sum = 0;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  for (var i = 0; i &lt; arr.length; i++) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    sum += parseInt(arr[i]);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  var avg = sum / arr.length;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  return avg;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">const option = {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  tooltip: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    trigger: &quot;axis&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  grid: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    left: &quot;5%&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    right: &quot;15%&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    bottom: &quot;10%&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  xAxis: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      data: data.map(function (item) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        return item.createTime;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      data: data2.map(function (item) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        return item.createTime;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  yAxis: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      type: &quot;value&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      scale: true,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      name: &quot;体重&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      position: &quot;left&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      alignTicks: true,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      axisLine: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        show: true,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      axisLabel: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        formatter: &quot;{value}kg&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  toolbox: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    right: 10,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    feature: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      restore: {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      saveAsImage: {},</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  dataZoom: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      start: 80,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      type: &quot;inside&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  visualMap: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      seriesIndex: 0,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      top: 50,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      right: 10,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      pieces: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          lte: 59.94,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;偏瘦&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;grey&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          gt: 59.94,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          lte: 77.76,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;正常&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;green&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          gt: 77.76,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          lte: 90.72,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;偏胖&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;orange&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          gt: 90.72,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;肥胖&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;red&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      outOfRange: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        color: &quot;#999&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      seriesIndex: 1,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      down: 50,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      right: 10,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      pieces: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          lte: 53.465,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;偏瘦&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;grey&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          gt: 53.465,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          lte: 69.36,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;正常&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;green&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          gt: 69.36,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          lte: 80.92,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;偏胖&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;orange&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          gt: 80.92,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          label: &quot;肥胖&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;red&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      outOfRange: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        color: &quot;#999&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  series: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      name: &quot;Mr.Feng体重&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      type: &quot;line&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      xAxisIndex: 0,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      yAxisIndex: 0,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      symbol: &quot;none&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      smooth: true,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      data: data.map(function (item) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        return item.weight;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      markLine: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        silent: false,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;#333&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        data: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            yAxis: getAvg(a).toFixed(2),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      name: &quot;Ms.Wu体重&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      type: &quot;line&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      xAxisIndex: 1,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      yAxisIndex: 0,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      symbol: &quot;none&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      smooth: true,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      data: data2.map(function (item) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        return item.weight;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      }),</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      markLine: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        silent: false,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        lineStyle: {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          color: &quot;#333&quot;,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        data: [</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">            yAxis: getAvg(a2).toFixed(2),</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">};</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>原来的 node-red 是囿于自身 IT 技术原因，没办法实现直接输入手机、账号就可以直接获取数据，只能通过 <code>cyberchef</code>手动加密，所以说起来通过 node-red 的 flow 来实现的功能还不算特别完善。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,14))])}const A=t(r,[["render",B]]),u=JSON.parse(`{"path":"/%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93/IT%E6%80%BB%E7%BB%93/vuepress/%E8%8E%B7%E5%8F%96%E4%BA%91%E9%BA%A6%E5%A5%BD%E8%BD%BB%E4%BD%93%E9%87%8D%E6%95%B0%E6%8D%AE%E5%B9%B6%E5%9C%A8vuepress%E4%B8%8A%E9%80%9A%E8%BF%87echarts%E6%8A%98%E7%BA%BF%E5%9B%BE%E5%B1%95%E7%A4%BA.html","title":"获取云麦好轻体重数据并在vuepress上通过echarts折线图展示","lang":"zh-CN","frontmatter":{"icon":"edit","title":"获取云麦好轻体重数据并在vuepress上通过echarts折线图展示","date":"2023-09-14T00:00:00.000Z","category":["经验总结"],"tag":["IT总结","vuepress"],"description":"前言 其实之前已经通过 node-red 实现了获取云麦好轻的数据，并在 Home Assistant 上展示家庭体重了，但是感觉自动化还是有点欠缺。刚好借着写 Blog 的时候发现 vuepress-theme-hope 支持 echarts 扩展，就想着尝试通过折线图实现。 成果展示 vuepress-theme-hope 内置的 markdown...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"获取云麦好轻体重数据并在vuepress上通过echarts折线图展示\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-09-14T00:00:00.000Z\\",\\"dateModified\\":\\"2024-10-24T03:03:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Arthur\\",\\"url\\":\\"https://blog.4a1801.life\\"}]}"],["meta",{"property":"og:url","content":"https://blog.4a1801.life/%E7%BB%8F%E9%AA%8C%E6%80%BB%E7%BB%93/IT%E6%80%BB%E7%BB%93/vuepress/%E8%8E%B7%E5%8F%96%E4%BA%91%E9%BA%A6%E5%A5%BD%E8%BD%BB%E4%BD%93%E9%87%8D%E6%95%B0%E6%8D%AE%E5%B9%B6%E5%9C%A8vuepress%E4%B8%8A%E9%80%9A%E8%BF%87echarts%E6%8A%98%E7%BA%BF%E5%9B%BE%E5%B1%95%E7%A4%BA.html"}],["meta",{"property":"og:site_name","content":"Family's Life"}],["meta",{"property":"og:title","content":"获取云麦好轻体重数据并在vuepress上通过echarts折线图展示"}],["meta",{"property":"og:description","content":"前言 其实之前已经通过 node-red 实现了获取云麦好轻的数据，并在 Home Assistant 上展示家庭体重了，但是感觉自动化还是有点欠缺。刚好借着写 Blog 的时候发现 vuepress-theme-hope 支持 echarts 扩展，就想着尝试通过折线图实现。 成果展示 vuepress-theme-hope 内置的 markdown..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-24T03:03:35.000Z"}],["meta",{"property":"article:tag","content":"vuepress"}],["meta",{"property":"article:tag","content":"IT总结"}],["meta",{"property":"article:published_time","content":"2023-09-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-24T03:03:35.000Z"}]]},"git":{"createdTime":1694685523000,"updatedTime":1729739015000,"contributors":[{"name":"arthurfsy2","username":"arthurfsy2","email":"fsyflh@gmail.com","commits":13,"url":"https://github.com/arthurfsy2"}]},"readingTime":{"minutes":3.91,"words":1173},"filePathRelative":"经验总结/IT总结/vuepress/获取云麦好轻体重数据并在vuepress上通过echarts折线图展示.md","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">前言</p>\\n<p>其实之前已经通过 node-red 实现了获取云麦好轻的数据，并在 Home Assistant 上展示家庭体重了，但是感觉自动化还是有点欠缺。刚好借着写 Blog 的时候发现 vuepress-theme-hope 支持 echarts 扩展，就想着尝试通过折线图实现。</p>\\n</div>\\n<h2>成果展示</h2>\\n<p>vuepress-theme-hope 内置的 markdownEnhance 功能，已经支持 echarts 图表（大部分）的展示了，可以通过 await+fetch 的方式引入 json 文件，并生成折线图。<br>\\n效果如下：</p>","autoDesc":true}`);export{A as comp,u as data};
