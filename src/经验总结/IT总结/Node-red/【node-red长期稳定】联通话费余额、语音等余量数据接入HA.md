---
title: 【node-red长期稳定】联通话费余额、语音等余量数据接入HA 
icon: fab fa-node
category:
  - 经验总结
tag:
  - IT总结
  - Node-Red
date: 2022-12-10
---
 [【node-red长期稳定】联通话费余额、语音等余量数据接入HA ](https://bbs.hassbian.com/thread-20040-1-1.html)

> ## 概要
>
> 此前我自己也有通过NR抓包过联通余量数据，但是发现token过期很快，然后也看到了下面的帖子，实现方式和我NR的方式差不多。补充：联通话费余额、语音、流量和积分数据接入 ... 【node-red长期稳定】联通话费余额、语音等余量数据接入HA ,『瀚思彼岸』» 智能家居技术论坛

---

_本帖最后由 arthurfsy 于 2023-4-24 16:21 编辑_

:::tip 前言
此前我自己也有通过NR抓包过联通余量数据，但是发现token过期很快，然后也看到了下面的帖子，实现方式和我NR的方式差不多。
[补充：联通话费余额、语音、流量和积分数据接入HomeAssistant  (hassbian.com)](https://bbs.hassbian.com/thread-18940-1-1.html)
后来通过查询，找到联通可以通过token\_online+appId的方式，动态获取a\_token数据，那么这个NR就是解决了token\_online保存的问题（其实不保存问题也不大，token\_online实测时效很久）

**Tips：本flow的默认更新间隔为5分钟，如果出现无法获取数据的情况，可以把间隔时间改为10-20分钟**
:::
![img](https://attachment.hasstatic.com/forum/202303/14/143425pkn9ub5rnr6ruhn5.jpg =400x)

## 本flow功能：

### 1.可定时查询联通余量（话费、语音、流量、积分数据4个实体可配合卡片展示）。

### 2.可查看目前已保存的token\_online数据（相当于导出，以备其他使用需求）

### 3.可清空token\_online数据（如果发现数据不对，可先清空再重新运行）

## 使用方法：

### 1.对联通APP进行抓包/通过1TS获取

   该步骤可选，或者下载ITS这个软件进行抓包获取token\_online+appId
我是在这个网页下面找到对应的APP下载链接：[联通流量实时监控软件1TS流量监控免费版下载](https://www.xgiu.com/llljk_1st)

```
下载地址:
https://wwt.lanzoul.com/iDpXD0ecgkfi
密码:xgiu
```

注：下载1TS APP软件后，需要先通过短信成功登陆一次，然后点击首页的“联通”——左上角“小水滴形状”——右上角“窗口”切换登陆方式。即可看到“token\_online”、“appid”数据（小坑：token\_online的字符很长，可能复制起来比较折腾）
 ![img](https://attachment.hasstatic.com/forum/202303/14/143251g3k35d37k3e5qkqd.png =400x)
 ![img](https://attachment.hasstatic.com/forum/202303/14/143251wdjizqwr41iqb33u.jpg =400x)

### 2.修改NR流里的“设置原始tokenOnline”节点，将复制的“token\_online”、“appid”粘贴到对应位置

![img](https://attachment.hasstatic.com/forum/202304/06/173428d10gk00d1kzag6sz.png)

### 3.修改file节点里的path目录，如我的是/data/token\_online.txt（文件名可自行取值）

![](https://attachment.hasstatic.com/forum/202303/14/143622ccgt744y4ctd9u27.png)
特别注意：如果NR是docker容器部署的，需要填写对应容器内部的目录
如：

```
主机/存储卷目录（实际文件存放目录）：/www/server/docker/volumes/node_red_data/_data
挂载路径（容器内部路径）：/data
```

如果NR是虚拟机加载项部署的，需要填写以下内容（#34提供的方法，已置顶）：

```
/config/node-red/data/token_online.txt
```

那么file节点的路径需要填写为/data/token\_online.txt，实际存储路径为/www/server/docker/volumes/node\_red\_data/\_data/token\_online.txt

### 4.全部设置好后，先运行“联通a\_token取值”，然后运行“联通取值--稳定取值”，即可生成实体

## 卡片代码分享：

```
type: vertical-stack
cards:
  - type: custom:mushroom-title-card
    title: 更新时间： {{states('sensor.lian_tong_tao_can_geng_xin_shi_jian')}}
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
```

 ![](https://www.hasstatic.com/image/filetype/unknown.gif) [获取联通余量.json](https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDYyNzN8YjEzMDI4YmZ8MTY5NDcwMjI2NHw1NzI4M3wyMDA0MA%3D%3D) _(23.37 KB, 下载次数: 101)_
