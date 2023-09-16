import{_ as i,r as p,o as c,c as r,d as a,a as n,b as s,e as t}from"./app-ac715a7f.js";const u={},k=n("div",{class:"hint-container tip"},[n("p",{class:"hint-container-title"},"前言"),n("p",null,"其实之前已经通过node-red实现了获取云麦好轻的数据，并在Home Assistant上展示家庭体重了，但是感觉自动化还是有点欠缺。刚好借着写Blog的时候发现vuepress-theme-hope支持echarts扩展，就想着尝试通过折线图实现。")],-1),d=n("h2",{id:"方法思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法思路","aria-hidden":"true"},"#"),s(" 方法思路")],-1),v=n("p",null,"总体来说，数据处理的思路是:",-1),m=t('<h3 id="app逆向" tabindex="-1"><a class="header-anchor" href="#app逆向" aria-hidden="true">#</a> APP逆向</h3><p>其中对我而言最困难的就是“APP逆向”这个步骤，毕竟对抓包也只是略懂皮毛，后来花了200大洋找了大佬逆向了好轻APP登陆算法，才完成最关键也是最开始的一步。</p><h3 id="数据获取" tabindex="-1"><a class="header-anchor" href="#数据获取" aria-hidden="true">#</a> 数据获取</h3><h4 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h4>',4),b={href:"https://bbs.hassbian.com/thread-20999-1-1.html",target:"_blank",rel:"noopener noreferrer"},y=t('<h4 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> Python</h4><p>其实写python脚本的时候。是照着node-red的流程来写的，编程小白在这里又一次借鉴了ChatGPT的神秘力量完成了编程，并解决了RSA加密这一最关键的一步<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>。</p><h3 id="数据化自动更新" tabindex="-1"><a class="header-anchor" href="#数据化自动更新" aria-hidden="true">#</a> 数据化自动更新</h3>',3),h={href:"https://github.com/arthurfsy2/yunmai_weight_extract2json",target:"_blank",rel:"noopener noreferrer"},g=n("h2",{id:"图表展示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#图表展示","aria-hidden":"true"},"#"),s(" 图表展示")],-1),f=n("p",null,[s("vuepress-theme-hope内置的markdownEnhance功能，已经支持echarts图表（大部分）的展示了，可以通过await+fetch的方式引入json文件，并生成折线图。"),n("br"),s(" 效果如下：")],-1),q=t(`<h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码" aria-hidden="true">#</a> 参考代码</h2><p>修改以下代码的<br><code>const data = await fetch()</code>对应的链接、标题名称等内容即可。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>:::echarts 

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
  <span class="token string">&quot;https://raw.githubusercontent.com/arthurfsy2/yunmai_weight_extract2json/main/weight_fsy.json&quot;</span>
<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
  <span class="token string">&quot;https://raw.githubusercontent.com/arthurfsy2/yunmai_weight_extract2json/main/weight_wyf.json&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>原来的node-red是囿于自身IT技术原因，没办法实现直接输入手机、账号就可以直接获取数据，只能通过<code>cyberchef</code>手动加密，所以说起来通过node-red的flow来实现的功能还不算特别完善。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,5);function w(_,x){const o=p("Mermaid"),e=p("ExternalLinkIcon"),l=p("ECharts");return c(),r("div",null,[k,d,v,a(o,{id:"mermaid-11",code:"eJzT1dXlKsksyUm1Ung2dcuTvZOfNcx9sX09F0g8LSe/PDkjsahEwSeIi0sBCBwDAl42tD2dMFFX1+7Z1A3Pete96Nv+tH8agtu+6mnXiqc9057N3vJs2gag+NPZ+14sXPF049TnS3ZxcQEAIRY4cQ=="}),m,n("p",null,[s("数据获取其实有很多种方式，像我之前是通过node-red来进行数据处理、清洗，然后转换为HA的插件所支持的数据格式，感兴趣的可以看这里→"),n("a",b,[s("【node-red长期稳定】云麦好轻app体重数据接入HA"),a(e)])]),y,n("p",null,[s("如果是希望数据采集更稳定和方便，那可以借助pythonGithub Action了，可设置为每天定时运行workflows，进行定期取数。具体使用方法可看这里→"),n("a",h,[s("arthurfsy2/yunmai_weight_extract2json"),a(e)])]),g,f,a(l,{id:"echarts-45",config:"eJzVV0tv20YQvutXLFQEoOCCkqXYjuS6gC8BDDQo0AYo0MAI1tSS2prcFXaHeiDQoe2hp6KHAkXvRXPLPZf8mzz/RWYoPpYyZTsvI9GF5OzsfLPzfbs7CrSywMYcODtifM4lsFBAMPFajLUnAFM76nYNn/uRhEQao40f6KTLDUxSE9plv7tMVcLlw7mQ0QQeigUYHkD/F6tVF+2qmw+gr0/Gdqvjw0QozzPCdtjRtwyf2YjX6Ry2WlVC/U+c0XwZXiujGTeMqkM5+QmfemGqApBaMU+CSDrsEWbGcBKkRjEy+WuE1qqTz6alZEt69/mlcyTgeBZ53JhiBoW2aYKxe4eZIdSGeWSVmQ0f3zD092OhIpjg985OMZd+NHfniE25seJEAYV+IE9xyTS4KiH4LMJw5Nx1ork5k8tha1WQp6dZwkclVP4ArWOQ05GTAhgZRcKMWJsvpG3n9tXX+Utk5Nh1j0UI6Lt3q114YA5UKjTu1qxnGkAnZO7dqsKWqSyOEW7EHpT+FUb5QoSNrmI9z8HhLjCCg7gvE7EupBsSCd1Y4aW4l8nlQ4FPi5fl9lLAciqwhDMep8KprQ14jHYwqaiMiifk+/zZ32/++NNxnmorKXscI/acER7LSN2XwTmi12ORFr6TCuO5a7UTPS88C3O5nGwKPxNxbQ5uiIQDZAJ7lC1jdR4Vcsgl7gTZLA0J9kwv3JC52nZ7VbYhlj01G8nWOLKgs/ESKFsOn4lje5LwKBuqqNrMipTwsyYxN3GEgQDPvhG706tCVDiuY06nVFaORVmFErBc9kzalMf3OO7USzeIFUYKe6LGYjFy6gEaJ+45hoaaVfKQIhA1+RGU84GbHjDrvaE/vO2WD+1rutsvfv3r1b+PHWHRL9CxJtYjI5bVUmulqRcHDxvMsQmG4A8O/IP9ZviXT/578fTpdniBF8y18ZtwCH/Y8w/6W5f/+vd/tuBrw1XkcH1lAg1Ajaivf/t/O6oR462Q5WspN8Z0Ct+HP1Cm9U1UxPtqOBxe1OtlZ6grzd0KaKzneBBdoc1rS3Lg397fuwFNNuFQAvtDf3ATomzCIfw7PX94I6JsAPrsRbl5qK4V2Xyi5nfnPePfxd7qwhWan9sx3oiONWth1gpnjnqz6/yi2S6TM001UroWxSZaw2TzAn7P1mfdtpbdR9Z3NJz5CTfnDde7xMYSyQ55bJ1UkF10/RGW1HLUpVEyMRgMtlK7Xoq7l+vaqYcs26Gi28a/BvquXIix1y9aqAaQ0+scTgXL1v8pfQ+OnWPsI3P8bm3mJslfPMX9D+a42OvZc9V6C8dLodY=",type:"js"}),q])}const j=i(u,[["render",w],["__file","获取云麦好轻数据并在vuepress上展示.html.vue"]]);export{j as default};
