---
title: 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） 
icon: "pencil"
category:
  - 经验总结
tag:
  - IT总结
  - Node-Red
date: 2022-09-17
---
 [电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ](https://bbs.hassbian.com/thread-17830-1-1.html)

> ## 概要
>
> 写在前面：这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也 ... 电费插件（Node-Red流）-广东南方电网（2022/10/1更新修复BUG） ,『瀚思彼岸』» 智能家居技术论坛

---

_本帖最后由 arthurfsy 于 2023-4-14 15:50 编辑_

:::note 写在前面：
这个南方电网的流现在看起来比较捡漏和粗糙，有需要接入的小伙伴可以直接看下面的链接，有大佬直接做成集成了，直接输入账号密码即可登录，非常方便，我现在也在用这个集成。
[南方电网电费数据集成，支持用户名和密码直接登陆  (hassbian.com)](https://bbs.hassbian.com/thread-18578-1-1.html)
:::


## Changelog:
```
- 2022/10/1 flow更新：修复“月份控制”BUG。改为：跨月后，前3号还是取上月数据
- 2022/9/27 flow更新：增加当月每日记录2(date、power为数组格式，配合apexcharts卡片使用），分享自用卡片（先下载apexcharts，然后用yaml自定义）![](https://attachment.hasstatic.com/forum/202209/27/114108vc4b41tiu4ww4h7t.png =400x)
- 2022/9/19 flow更新：增加当月每日记录、月份控制（避免跨越需要更新，当然，如果cookies撑不到一个月就只能再次抓包了）
- 2022/9/18 flow更新：新增今年、去年电量统计
```


:::details 卡片代码
```
  type: vertical-stack
  cards:
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastdate_power
          name: 最近用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.curmonth_power
          name: 本月用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.curmonth_fee
          name: 本月电费
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastmonth_power
          name: 上月用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastmonth_fee
          name: 上月电费
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.year_power
          name: 今年用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.year_fee
          name: 今年电费
    - type: horizontal-stack
      cards:
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastyear_power
          name: 去年用电
        - hours_to_show: 24
          graph: none
          type: sensor
          detail: 1
          entity: sensor.lastyear_fee
          name: 去年电费
    - type: custom:apexcharts-card
      header:
        show: true
        title: 当月用电趋势图
      graph_span: 35d
      span:
        start: month
        offset: '-30d'
      series:
        - entity: sensor.everyday_power2
          data_generator: |
            return entity.attributes.date.map((item, index) => {
             return [new Date(item).getTime(), entity.attributes.power[index]];
            });
          extend_to: false
          float_precision: 2
          name: 每日电量（kWh）
    - type: custom:apexcharts-card
      header:
        show: true
        title: 今年往月用电趋势图
      graph_span: 1y
      span:
        start: year
      series:
        - entity: sensor.everymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) => {
             return [new Date(item).getTime(), entity.attributes.power[index]];
            });
          extend_to: false
          float_precision: 2
          name: 每月电量（kWh）
        - entity: sensor.everymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) => {
             return [new Date(item).getTime(), entity.attributes.fee[index]];
            });
          extend_to: false
          float_precision: 2
          name: 每月电费（元）
    - type: custom:apexcharts-card
      header:
        show: true
        title: 去年往月用电趋势图
      graph_span: 1y
      span:
        start: year
        offset: '-1y'
      series:
        - entity: sensor.lastyeareverymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) => {
             return [new Date(item).getTime(), entity.attributes.power[index]];
            });
          extend_to: false
          float_precision: 2
          name: 去年每月电量（kWh）
        - entity: sensor.lastyeareverymonth_power
          data_generator: |
            return entity.attributes.yearmonth.map((item, index) => {
             return [new Date(item).getTime(), entity.attributes.fee[index]];
            });
          extend_to: false
          float_precision: 2
          name: 去年每月电费（元）
```
:::


## 主要借鉴：
[也分享一个电费查询（NR)-安徽  (hassbian.com)](https://bbs.hassbian.com/forum.php?mod=viewthread&tid=13414&highlight=%E7%94%B5%E8%B4%B9)
NR运行效果：
注意：flow里面的headers、payload部分数据是用**XXXX代替，仅供参考格式。使用前需要自己抓包填入！**

![](https://attachment.hasstatic.com/forum/202209/19/150602b5q6d6dy86y2nd5p.png)

## NR流使用主要流程
### 1.在HASS安装Node-red集成
### 2.手机下载“南网在线”，登陆APP，打开“日电量”页面

![](https://attachment.hasstatic.com/forum/202209/17/154514rqqmnu8bw4i2mu0y.png =400x)
### 3.通过Stream抓包（对应NR的msg.headers、msg.payload），每个链接的headers、payload都要填

主要是以下**3**个请求：

> - https://95598.csg.cn/ucs/ma/zt/charge/queryDayElectricByMPoint
> - https://95598.csg.cn/ucs/ma/zt/charge/queryLatelyBillElec
> - **https://95598.csg.cn/ucs/ma/zt/charge/getAnalyzeFeeDetails**

![](https://attachment.hasstatic.com/forum/202209/17/153333ainttkkf667tm39t.png =400x)

### 4.将抓到的headers、payload数据填入NR流的

**“控制年份/月份”、****“获取XXXX”的function函数**中（注意每个请求对应的数据不完全一样），点击运行(HOMEASSISTANT需要改为自己系统的)，输入完后**点击部署**

### 5.实体名称说明
最近日电量：LastDate\_Power当月每日明细：EveryDay\_Power（9/19更新，具体每日数据放在属性里）
**当月每日明细2：EveryDay\_Power2（9/27更新，date、power为数组格式，配合apexcharts卡片使用）
**当月电量：CurMonth\_Power
预计当月电费：CurMonth\_Fee
上月电量：LastMonth\_Power
**上月电费：LastMonth\_Fee（9/27更新，从原来的“上月电量”属性中拆分）**
今年总电量：year\_Power（9/18更新）
**今年总电费：year\_Fee（9/27更新，从原来的“今年总电量”属性中拆分）**
去年总电量：lastYear\_Power（9/18更新）
**去年总电费：lastYear\_Fee（9/27更新，从原来的“去年总电量”属性中拆分）**

### 6.NR流填入说明：
深圳地区是春冬季、电量总量阶梯收费，如果是广东其他地区，可以通过以下官方链接查询单价，并修改“阶梯电费设置”的function
[南方电网95598 (csg.cn)](https://95598.csg.cn/#/sz/serviceInquire/LRLayer/elePriceInquire)

 ![](https://www.hasstatic.com/image/filetype/zip.gif) [南方电网抓包.zip](https://bbs.hassbian.com/forum.php?mod=attachment&aid=NDEzMDR8NWQ2MTUwMzB8MTY5NDcwMjI4MHw1NzI4M3wxNzgzMA%3D%3D) _(5.32 KB, 下载次数: 329)_
