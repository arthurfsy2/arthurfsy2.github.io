import{_ as i,r as e,o as c,c as l,a as n,b as s,d as a,e as u}from"./app-00444026.js";const r={},d={class:"hint-container tip"},k=n("p",{class:"hint-container-title"},"前言",-1),v={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/issues/3372",target:"_blank",rel:"noopener noreferrer"},m={href:"https://paper-dragon.github.io/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"成果展示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#成果展示","aria-hidden":"true"},"#"),s(" 成果展示")],-1),h=n("div",{class:"hint-container note"},[n("p",{class:"hint-container-title"},"说明"),n("p",null,[s("以下图片是一个svg图片，因此可以通过"),n("code",null,"![]()"),s("的格式在文章的任意位置引用，且因为是矢量图，因此是在任何界面查看都是“高清无损”的。")])],-1),y={class:"hint-container tip"},_=n("p",{class:"hint-container-title"},"提示",-1),g=n("p",null,"本词云特点总结：",-1),f=n("li",null,"矢量图，很清楚",-1),w={href:"https://fonts.google.com/noto/specimen/Noto+Serif+TC",target:"_blank",rel:"noopener noreferrer"},q=n("li",null,"在Git push更新项目时可通过Github Action自动运行生成词云的python文件，并与原有deploy-docs.yml合并在一起",-1),x=n("figure",null,[n("img",{src:"https://raw.gitmirror.com/arthurfsy2/arthurfsy2.github.io/main/src/.vuepress/public/assets/img/wordcloud.svg",alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),X=n("h2",{id:"方法思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法思路","aria-hidden":"true"},"#"),s(" 方法思路")],-1),S=n("p",null,[s("总体来说，词云生成的思路如下流程图。"),n("br"),s(" 通过wordcloud2Svg.py生成图片，然后将该流程集成到deploy-docs.yml当中（与部署Github Page联合一起使用）")],-1),T=u(`<h3 id="词云生成流程" tabindex="-1"><a class="header-anchor" href="#词云生成流程" aria-hidden="true">#</a> 词云生成流程</h3><p>wordcloud2Svg.py代码示例见后面章节</p><blockquote><p>具体可见本仓库的<code>src/.vuepress/public/scripts/wordcloud2Svg.py</code></p></blockquote><p>主要说明（具体说明见代码的注释）：</p><ol><li>遍历文章目录，将所有<code>.md</code>的文章内容合并为<code>contents</code></li><li>通过<code>jieba.analyse.textrank</code>来获取<code>contents</code>当中的关键词（通过topK设置关键词数量），并输出为<code>keyword_counts</code></li><li>通过<code>OpenCC</code>将<code>keyword_counts</code>转换为繁体（可根据自身喜好决定是否需要转换）</li><li>通过<code>wordcloud.generate_from_frequencies()</code>来生成词云内容</li><li>通过<code>wordcloud.to_svg(embed_font=True)</code>来生成svg内容</li><li>将最终结果写入到<code>/assets/img/wordcloud.svg</code>文件当中</li></ol><h3 id="自动生成流程" tabindex="-1"><a class="header-anchor" href="#自动生成流程" aria-hidden="true">#</a> 自动生成流程</h3><p>deploy-docs.yml代码示例如下，具体可见本仓库的<code>.github/workflows/deploy-docs.yml</code><br> 主要说明（具体说明见代码的注释）：</p><ol><li>需要修改内容<br> 将以下代码修改为你自己的github账号、邮箱</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>env:
  GITHUB_NAME: XXXX
  GITHUB_EMAIL: XXXX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>在新增/修改文章然后push到Github时，将会运行Action脚本，实现动态生成</li></ol><h3 id="图片使用说明" tabindex="-1"><a class="header-anchor" href="#图片使用说明" aria-hidden="true">#</a> 图片使用说明</h3><p>如果action流程可正常运行，每次push后，将会在项目的<code>src/.vuepress/public/assets/img</code>路径下生成wordcloud.svg，此时在任意文章位置，你可以有以下3种引用图片方式：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span>vuepress-theme-hope内部资源路径，举例：</span>
![](/assets/img/wordcloud.svg)

<span class="token title important"><span class="token punctuation">#</span>github原始图片路径，举例：</span>
![](https://raw.githubusercontent.com/arthurfsy2/arthurfsy2.github.io/main/src/.vuepress/public/assets/img/wordcloud.svg)

<span class="token title important"><span class="token punctuation">#</span>gitmirror免费CDN路径（githubusercontent换成gitmirror即可），举例：</span>
![](https://raw.gitmirror.com/arthurfsy2/arthurfsy2.github.io/main/src/.vuepress/public/assets/img/wordcloud.svg)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考代码" tabindex="-1"><a class="header-anchor" href="#参考代码" aria-hidden="true">#</a> 参考代码</h2><h3 id="wordcloud2svg" tabindex="-1"><a class="header-anchor" href="#wordcloud2svg" aria-hidden="true">#</a> wordcloud2Svg</h3><details class="hint-container details"><summary>wordcloud2Svg.py</summary><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">import</span> jieba
<span class="token keyword">from</span> jieba <span class="token keyword">import</span> analyse
<span class="token keyword">from</span> wordcloud <span class="token keyword">import</span> WordCloud
<span class="token keyword">from</span> opencc <span class="token keyword">import</span> OpenCC

<span class="token comment"># 获取当前脚本文件所在目录</span>
script_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 定义目录路径和输出路径</span>

dir_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>normpath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>script_dir<span class="token punctuation">,</span> <span class="token string">&quot;../../../&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#本博客对应的是/src目录</span>

output_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>normpath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>script_dir<span class="token punctuation">,</span> <span class="token string">&quot;../assets/img&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#本博客对应的是/src/.vuepress/public/assets/img目录</span>

font_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>normpath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>script_dir<span class="token punctuation">,</span> <span class="token string">&quot;./font.otf&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#本博客对应的是/src/.vuepress/public/scripts/font.otf</span>

output_path_svg <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>normpath<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>script_dir<span class="token punctuation">,</span> <span class="token string">&quot;../assets/img/wordcloud.svg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">#本博客对应的是/src/.vuepress/public/assets/img/wordcloud.svg</span>

<span class="token comment">#print(f&quot;dir_path:{dir_path}\\n\\noutput_path:{output_path}\\n\\nfont_path:{font_path}\\n\\noutput_path_svg:{output_path_svg}\\n\\n&quot;)</span>

contents <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
<span class="token keyword">def</span> <span class="token function">merge_md_contents</span><span class="token punctuation">(</span>folder_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    contents <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token keyword">for</span> <span class="token builtin">file</span> <span class="token keyword">in</span> os<span class="token punctuation">.</span>listdir<span class="token punctuation">(</span>folder_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        file_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>folder_path<span class="token punctuation">,</span> <span class="token builtin">file</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>isdir<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
            contents <span class="token operator">+=</span> merge_md_contents<span class="token punctuation">(</span>file_path<span class="token punctuation">)</span>  <span class="token comment"># 递归遍历子文件夹并将内容合并</span>
        <span class="token keyword">elif</span> <span class="token builtin">file</span><span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.md&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>file_path<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
                file_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
                contents <span class="token operator">+=</span> file_content
    <span class="token keyword">return</span> contents

contents <span class="token operator">=</span> merge_md_contents<span class="token punctuation">(</span>dir_path<span class="token punctuation">)</span>
<span class="token comment">#with open(r&quot;D:\\Users\\ArthurFsy\\Documents\\python脚本\\rawPic\\output.md&quot;, &quot;w&quot;, encoding=&quot;utf-8&quot;) as f:</span>
<span class="token comment">#                f.write(contents)</span>
<span class="token comment">#print(contents)</span>

<span class="token comment"># 使用jieba的textrank功能提取关键词</span>
keywords <span class="token operator">=</span> jieba<span class="token punctuation">.</span>analyse<span class="token punctuation">.</span>textrank<span class="token punctuation">(</span>contents<span class="token punctuation">,</span> topK<span class="token operator">=</span><span class="token number">150</span><span class="token punctuation">,</span> withWeight<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> allowPOS<span class="token operator">=</span><span class="token punctuation">(</span><span class="token string">&#39;ns&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;n&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;vn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;v&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#print(f&quot;keywords={keywords}&quot;)</span>

<span class="token comment"># 创建 OpenCC 对象，指定转换方式为简体字转繁体字</span>
converter <span class="token operator">=</span> OpenCC<span class="token punctuation">(</span><span class="token string">&#39;s2t.json&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 统计每个关键词出现的次数</span>
keyword_counts <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">for</span> keyword <span class="token keyword">in</span> keywords<span class="token punctuation">:</span>
    count <span class="token operator">=</span> contents<span class="token punctuation">.</span>count<span class="token punctuation">(</span>keyword<span class="token punctuation">)</span>
    keyword <span class="token operator">=</span> converter<span class="token punctuation">.</span>convert<span class="token punctuation">(</span>keyword<span class="token punctuation">)</span> <span class="token comment">#简体转繁体，如果注释掉则保留为简体的内容</span>
    keyword_counts<span class="token punctuation">[</span>keyword<span class="token punctuation">]</span> <span class="token operator">=</span> count

<span class="token comment">#print(keyword_counts)</span>


<span class="token comment"># 创建一个WordCloud对象，并设置字体文件路径和轮廓图像</span>

wordcloud <span class="token operator">=</span> WordCloud<span class="token punctuation">(</span>width<span class="token operator">=</span><span class="token number">1600</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">800</span><span class="token punctuation">,</span> background_color<span class="token operator">=</span><span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span> font_path<span class="token operator">=</span>font_path<span class="token punctuation">)</span>


<span class="token comment"># 生成词云</span>
wordcloud<span class="token punctuation">.</span>generate_from_frequencies<span class="token punctuation">(</span>keyword_counts<span class="token punctuation">)</span>

<span class="token comment"># 转换为svg格式输出</span>
svg_image <span class="token operator">=</span> wordcloud<span class="token punctuation">.</span>to_svg<span class="token punctuation">(</span>embed_font<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>output_path_svg<span class="token punctuation">,</span> <span class="token string">&quot;w+&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;UTF8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>svg_image<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;已保存至</span><span class="token interpolation"><span class="token punctuation">{</span>output_path_svg<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="deploy-docs" tabindex="-1"><a class="header-anchor" href="#deploy-docs" aria-hidden="true">#</a> deploy-docs</h3><details class="hint-container details"><summary>deploy-docs.yml</summary><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token comment"># make sure this is the branch you are using</span>
      <span class="token punctuation">-</span> main

<span class="token key atrule">env</span><span class="token punctuation">:</span>
  <span class="token key atrule">GITHUB_NAME</span><span class="token punctuation">:</span> XXXX
  <span class="token key atrule">GITHUB_EMAIL</span><span class="token punctuation">:</span> XXXX

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
          <span class="token comment"># if your docs needs submodules, uncomment the following line</span>
          <span class="token comment"># submodules: true</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置Python版本
        <span class="token key atrule">id</span><span class="token punctuation">:</span> setup_python
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>python@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">python-version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.11&quot;</span>
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> pip
          <span class="token key atrule">cache-dependency-path</span><span class="token punctuation">:</span> <span class="token string">&#39;src/.vuepress/public/scripts/requirements.txt&#39;</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装python依赖
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          pip install -r src/.vuepress/public/scripts/requirements.txt</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 生成图云
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          python src/.vuepress/public/scripts/wordcloud2Svg.py</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 提交更新图云
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git config --local user.email &quot;\${{ env.GITHUB_EMAIL }}&quot;
          git config --local user.name &quot;\${{ env.GITHUB_NAME }}&quot;
          git add .
          git commit -m &quot;Moved to src/.vuepress/public/assets/img/wordcloud.svg&quot;
          git push</span>

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 设置 Node.js 和 Yarn
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/setup<span class="token punctuation">-</span>node@v2.4.1
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">node-version</span><span class="token punctuation">:</span> 20.x
          <span class="token key atrule">cache</span><span class="token punctuation">:</span> <span class="token string">&#39;npm&#39;</span>
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> npm install <span class="token punctuation">-</span>g yarn

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 安装node依赖
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 构建文档
        <span class="token key atrule">env</span><span class="token punctuation">:</span>
          <span class="token key atrule">NODE_OPTIONS</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>max_old_space_size=8192
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token punctuation">-</span>
          yarn run docs<span class="token punctuation">:</span>build
          <span class="token punctuation">&gt;</span> src/.vuepress/dist/.nojekyll

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 部署文档
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># This is the branch where the docs are deployed to</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> src/.vuepress/dist

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,18);function j(C,I){const t=e("ExternalLinkIcon"),p=e("Share"),o=e("Mermaid");return c(),l("div",null,[n("div",d,[k,n("p",null,[s("无意间看到一个"),n("a",v,[s("issue"),a(t)]),s("有提及希望vuepress-theme-hope能新增echarts的词云，看了"),n("a",m,[s("paper-dragon"),a(t)]),s("的成果，果然很赞。但是由于目前theme-hope兼容的echarts图表有限，因此采用了“另辟蹊径”的方法来实现动态获取博客所有文章关键词，然后在博客中动态显示（每git push一次就自动更新词云）")])]),a(p,{colorful:"",services:"qq,weibo,qrcode"}),b,h,n("div",y,[_,g,n("ol",null,[f,n("li",null,[s("选了自认为效果还不错的繁体字体："),n("a",w,[s(" Noto Serif TC "),a(t)])]),q])]),x,X,S,a(o,{id:"mermaid-46",code:"eJzT1dXlKsksyUm1Ung2dcuTvZOfNcx9sX09F0g8LSe/PDkjsahEIcSFq7g0Kb0osSBDoTy/KCU5J780xSi4LF2voJLr6YSOpzu3PetseDan89m09uerFzybuuFZ7zpdXbunrZtfTln3Yn3v8ynzn3VMAIpAGE9n73uyayJXal4KwtyU1IKc/ErdlPzkYr3K3ByuzBTD6Bfr9j3fu849sySjNEnBMbkkMz8vFqyLC90VQKPRDQAAeFxj1w=="}),T])}const B=i(r,[["render",j],["__file","抓取博客文章关键词并在vuepress上显示动态词云.html.vue"]]);export{B as default};
