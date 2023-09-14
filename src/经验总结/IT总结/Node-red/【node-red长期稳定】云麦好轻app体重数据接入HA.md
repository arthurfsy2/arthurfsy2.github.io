---
title: 【node-red长期稳定】云麦好轻app体重数据接入HA 
icon: "pencil"
category:
  - 经验总结
tag:
  - IT总结
  - Node-Red
date: 2023-05-08
---
# [【node-red长期稳定】云麦好轻app体重数据接入HA ](https://bbs.hassbian.com/thread-20999-1-1.html)

> ## 概要
>
> 家里有台云麦好轻mini，之前在论坛里也发现有大佬通过ESP32接入体重数据的教程，但尝试后失败告终。为了导出历史的体重数据+实时更新已称重数据，我找了大佬逆向了好轻的 ... 【node-red长期稳定】云麦好轻app体重数据接入HA ,『瀚思彼岸』» 智能家居技术论坛

---

_本帖最后由 arthurfsy 于 2023-8-7 12:56 编辑_

家里有台云麦好轻mini，之前在论坛里也发现有大佬[通过ESP32接入体重数据](https://bbs.hassbian.com/thread-14002-1-1.html)的教程，但尝试后失败告终。
为了导出历史的体重数据+实时更新已称重数据，我找了大佬逆向了好轻的登录，然后自己通过Node-Red实现整个数据获取、保存的流程。对逆向感兴趣的朋友可以查看各个function里的说明

 ![](https://attachment.hasstatic.com/forum/202305/08/153601adsf119b8iszj5sd.png)**一.本flow功能：**
1.**无需抓包：**可直接输入账号、密码（加密后）获取历史称重数据（体重、代谢、骨密度等等，但是默认只显示体重信息），可配合卡片展示（apexcharts-card）注：这个卡片的实现也参考了[这里](https://bbs.hassbian.com/thread-18842-1-1.html)，但是修改了一些参数。
2.可将数据保存为csv格式（相当于导出，以备其他使用需求）
3.可清空原有csv数据（如果发现数据不对，可先清空再重新运行）**二.使用方法：**
1\. 下载附件的flow，可通过笔记本（如nodepad--）批量将yourname替换为你自己的名字
注：该步骤只是便于你管理自己的体重，且可通过这个方式，实现多人体重的展示（修改后再次导入，这样就有2份流程系统，但是对应不同人的流）

2\. 安装以下节点：

```
crypto-wz
node-red-contrib-spreadsheet-in
node-red-node-base64
node-red-contrib-moment
node-red-contrib-home-assistant-websocket
```

3\. 参考flow里的顺序，依次运行1-6步骤，第7步骤按需运行

三.各步骤额外说明
1.构建参数1.1账号：打开“输入账号、密码”这个function节点，将

13800138000替换为你自己的手机号

```
var account = "13800138000"  //输入账号（手机号）
```

1.2密码：打开“输入账号、密码”这个function节点，将下面引号的内容替换为你自己的加密结果（参考下面1.3步骤）

```
var password_RSA_orgin = "U67MKv7/h3aR5Z6nIVAMGWbqG4h0KrzHS5SFOv75jbTU7VMtIIPWcxO6tJn/DcI26I+dDUlH9Sc7P52Pws9DMg=="
```

1.3需要打开cyberchef对应的加密网址，将input的“123456”改为你自己的密码，然后复制下面的output结果（固定为88位字符）

```
https://cyberchef.org/#recipe=RSA_Encrypt('-----BEGIN%20PUBLIC%20KEY-----%5CnMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAJKcIu%2BiATe0QPGIVDzMYsMA6kH9FcY9%5CnOr0I4WJJfEgw/N2e0Us/9JVV1CwdV6W2XIl4KqTeH3ydw6tagagPkSsCAwEAAQ%3D%3D%5Cn-----END%20PUBLIC%20KEY-----','RSAES-PKCS1-V1_5','SHA-1')To_Base64('A-Za-z0-9%2B/%3D')&input=MTIzNDU2
```

2.模拟登录
通过这个步骤来构建sign参数，用以获取userId、refreshToken，这两个值每个账号都是固定的，仅需运行一次即可（可通过debug节点查看已获取的数据）

3.动态获取accessToken
设置每1小时登陆一次，其中sign加密的方式与模拟登录的逻辑相同

4.获取历史体重数据
只能手动触发一次，否则会重复。第一次执行后，会在/data目录下生成weight.yourname.csv文件（

yourname为你修改后的名字），
实际的存储路径可参考下面：

4.1如果NR是docker容器部署的，路径可能如下：

```
主机/存储卷目录（实际文件存放目录）：/www/server/docker/volumes/node_red_data/_data  
挂载路径（容器内部路径）：/data
```

即NR节点是/data/weight.yourname.csv，实际存储路径为/www/server/docker/volumes/node\_red\_data/\_data/weight.yourname.csv（仅为示意，具体为你自己的地址、名称）
![](https://www.hasstatic.com/image/common/none.gif)

4.2如果NR是虚拟机加载项部署的，路径可能如下：

```
/config/node-red/data/weight.<font color="#ff0000">yourname</font>.csv
```

5.获取近N天体重数据逐项对比，只入库新体重（默认设置为获取近10天的数据进行比较，如果你的称重间隔比较长，可设置大一点），更新成功后，会在weight.yourname.csv文件里新增新的N行数据

6.查看已入库体重
每5分钟执行1次，同时也是配合在HA的体重展示

7.清空功能慎用
如果打开csv格式，发现重复数据较多。可删除后再次进行1-6的步骤

**三.卡片代码**
单人卡片代码分享（需安装apexcharts-card），然后将sensor.yourname\_weight改为你的名字

```
type: custom:apexcharts-card
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
      return entity.attributes.createtime.map((item, index) => {
       return [new Date(item).getTime(), entity.attributes.weight[index]];
      });
    extend_to: false
    float_precision: 2
    name: yourname1体重
    show:
      in_brush: true
      in_chart: true
locale: zh-cn
```

多人卡片代码分享（需安装apexcharts-card），然后将sensor.yourname\_weight、sensor.yourname2\_weight改为你的名字。
如果人数超过2人，可自行添加 从 - entity: sensor.yourname2\_weight到in\_chart: true之间的行数，并修改\- entity: sensor.yournameX\_weight（X为第X个）

```
type: custom:apexcharts-card
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
      return entity.attributes.createtime.map((item, index) => {
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
      return entity.attributes.createtime.map((item, index) => {
       return [new Date(item).getTime(), entity.attributes.weight[index]];
      });
    extend_to: false
    float_precision: 2
    name: yourname2体重
    show:
      in_brush: true
      in_chart: true
locale: zh-cn
```

 ![](https://www.hasstatic.com/image/filetype/unknown.gif) [好轻体重数据获取.json](https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDc2OTV8Y2MwYjIxMDV8MTY5NDcwMjA0NHw1NzI4M3wyMDk5OQ%3D%3D) _(81.8 KB, 下载次数: 18)_
