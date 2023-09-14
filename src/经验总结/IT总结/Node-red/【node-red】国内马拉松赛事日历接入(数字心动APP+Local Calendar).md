---
title: 【node-red】国内马拉松赛事日历接入(数字心动APP+Local Calendar) 
icon: "pencil"
category:
  - 经验总结
tag:
  - IT总结
  - Node-Red
date: 2023-03-09
---
[【node-red】国内马拉松赛事日历接入(数字心动APP+Local Calendar) ](https://bbs.hassbian.com/thread-19986-1-1.html)

> ## 概要
>
> 国内马拉松赛事日历接入(数字心动APP+Local Calendar)通过对数字心动APP进行抓包，可获取全国/某省所有已记录的马拉松赛事信息，并可通过Local Calendar应用进行查看。本 ... 【node-red】国内马拉松赛事日历接入(数字心动APP+Local Calendar) ,『瀚思彼岸』» 智能家居技术论坛

---

_本帖最后由 arthurfsy 于 2023-3-9 17:18 编辑_

**国内马拉松赛事日历接入(数字心动APP+Local Calendar)**

通过对数字心动APP进行抓包，可获取全国/某省所有已记录的马拉松赛事信息，并可通过Local Calendar应用进行查看。

## 本flow功能：
1.可定时查询所有赛事并入库更新，且后续更新时，如果判断为新赛事，才将新的赛事通过日历服务更新（目前Local Calendar服务只允许新增，暂时不允许更新和删除，所以只能通过flow来控制）。
2.可查看目前所有已入库的赛事信息
3.可清空目前所有已入库的赛事信息（如果发现数据不对，可先清空再重新运行）
 ![](https://attachment.hasstatic.com/forum/202303/09/171334bzxv88t55771c5mm.png)![](https://attachment.hasstatic.com/forum/202303/09/171253qcsb0scpkc1sek6p.png)

## 使用方法：
### 1.对数字心动进行抓包
  该步骤可选，或者用我提供的，但是建议最好自己抓包，避免失效。目前测试token的有效期还算比较长
### 2.添加集成Local Calendar，输入日历名称（如“赛事”）（HA版本应该是要2022.12月以后的才会有该集成）
### 3.修改NR流里的“手工修改Entity”，选择刚刚新建的日历
### 4.修改file节点里的path目录，如我的是/data/marathon.txt（文件名可自行取值）
:::note 特别注意
如果NR是docker容器部署的，需要填写对应容器内部的目录
:::
如：

```
主机/存储卷目录（实际文件存放目录）：/www/server/docker/volumes/node_red_data/_data
挂载路径（容器内部路径）：/data
```

那么file节点的路径需要填写为/data/marathon.txt，实际存储路径为`/www/server/docker/volumes/node_red_data/_data/marathon.txt`
![](https://attachment.hasstatic.com/forum/202303/09/170757xn60fwlyj31fbbdb.png)
PS：
默认为获取全国数据，如果只需要某省的记录，可在“手工修改token”该节点修改，如：

```
"provinceId":"",  //默认空为全国，可单独获取某省数据，如广东省为"provinceId":"440000"
```

 ![](https://www.hasstatic.com/image/filetype/zip.gif) [马拉松赛事日历.zip](https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDYwODB8OWIzNjM0NTR8MTY5NDcwMjI3OXw1NzI4M3wxOTk4Ng%3D%3D) _(4.26 KB, 下载次数: 9)_
