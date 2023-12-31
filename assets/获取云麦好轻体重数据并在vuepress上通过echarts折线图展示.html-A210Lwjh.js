import{_ as i,r as p,o as r,c as u,d as a,a as n,b as s,e as t}from"./app-fJKwbZzu.js";const k={},d=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"其实之前已经通过node-red实现了获取云麦好轻的数据，并在Home Assistant上展示家庭体重了，但是感觉自动化还是有点欠缺。刚好借着写Blog的时候发现vuepress-theme-hope支持echarts扩展，就想着尝试通过折线图实现。")],-1),v=n("h2",{id:"成果展示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#成果展示","aria-hidden":"true"},"#"),s(" 成果展示")],-1),m=n("p",null,[s("vuepress-theme-hope内置的markdownEnhance功能，已经支持echarts图表（大部分）的展示了，可以通过await+fetch的方式引入json文件，并生成折线图。"),n("br"),s(" 效果如下：")],-1),b=n("h2",{id:"方法思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法思路","aria-hidden":"true"},"#"),s(" 方法思路")],-1),y=n("p",null,"总体来说，数据处理的思路是:",-1),h=t('<h3 id="app逆向" tabindex="-1"><a class="header-anchor" href="#app逆向" aria-hidden="true">#</a> APP逆向</h3><p>其中对我而言最困难的就是“APP逆向”这个步骤，毕竟对抓包也只是略懂皮毛，后来花了200大洋找了大佬逆向了好轻APP登陆算法，才完成最关键也是最开始的一步。</p><h3 id="数据获取" tabindex="-1"><a class="header-anchor" href="#数据获取" aria-hidden="true">#</a> 数据获取</h3><h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h4>',4),g={href:"https://bbs.hassbian.com/thread-20999-1-1.html",target:"_blank",rel:"noopener noreferrer"},f=t('<h4 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h4><p>其实写python脚本的时候。是照着node-red的流程来写的，编程小白在这里又一次借鉴了ChatGPT的神秘力量完成了编程，并解决了RSA加密这一最关键的一步<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p><h3 id="数据化自动更新" tabindex="-1"><a class="header-anchor" href="#数据化自动更新" aria-hidden="true">#</a> 数据化自动更新</h3>',3),q={href:"https://github.com/arthurfsy2/yunmai_weight_extract2json",target:"_blank",rel:"noopener noreferrer"},w=t(`<h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码" aria-hidden="true">#</a> 参考代码</h2><div class="hint-container tip"><p class="hint-container-title">双人体重</p><p>修改以下代码的<br><code>const data = await fetch()</code>对应的链接、标题名称等内容即可。</p></div><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::echarts 

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
  <span class="token string">&quot;https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_fsy.json&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
  <span class="token string">&quot;https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_wyf.json&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> a <span class="token operator">=</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>weight
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">var</span> a2 <span class="token operator">=</span> data2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token punctuation">.</span>weight
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">getAvg</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sum <span class="token operator">+=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">var</span> avg <span class="token operator">=</span> sum <span class="token operator">/</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">return</span>  avg<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
    
      <span class="token literal-property property">tooltip</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">trigger</span><span class="token operator">:</span> <span class="token string">&quot;axis&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">grid</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token string">&quot;5%&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token string">&quot;15%&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">bottom</span><span class="token operator">:</span> <span class="token string">&quot;10%&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>  
      <span class="token literal-property property">xAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
      
        <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> item<span class="token punctuation">.</span>createTime<span class="token punctuation">;</span>
     
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
      
        <span class="token literal-property property">data</span><span class="token operator">:</span> data2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> item<span class="token punctuation">.</span>createTime<span class="token punctuation">;</span>
     
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">scale</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;体重&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">alignTicks</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">axisLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">show</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

       <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">axisLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token literal-property property">formatter</span><span class="token operator">:</span> <span class="token string">&quot;{value}kg&quot;</span>
       <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">toolbox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">feature</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        
          <span class="token literal-property property">restore</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">saveAsImage</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">dataZoom</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">80</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;inside&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">visualMap</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
      
        <span class="token literal-property property">seriesIndex</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      
        <span class="token literal-property property">pieces</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>

            <span class="token literal-property property">lte</span><span class="token operator">:</span> <span class="token number">59.94</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;偏瘦&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;grey&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">gt</span><span class="token operator">:</span> <span class="token number">59.94</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lte</span><span class="token operator">:</span> <span class="token number">77.76</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;正常&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">gt</span><span class="token operator">:</span> <span class="token number">77.76</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lte</span><span class="token operator">:</span> <span class="token number">90.72</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;偏胖&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;orange&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">gt</span><span class="token operator">:</span> <span class="token number">90.72</span><span class="token punctuation">,</span>
          
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;肥胖&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outOfRange</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#999&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
      
        <span class="token literal-property property">seriesIndex</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">down</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span>
        <span class="token literal-property property">right</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
        <span class="token literal-property property">pieces</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>

            <span class="token literal-property property">lte</span><span class="token operator">:</span> <span class="token number">53.465</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;偏瘦&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;grey&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">gt</span><span class="token operator">:</span> <span class="token number">53.465</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lte</span><span class="token operator">:</span> <span class="token number">69.36</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;正常&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">gt</span><span class="token operator">:</span> <span class="token number">69.36</span><span class="token punctuation">,</span>
            <span class="token literal-property property">lte</span><span class="token operator">:</span> <span class="token number">80.92</span><span class="token punctuation">,</span>
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;偏胖&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;orange&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">gt</span><span class="token operator">:</span> <span class="token number">80.92</span><span class="token punctuation">,</span>
          
            <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;肥胖&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">outOfRange</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#999&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Mr.Feng体重&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> item<span class="token punctuation">.</span>weight<span class="token punctuation">;</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      
        <span class="token literal-property property">markLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">silent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#333&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         
            <span class="token punctuation">{</span>
              <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token function">getAvg</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Ms.Wu体重&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;line&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">xAxisIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">yAxisIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">symbol</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">smooth</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> data2<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> item<span class="token punctuation">.</span>weight<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      
        <span class="token literal-property property">markLine</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">silent</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
          <span class="token literal-property property">lineStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#333&quot;</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         
            <span class="token punctuation">{</span>
              <span class="token literal-property property">yAxis</span><span class="token operator">:</span> <span class="token function">getAvg</span><span class="token punctuation">(</span>a2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span></span>
<span class="token punctuation">\`\`\`</span></span>
:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>原来的node-red是囿于自身IT技术原因，没办法实现直接输入手机、账号就可以直接获取数据，只能通过 <code>cyberchef</code>手动加密，所以说起来通过node-red的flow来实现的功能还不算特别完善。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,5);function _(x,A){const o=p("Share"),l=p("ECharts"),c=p("Mermaid"),e=p("ExternalLinkIcon");return r(),u("div",null,[d,a(o,{colorful:"",services:"qq,weibo,qrcode"}),v,m,a(l,{id:"echarts-13",config:"eJzVVktrI0cQvutXNAoLIxxGsrS2V3Ic8GXBkCWQLASymKU96hl1PNMtumv0YNEhySGnkEMg5B6SW+57yb/Jvv7FVo3m0SONbO/L7Ooiqbq6vqr6vu6uQCsLbMyBsxPG51wCCwUEE6/FWHsCMLWjbtfwuR9JSKQx2viBTrrcwCQ1oV32u8tUJVw+ngsZTeCxWIDhAfR/sFp10a66+QL6+mRstzo+TITyPCNsh518yfA7W/E6neNWq0qo/4Ezmi/DG2U044ZRdygnP+FTL0xVAFIr5kkQSYc9wcwYboLUKEYmf43QWnXy3VRKVtKb7y+dIwGns8jjxhQ7KLRNE4zdO84MoTbMI6vMbPj1BUN/PxYqggn+39sr9tKH9u6dsCk3VpwpoNCP5DmWTIurEoLPIgxHzl0nmpszuRy3VgV5epolfJJD5XigdQxyOnISACOjSJgRa/OFtO3cvvo8/xEZOXbdYxEC+h7caRcemAE1Co37NeuFBtAJmXt3qrBlKotThBuxR6V/gVEaiKzRdYznGTi8BUZwEA9lItZNrAIilRvVXYF5lUzeDfS8+LHc1QJkZTkV2LoZj1Ph9NQGPEY7mFRURsUT8v3/v99f/fKr4zzVVlLuuEasOSs8lpF6KINLRK/HIg18JRXGcyu1Ez0vPAtzWU62hV+IuLYHj0HCATJhPcnKWF1GhQxyYZdBNhtDMr3QCzdgrrH9XpVriC1PTS3VGjsWdLZaZpqVwmfi1J4lPMqWKpo2WSINfK9JwE38YCDA227E7vWqEBWO65hTKZWVY1F2oAQsi55Jm/L4AcfTecWhsMJIYc/UWCxGTi9A47YDx7DVr0oWUgSiJjuCcf7gIQfM+GDoD++6rUP7mub2sx9/e/HnP46g6BPoWBPbkRHLqsxaW+qNwcsFM2yCIfijI//osBn++b9/PXv6dDe8wOfkxvhNOIQ/7PlH/Z3lv/z5jx342nAVOTxfm8AWUCPmy5/+3o1pxHgHYPmjlBljOoWvw28oy/opL6J9NhwOt3W6+850JblfwYz1HK+eKzXJbi7GgX/38OAW1NiEQwkcDv3BbcixCYfw7/X84a3IcQvoo5bj5iW61mLznZ2/kw+Mfx+np63nMr+nY3z9HGs2pqy1zRzdZk/3ttkukwtN/VG6FsUmWsNk87F9ywFnPZjmc0Y+Y2zd8gk3lw0PucTBEUkOeWydRJBXdP0WljRc1CVRsjAYDHaqaF2Ic4ZrIeoBy7GnmKVx8Nf35UKMvX4xKjVAnF9/IVUMW/+79C34dS6v98zvmw2TmwR/0vT235Hf4oRn36vWaz/HnNY=",type:"js"}),b,y,a(c,{id:"mermaid-22",code:"eJzT1dXlKsksyUm1Ung2dcuTvZOfNcx9sX09F0g8LSe/PDkjsahEwSeIi0sBCBwDAl42tD2dMFFX1+7Z1A3Pete96Nv+tH8agtu+6mnXiqc9057N3vJs2gag+NPZ+14sXPF049TnS3ZxcQEAIRY4cQ=="}),h,n("p",null,[s("数据获取其实有很多种方式，像我之前是通过node-red来进行数据处理、清洗，然后转换为HA的插件所支持的数据格式，感兴趣的可以看这里→"),n("a",g,[s("【node-red长期稳定】云麦好轻app体重数据接入HA"),a(e)])]),f,n("p",null,[s("如果是希望数据采集更稳定和方便，那可以借助Github Action了，可设置为每天定时运行workflows，进行定期取数。具体使用方法可看这里→"),n("a",q,[s("arthurfsy2/yunmai_weight_extract2json"),a(e)])]),w])}const P=i(k,[["render",_],["__file","获取云麦好轻体重数据并在vuepress上通过echarts折线图展示.html.vue"]]);export{P as default};
