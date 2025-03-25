---
icon: edit
date: 2023-09-05
category:
  - 经验总结
tag:
  - IT总结
order: 5
---
# running_page部署心得

## 前言

Running page这个项目，是我接触的第一个“较深入”（相对编程小白的我来说）的项目。

一开始，是为了找到导出咕咚运动数据，一直找不到导出的方法。[^1]

后来偶尔看到有人推荐这个项目，不仅可以支持数据导出，还支持了数据的图形化展示。

对于喜欢跑步的我（最近沉迷Blog就没怎么跑了）来说，是一个很棒的项目。



- 项目地址：[yihong0618/running_page](https://github.com/yihong0618/running_page)

- 支持多运动类型的fork：[ben-29/workouts_page](https://github.com/ben-29/workouts_page)

> Ben的fork更适用于喜欢多个活动项目的情况

- 我的fork：[arthurfsy2/workouts_page_fsy](https://github.com/arthurfsy2/workouts_page_fsy)


## Vercel部署

一开始是在Vercel上部署的，部署用的是支持ben的fork。主要参考了这篇文章：[使用 GitHub Pages 部署 Running Page 个人跑步主页 - KOBIN 技术随笔](https://blog.kobin.cn/blog/program/p3/2396.html)

部署完后，通过Github Action定时采集数据，在Github上稳定运行了几个月的时间。后来群晖、云服务器经历了卡顿需要重装的事情（其实也和Github没啥关系），萌生了“要牢牢把数据抓在手里”的想法，就尝试本地部署项目。

> 后面发现docker部署会导致很多冗余的容器产生，因此又换回部署到 `vercel`上。以下步骤仅供了解docker部署方式。

## 群晖Docker部署(2023/8/9)

估计是因为这个方法太过冷门，查询issue也没有啥完整的步骤，因此自己捣腾了很久终于成功了，还在[相关的issue](https://github.com/yihong0618/running_page/issues/181#issuecomment-1671016002)上回复了

### 步骤

今天成功在群晖上部署了，~~链接：[这里](http://ddns.4a1801.life:8088/)~~。但是部署有一些坑需要注意，我说一下我的步骤：
1、SSH群晖后，查询python的版本需要满足yihong在首页的要求(node >= 14.15.0 python >= 3.7)，因此需要安装python3、Nodejs、GIT server套件。我是安装了spk7的python3.11，因此安装完套件后SSH运行：
`ln -s /volume1/@appstore/python311/bin/pip3 /usr/bin/pip3` --这样可以设置群晖命令行下默认的python版本
`ln -s /volume1/@appstore/python311/bin/python3 /usr/bin/python3`
最后，命令行输入 `python3 --version`、`pip3 --version`、`git -v`、`node -v`命令，看对应的环境是否都按照好了
[![image](https://user-images.githubusercontent.com/129527972/259370561-c1567ab4-9eea-4f61-9d49-cff2d14fa88f.png)](https://user-images.githubusercontent.com/129527972/259370561-c1567ab4-9eea-4f61-9d49-cff2d14fa88f.png)

2、
1）打开你需要存储的目录，比如 `cd /volume1/docker`
2）然后 `git clone https://github.com/yihong0618/running_page.git`下载到该目录
3）接着按照yihong的说明，修改 `gatsby-config.js`对应的内容。
（我下载的库的是 `https://github.com/ben-29/workouts_page.git`，但是操作流程都一样）
3、
1）`cd /volume1/docker/running_page`--进入项目目录
2）打开 `依赖文件requirements.txt`中，其中的 `git+https://github.com/alenrajsp/tcxreader.git`改成 `git+https://ghproxy.com/https://github.com/alenrajsp/tcxreader.git`才能正常访问，@ben-29 ，如果是ben的版本，requirements.txt还需删除以下多余的（不过也我只遇到了pycrypto无法正常下载的问题）
`bs4 pycrypto html.parser aiofiles`
[![image](https://user-images.githubusercontent.com/129527972/259371179-0ab984a6-5012-4294-bc56-503104b76cc3.png)](https://user-images.githubusercontent.com/129527972/259371179-0ab984a6-5012-4294-bc56-503104b76cc3.png)

4、如果提示类似无法连接 `http://deb.debian.org/`之类的，可以尝试把路由器的DNS改为 `8.8.8.8`或者 `114.114.114.114`试一下。
5、运行 `docker build -t running_page:latest . --build-arg app=Garmin-CN --build-arg email="2XXXX.com"  --build-arg password="XXXXX"`
6、经过上面的步骤，终于艰难地把镜像给搞定了，然后最后启动容器：
`docker run -itd --restart=always --name workout_page -p 8088:80 running_page:latest` 这样可以把端口映射到8088（可更改）
7、如果有公网IP，搭配ddns-go即可实现外网访问
8、可以考虑搭配群晖的定时任务，定期跑 `docker build -t running_page:latest . --build-arg app=Garmin-CN --build-arg email="2XXXX.com"  --build-arg password="XXXXX"`，这个我后面再试试


## 页面美化

- 字体更换教程(2024/12/11更新)：参考了[如何更改字体？](https://mfydev.github.io/Running-Page-Wiki/zh/FAQ/change-font/)这篇文章后，将字体更换为MGI-font

- 整体页面美化(2025/03/25更新)：根据几个fork的仓库，设计了一版浅色主题，详见：[Arthur feng 锻炼记录](https://fsy.4a1801.life/)

[^1]: 咕咚承载着我体重暴瘦的时候骑单车的记录，也是一段很值得怀念的回忆了。详见：[2014/8/22购买单车设备、骑行10.31km](/Arthur/Qzone/说说.html#_8月-1)、[2015/2/15单车被偷](https://blog.4a1801.life/Arthur/Qzone/%E8%AF%B4%E8%AF%B4.html#_2%E6%9C%88) 后来导出咕咚骑行记录的GPX后，就导入到了Garmin Connect当中了。
    

