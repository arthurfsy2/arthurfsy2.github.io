import{_ as t,r as a,o as r,c as d,a as e,b as n,d as s,e as l}from"./app-f5e949b4.js";const c={},o={id:"【node-red长期稳定】云麦好轻app体重数据接入ha",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#【node-red长期稳定】云麦好轻app体重数据接入ha","aria-hidden":"true"},"#",-1),v={href:"https://bbs.hassbian.com/thread-20999-1-1.html",target:"_blank",rel:"noopener noreferrer"},m=e("blockquote",null,[e("h2",{id:"概要",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#概要","aria-hidden":"true"},"#"),n(" 概要")]),e("p",null,"家里有台云麦好轻mini，之前在论坛里也发现有大佬通过ESP32接入体重数据的教程，但尝试后失败告终。为了导出历史的体重数据+实时更新已称重数据，我找了大佬逆向了好轻的 ... 【node-red长期稳定】云麦好轻app体重数据接入HA ,『瀚思彼岸』» 智能家居技术论坛")],-1),b=e("hr",null,null,-1),h=e("p",null,[e("em",null,"本帖最后由 arthurfsy 于 2023-8-7 12:56 编辑")],-1),p={href:"https://bbs.hassbian.com/thread-14002-1-1.html",target:"_blank",rel:"noopener noreferrer"},_=e("br",null,null,-1),g=e("img",{src:"https://attachment.hasstatic.com/forum/202305/08/153601adsf119b8iszj5sd.png",alt:"",loading:"lazy"},null,-1),w=e("strong",null,"一.本flow功能：",-1),x=e("br",null,null,-1),f={href:"https://bbs.hassbian.com/thread-18842-1-1.html",target:"_blank",rel:"noopener noreferrer"},y=e("br",null,null,-1),A=e("br",null,null,-1),k=e("strong",null,"二.使用方法：",-1),D=e("br",null,null,-1),I=e("br",null,null,-1),N=l(`<p>2. 安装以下节点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crypto-wz
node-red-contrib-spreadsheet-in
node-red-node-base64
node-red-contrib-moment
node-red-contrib-home-assistant-websocket
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3. 参考flow里的顺序，依次运行1-6步骤，第7步骤按需运行</p><p>三.各步骤额外说明<br> 1.构建参数1.1账号：打开“输入账号、密码”这个function节点，将</p><p>13800138000替换为你自己的手机号</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var account = &quot;13800138000&quot;  //输入账号（手机号）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.2密码：打开“输入账号、密码”这个function节点，将下面引号的内容替换为你自己的加密结果（参考下面1.3步骤）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var password_RSA_orgin = &quot;U67MKv7/h3aR5Z6nIVAMGWbqG4h0KrzHS5SFOv75jbTU7VMtIIPWcxO6tJn/DcI26I+dDUlH9Sc7P52Pws9DMg==&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>1.3需要打开cyberchef对应的加密网址，将input的“123456”改为你自己的密码，然后复制下面的output结果（固定为88位字符）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://cyberchef.org/#recipe=RSA_Encrypt(&#39;-----BEGIN%20PUBLIC%20KEY-----%5CnMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJKcIu%2BiATe0QPGIVDzMYsMA6kH9FcY9%5CnOr0I4WJJfEgw/N2e0Us/9JVV1CwdV6W2XIl4KqTeH3ydw6tagagPkSsCAwEAAQ%3D%3D%5Cn-----END%20PUBLIC%20KEY-----&#39;,&#39;RSAES-PKCS1-V1_5&#39;,&#39;SHA-1&#39;)To_Base64(&#39;A-Za-z0-9%2B/%3D&#39;)&amp;input=MTIzNDU2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.模拟登录<br> 通过这个步骤来构建sign参数，用以获取userId、refreshToken，这两个值每个账号都是固定的，仅需运行一次即可（可通过debug节点查看已获取的数据）</p><p>3.动态获取accessToken<br> 设置每1小时登陆一次，其中sign加密的方式与模拟登录的逻辑相同</p><p>4.获取历史体重数据<br> 只能手动触发一次，否则会重复。第一次执行后，会在/data目录下生成weight.yourname.csv文件（</p><p>yourname为你修改后的名字），<br> 实际的存储路径可参考下面：</p><p>4.1如果NR是docker容器部署的，路径可能如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>主机/存储卷目录（实际文件存放目录）：/www/server/docker/volumes/node_red_data/_data  
挂载路径（容器内部路径）：/data
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>即NR节点是/data/weight.yourname.csv，实际存储路径为/www/server/docker/volumes/node_red_data/_data/weight.yourname.csv（仅为示意，具体为你自己的地址、名称）<br><img src="https://www.hasstatic.com/image/common/none.gif" alt="" loading="lazy"></p><p>4.2如果NR是虚拟机加载项部署的，路径可能如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/config/node-red/data/weight.&lt;font color=&quot;#ff0000&quot;&gt;yourname&lt;/font&gt;.csv
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.获取近N天体重数据逐项对比，只入库新体重（默认设置为获取近10天的数据进行比较，如果你的称重间隔比较长，可设置大一点），更新成功后，会在weight.yourname.csv文件里新增新的N行数据</p><p>6.查看已入库体重<br> 每5分钟执行1次，同时也是配合在HA的体重展示</p><p>7.清空功能慎用<br> 如果打开csv格式，发现重复数据较多。可删除后再次进行1-6的步骤</p><p><strong>三.卡片代码</strong><br> 单人卡片代码分享（需安装apexcharts-card），然后将sensor.yourname_weight改为你的名字</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type: custom:apexcharts-card
experimental:
  brush: true
header:
  show: true
  title: 体重记录
all_series_config:
  stroke_width: 1
graph_span: 3650d
brush:
  selection_span: 180d
series:
  - entity: sensor.yourname_weight
    data_generator: |
      return entity.attributes.createtime.map((item, index) =&gt; {
       return [new Date(item).getTime(), entity.attributes.weight[index]];
      });
    extend_to: false
    float_precision: 2
    name: yourname1体重
    show:
      in_brush: true
      in_chart: true
locale: zh-cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多人卡片代码分享（需安装apexcharts-card），然后将sensor.yourname_weight、sensor.yourname2_weight改为你的名字。<br> 如果人数超过2人，可自行添加 从 - entity: sensor.yourname2_weight到in_chart: true之间的行数，并修改- entity: sensor.yournameX_weight（X为第X个）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>type: custom:apexcharts-card
experimental:
  brush: true
header:
  show: true
  title: 体重记录
all_series_config:
  stroke_width: 1
graph_span: 3650d
brush:
  selection_span: 180d
series:
  - entity: sensor.yourname_weight
    data_generator: |
      return entity.attributes.createtime.map((item, index) =&gt; {
       return [new Date(item).getTime(), entity.attributes.weight[index]];
      });
    extend_to: false
    float_precision: 2
    name: yourname1体重
    show:
      in_brush: true
      in_chart: true
  - entity: sensor.yourname2_weight
    data_generator: |
      return entity.attributes.createtime.map((item, index) =&gt; {
       return [new Date(item).getTime(), entity.attributes.weight[index]];
      });
    extend_to: false
    float_precision: 2
    name: yourname2体重
    show:
      in_brush: true
      in_chart: true
locale: zh-cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),S=e("img",{src:"https://www.hasstatic.com/image/filetype/unknown.gif",alt:"",loading:"lazy"},null,-1),E={href:"https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDc2OTV8Y2MwYjIxMDV8MTY5NDcwMjA0NHw1NzI4M3wyMDk5OQ%3D%3D",target:"_blank",rel:"noopener noreferrer"},M=e("em",null,"(81.8 KB, 下载次数: 18)",-1);function B(T,V){const i=a("ExternalLinkIcon");return r(),d("div",null,[e("h1",o,[u,n(),e("a",v,[n("【node-red长期稳定】云麦好轻app体重数据接入HA "),s(i)])]),m,b,h,e("p",null,[n("家里有台云麦好轻mini，之前在论坛里也发现有大佬"),e("a",p,[n("通过ESP32接入体重数据"),s(i)]),n("的教程，但尝试后失败告终。"),_,n(" 为了导出历史的体重数据+实时更新已称重数据，我找了大佬逆向了好轻的登录，然后自己通过Node-Red实现整个数据获取、保存的流程。对逆向感兴趣的朋友可以查看各个function里的说明")]),e("p",null,[g,w,x,n(" 1.**无需抓包：**可直接输入账号、密码（加密后）获取历史称重数据（体重、代谢、骨密度等等，但是默认只显示体重信息），可配合卡片展示（apexcharts-card）注：这个卡片的实现也参考了"),e("a",f,[n("这里"),s(i)]),n("，但是修改了一些参数。"),y,n(" 2.可将数据保存为csv格式（相当于导出，以备其他使用需求）"),A,n(" 3.可清空原有csv数据（如果发现数据不对，可先清空再重新运行）"),k,D,n(" 1. 下载附件的flow，可通过笔记本（如nodepad--）批量将yourname替换为你自己的名字"),I,n(" 注：该步骤只是便于你管理自己的体重，且可通过这个方式，实现多人体重的展示（修改后再次导入，这样就有2份流程系统，但是对应不同人的流）")]),N,e("p",null,[S,n(),e("a",E,[n("好轻体重数据获取.json"),s(i)]),n(),M])])}const H=t(c,[["render",B],["__file","【node-red长期稳定】云麦好轻app体重数据接入HA.html.vue"]]);export{H as default};
