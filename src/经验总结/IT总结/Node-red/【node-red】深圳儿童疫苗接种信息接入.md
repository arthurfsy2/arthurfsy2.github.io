---
title: 【node-red】深圳儿童疫苗接种信息接入 
icon: fab fa-node
category:
  - 经验总结
tag:
  - IT总结
  - Node-Red
date: 2022-11-14
---
 [【node-red】深圳儿童疫苗接种信息接入](https://bbs.hassbian.com/thread-18611-1-1.html)

> ## 概要
>
> 11.24更新：修改了oauth的请求头function，现在接种记录的时效比较长了，稳定性还在确认当中UI展示写在前面这个插件主要方便宝宝在深圳地区出生的家长（比如我）随 ... 【node-red】深圳儿童疫苗接种信息接入 ,『瀚思彼岸』» 智能家居技术论坛

---

_本帖最后由 arthurfsy 于 2022-11-24 10:52 编辑_ 11.24更新：修改了oauth的请求头function，现在接种记录的时效比较长了，稳定性还在确认当中

UI展示
![](https://attachment.hasstatic.com/forum/202211/14/161835lwcy85rryro8r9cy.jpg =400x)

:::tip 写在前面
这个插件主要方便**宝宝在深圳地区出生**的家长（比如我）随时查看已经接种的疫苗信息、待接种疫苗计划等信息，**在了解总花费的同时，不错过娃的疫苗接种。**

PS：小程序前端展示信息较少，并无金额、厂商等信息，但是后台是有以上数据的，本NR流进行了**数据采集、整理、展示**
:::
**目前问题**：查询接种记录容易失效，查询接种计划的token目前发现能坚持比较长时间

解决方法：如果遇到token失效导致NR无法获取数据，用你抓包的账号重新登录小程序，然后再跑一遍NR

## 已实现的功能

1、**汇总**所有自费金额

2、获取**已接种**疫苗信息（是否免费/自费金额、疫苗名称、厂商、剂次、接种时间、接种地点等）

3、获取**待接种**疫苗信息

## NR流使用主要流程

### 1.在HASS安装Node-red集成

### 2.手机微信打开“深圳疾控”公众号——打疫苗——普通疫苗（儿童预约）——接种计划/接种记录（如果绑定了多个账号，则需要切换）

![](https://attachment.hasstatic.com/forum/202211/14/161834ggml6vk6meajs6kg.jpg =400x)

3.IOS通过Stream抓包/WIN通过Charles抓PC微信小程序（对应NR的var变量），每个链接的变量对应的数值要改成你自己的

![](https://attachment.hasstatic.com/forum/202211/14/162126khbiktiugcbbi4kb.png)

**接种记录：**需要抓以下**2**个请求：

> - https://imm.szcdc.net/miWeixin/**oauth/**login?code=XXXXX  //这里的token不同的账号、每次登陆都有变化，需要抓取（动态更新的，如果失效了要重新抓）
> - https://imm.szcdc.net/miWeixin/wx/selfRegister/**getWxSelfFiftyoneById**?userInfoId=XXXXX&persNo=XXXXX   //这里的userInfoId、persNo**和上面一样**，需要抓取（固定的，只需要抓一次）

 **接种记录：**需要抓以下**1**个请求：

> - https://imm.szcdc.net/mobileSz/oneTwo/getNinePlan  //这里的token和**接种记录**的不一样，所以需要抓取（动态更新的，如果失效了要重新抓）

### 3.将抓到的headers、payload数据填入NR流的**“手工：修改X个参数”、**“手工：修改请求头”的function函数中（注意每个请求对应的数据不完全一样），点击运行(HOMEASSISTANT需要改为自己系统的)，输入完后点击部署

### 4.实体名称说明

> 最近疫苗：VaccineRec
> 计划疫苗：planVaccine

### 5.前端卡片是markdown，实体的数据已经包含颜色显示的代码，配合markdown显示更加友好。

```markdown
---
已接种疫苗--[目前总自费：<font color="#00dddd">{{ states('sensor.vaccine_total_cost')}}元</font>]：
{{ state_attr('sensor.vaccinerec','vaccinerec')}} 
---
待接种疫苗
{{ state_attr('sensor.planvaccine','planvaccine')}}
```

![](https://www.hasstatic.com/image/filetype/zip.gif) [深圳疫苗记录查询.zip](https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDMyNzR8ODAwNmEzYjB8MTY5NDcwMjI3OXw1NzI4M3wxODYxMQ%3D%3D) _(3.54 KB, 下载次数: 6)_
