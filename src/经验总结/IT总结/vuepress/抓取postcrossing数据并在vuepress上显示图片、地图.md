---
icon: edit
title: 抓取postcrossing数据并在vuepress上显示图片、地图
date: 2023-11-13
category:
  - 经验总结
tag:
  - IT总结
  - vuepress
---

:::tip 前言
最近两个月又玩起了 postcrossing，想着能否抓取网站数据，形成+整合自己的展示墙、地图、统计表、明信片故事，并在博客中显示。
:::

## [成果展示（← 点击查看）](/Arthur/postcrossing/信息汇总)

新增：[在线导出数据](https://pcrecap.fengsy.cn/static/index.html)

::: important 说明
以上在线导出网站的前端，是通过 python 的 flask 库实现，整个服务是通过宝塔面板的 `网站——Python项目` 进行管理。
:::

:::info 特点总结

项目地址：https://github.com/arthurfsy2/Postcrossing_map_generator

1. 展示墙
   抓取官网的`/gallery`下的 4 个模块，下载 gallery 对应的图片，并生成包含 fronttage 的.md 文件，以便你放入到**vuepress**当中使用

2. 地图
   参考官网的`/map`的样式，通过 ClusterMap、Map 这 2 个地图分别展示了聚合效果、散点展示效果，且每个地图都通过 Geojson 来标记收发国家的“足迹”。

3. **信息汇总**：

   汇总以下模块的内容

   - 图片墙：统计个人收发数据、对应 4 个展示墙的超链接
     ![](https://raw.gitmirror.com/arthurfsy2/Postcrossing_map_generator/5ee036db3ed9ed63cfebdd16907ef6b4d3f6780a/img/summary01.png)

   - 地图展示：集成`map.html、clusterMap.html`这 2 个地图的内容

     ![](https://raw.gitmirror.com/arthurfsy2/Postcrossing_map_generator/5ee036db3ed9ed63cfebdd16907ef6b4d3f6780a/img/summary02.png)

   - 统计

     ​ 抓取官网的`/stats`下的 3 个模块，分别展示`收发记录（年、月）`、`国家分布（饼图）`、`各国明信片（表格）`、`还在漂泊的明信片（表格）`

     > 图形是通过 echarts 插件显示，表格是通过 markdown 的表格实现。）

     ![](https://raw.gitmirror.com/arthurfsy2/Postcrossing_map_generator/5ee036db3ed9ed63cfebdd16907ef6b4d3f6780a/img/summary03-1.png)

     ![](https://raw.gitmirror.com/arthurfsy2/Postcrossing_map_generator/5ee036db3ed9ed63cfebdd16907ef6b4d3f6780a/img/summary03-2.png)

   - 明信片故事：读取人工填写的`./temnplate/postcardStory`生成明信片故事的**词云**，并为每个已填写“故事”的明信片展示图片、内容

     ![](https://raw.gitmirror.com/arthurfsy2/Postcrossing_map_generator/5ee036db3ed9ed63cfebdd16907ef6b4d3f6780a/img/summary04-1.png)

     ![](https://raw.gitmirror.com/arthurfsy2/Postcrossing_map_generator/5ee036db3ed9ed63cfebdd16907ef6b4d3f6780a/img/summary04-2.png)

   - 被注册时收到的回复

     ​ 当你寄出的邮件被登记后，可定时抓取你账号 postcrossing 账号关联邮箱的**回复邮件内容**（"Hurray! Your postcard CN-XXX to XXXX"的邮件）

     ![](https://raw.gitmirror.com/arthurfsy2/Postcrossing_map_generator/5ee036db3ed9ed63cfebdd16907ef6b4d3f6780a/img/summary05.png)

   - 增量更新

     ​ 抓取后的信息会保存到./template/data/db 数据库当中，如果以后有更新，只会抓取更新部分并存入到数据库，减少对 Postcrossing 的压力。

:::

## 方法思路

总体而言，通过 `createGallery.py` 生成展示墙、通过 `createMap.py` 生成地图，最后通过 `createPersonalPage.py` 替换模板的内容，形成博客的`信息汇总.md`。

:::note Cookie 有效性
本项目的登陆原理是通过 python 的 mechanize 库进行模拟登录，成功登录后会自动保存 Cookies，因此可以放到 Github Action 中进行定期检查更新。
:::

### 整体思路

```mermaid
---
title:
---
flowchart TD
subgraph startTask.py
createGallery.py--保存到表Galleryinfo-->createMap.py--保存到表Mapinfo-->createPersonalPage.py
end

id1[login.py]<--生成/检查Cookie-->data.db
startTask.py<-->data.db
id4[mailTrack.py]<--增量保存、翻译回复内容-->data.db

```

### 各模块

```mermaid
---
title: login.py
---
flowchart TD
定期登录-->id1.1[Cookies失效（重新登陆）]
定期登录-->id1.2[Cookies有效（跳过）]
```

```mermaid
---
title: createGallery.py
---
flowchart TD
检查生成展示墙所需数据--保存相关数据到data.db-->获取已保存的图片数据-->生成4个展示墙的markdown数据
```

```mermaid
---

title: createMap.py
---
flowchart TD
检查生成地图所需数据--保存相关数据到data.db-->获取已保存的地图数据-->生成2个地图html文件
```

```mermaid
---

title: createPersonalPage.py
---
flowchart TD
获取已保存的数据-->替换template模板-->id1[生成最后的“信息汇总”.md]
```

```mermaid
---
title: mailTrack.py
---
flowchart TD
获取已回复邮件--筛选+翻译-->导入data.db
```

## 参考代码

### postcrossing 信息汇总页

[参考代码](https://github.com/arthurfsy2/Postcrossing_map_generator)
