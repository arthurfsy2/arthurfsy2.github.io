---
icon: edit
date: 2022-03-08
category:
  - summary
tag:
  - 心得
---
# HOME ASSISTANT 总结

## 1.安装

### docker方式：

- **Win10:**

[windows10安装docker](https://blog.csdn.net/m0_56000832/article/details/120992771)

命令：

```docker
docker run --init -d --name="home-assistant" -e "TZ=Asia/Shanghai" -v /d/home_assistant/config:/config --net=host homeassistant/home-assistant:latest 
```

- **Linux（云服务器）:**

```docker
docker run --init -d --name="home-assistant" -e "TZ=Asia/Shanghai" -v //www/wwwroot/device.4a1801.life/config:/config --net=host homeassistant/home-assistant:latest 
```

- **群晖:**

#### [Home Assistan安装—之群晖Docker玩法](https://zhuanlan.zhihu.com/p/341395089)

## 2.配置SSL

[宝塔反代HomeAssistant并添加SSL笔记 - Yuan (9kr.cc)](https://www.9kr.cc/archives/114/)

注1：宝塔反代设置

```
#PROXY-START/

location ^~ /
{
    proxy_pass http://127.0.0.1:8123;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 86400;
    add_header X-Cache $upstream_cache_status;


    #Set Nginx Cache


  

    set $static_fileSIjN7esB 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
        set $static_fileSIjN7esB 1;
        expires 12h;
        }
    if ( $static_fileSIjN7esB = 0 )
    {
    add_header Cache-Control no-cache;
    }

}

#PROXY-END/
```

```
#PROXY-START/

location ^~ /
{
    proxy_pass http://127.0.0.1:8123;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header REMOTE-HOST $remote_addr;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_read_timeout 86400;
    add_header X-Cache $upstream_cache_status;


    #Set Nginx Cache


  

    set $static_fileSIjN7esB 0;
    if ( $uri ~* "\.(gif|png|jpg|css|js|woff|woff2)$" )
    {
        set $static_fileSIjN7esB 1;
        expires 12h;
        }
    if ( $static_fileSIjN7esB = 0 )
    {
    add_header Cache-Control no-cache;
    }

}

#PROXY-END/
```

注2:configuration.yaml修改如下`<mark>`（群晖在线文件配置需要编码格式为UTF-8才能备注里加中文）`</mark>`

```
http:
  use_x_forwarded_for: true
  trusted_proxies:
    - 119.23.60.199   //公网IP地址
    - 172.17.0.1
    - 127.0.0.1
    - ::1
```

## 3.安装集成

### 主要集成：HACS、hass-xiaomi-miot、Gree climate

注：也可以通过下载zip文件解压缩方式安装集成

1. [HACS](https://zhuanlan.zhihu.com/p/400985801)：可理解为第三方“应用市场”，可安装[HACS 极速版 ](https://github.com/hacs-china/integration)

2. [ xiaomi-miot-auto](https://zhuanlan.zhihu.com/p/444212384)：可接入**小米**设备

3. [Gree climate](https://zhuanlan.zhihu.com/p/397561665)：可接入**格力空调**

4. [巴法 bemfa](https://post.smzdm.com/p/a4pn9rdw/)：可**通过小爱同学**控制美的、格力等其他品牌空调

5. [Midea AC LAN](https://post.smzdm.com/p/a4pn9rdw/):可接入**美的设备（部分）**

6. [Node-red](https://bbs.hassbian.com/thread-6868-1-2.html):可通过该方式接入其他实体，如油价查询、**海尔**设备、企业微信消息推送、**比亚迪**数据接入、各种**抓包**数据接入

7. [南方电网HA集成 ](https://github.com/CubicPill/china_southern_power_grid_stat)：可接入南方电网数据查询电费

8. [[Garmin Connect HA集成（自己修改版本）](https://github.com/arthurfsy/home-assistant-garmin_connect_CN)](https://github.com/cyberjunky/home-assistant-garmin_connect)

9. [NodeRed安装配置 ](https://zhuanlan.zhihu.com/p/456741817)
  [Node-red节点备份](https://pan.4a1801.life/Onedrive-swu/%E4%B8%AA%E4%BA%BA%E5%BB%BA%E7%AB%99/Home%20Assistant/Node-red)

>注：也可以通过下载zip文件解压缩方式安装集成

[Releases · al-one/hass-xiaomi-miot (github.com)](https://github.com/al-one/hass-xiaomi-miot/releases)

[Releases · hacs/integration (github.com)](https://github.com/hacs/integration/releases)

## 4.主题设置

[[HassOS系列\] HomeAssistant主题的安装使用 )](https://www.bilibili.com/read/cv11631791)

## 5.参考教程

- [智趣盒子home-assistant全面版&amp;高级版专用说明书 - 社区交流 - ioBroker中国](https://bbs.iobroker.cn/t/topic/12943/14)
- [HomeAssistant学习笔记 (jiluxinqing.com)](https://ha.jiluxinqing.com/#/)a
