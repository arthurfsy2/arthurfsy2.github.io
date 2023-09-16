---
icon: edit
title: 获取云麦好轻体重数据并在vuepress上通过echarts折线图展示
date: 2023-09-14
category:
  - 经验总结
tag:
  - IT总结
---

:::tip 前言
其实之前已经通过node-red实现了获取云麦好轻的数据，并在Home Assistant上展示家庭体重了，但是感觉自动化还是有点欠缺。刚好借着写Blog的时候发现vuepress-theme-hope支持echarts扩展，就想着尝试通过折线图实现。
:::

## 方法思路



总体来说，数据处理的思路是:

```mermaid
---
title: 整体思路
---
flowchart LR

    APP逆向-->数据获取-->数据自动化更新-->图表展示

```

### APP逆向

其中对我而言最困难的就是“APP逆向”这个步骤，毕竟对抓包也只是略懂皮毛，后来花了200大洋找了大佬逆向了好轻APP登陆算法，才完成最关键也是最开始的一步。


### 数据获取

#### Javascript

数据获取其实有很多种方式，像我之前是通过node-red来进行数据处理、清洗，然后转换为HA的插件所支持的数据格式，感兴趣的可以看这里→[【node-red长期稳定】云麦好轻app体重数据接入HA](https://bbs.hassbian.com/thread-20999-1-1.html)

#### Python
其实写python脚本的时候。是照着node-red的流程来写的，编程小白在这里又一次借鉴了ChatGPT的神秘力量完成了编程，并解决了RSA加密这一最关键的一步[^1]。

[^1]:原来的node-red是囿于自身IT技术原因，没办法实现直接输入手机、账号就可以直接获取数据，只能通过`cyberchef`手动加密，所以说起来通过node-red的flow来实现的功能还不算特别完善。

### 数据化自动更新

如果是希望数据采集更稳定和方便，那可以借助pythonGithub Action了，可设置为每天定时运行workflows，进行定期取数。具体使用方法可看这里→[arthurfsy2/yunmai_weight_extract2json](https://github.com/arthurfsy2/yunmai_weight_extract2json)



## 图表展示

vuepress-theme-hope内置的markdownEnhance功能，已经支持echarts图表（大部分）的展示了，可以通过await+fetch的方式引入json文件，并生成折线图。
效果如下：
:::echarts 

```js
const data = await fetch(
  "https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_fsy.json"
).then((res) => res.json());

const data2 = await fetch(
  "https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_wyf.json"
).then((res) => res.json());

var a = data.map(function (item) {
    return item.weight
})

var a2 = data2.map(function (item) {
    return item.weight
})

function getAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    var avg = sum / arr.length
    return  avg;
}

const option = {
      
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "5%",
        right: "15%",
        bottom: "10%"
      },  
      xAxis: [
        {
        
        data: data.map(function (item) {
          return item.createTime;
       
        })
      },
      {
        
        data: data2.map(function (item) {
          return item.createTime;
       
        })
      },
      ],
      yAxis: [
        {
        type: "value",
        scale: true,
        name: "体重",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,

       },
      axisLabel: {
         formatter: "{value}kg"
       }
      },
      
      ],
      toolbox: {
        right: 10,
        feature: {
          
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: [
        {
          start: 80
        },
        {
          type: "inside"
        }
      ],
      visualMap: [
        {
        
        seriesIndex:0,
        top: 50,
        right: 10,
        
        pieces: [
          {

            lte: 59.94,
            label: "偏瘦",
            color: "grey"
          },
          {
            gt: 59.94,
            lte: 77.76,
            label: "正常",
            color: "green"
          },
          {
            gt: 77.76,
            lte: 90.72,
            label: "偏胖",
            color: "orange"
          },
          {
            gt: 90.72,
            
            label: "肥胖",
            color: "red"
          },
          
        ],
        outOfRange: {
          color: "#999"
        }
      },
      {
        
        seriesIndex:1,
        down: 50,
        right: 10,
        pieces: [
          {

            lte: 53.465,
            label: "偏瘦",
            color: "grey"
          },
          {
            gt: 53.465,
            lte: 69.36,
            label: "正常",
            color: "green"
          },
          {
            gt: 69.36,
            lte: 80.92,
            label: "偏胖",
            color: "orange"
          },
          {
            gt: 80.92,
            
            label: "肥胖",
            color: "red"
          },
          
        ],
        outOfRange: {
          color: "#999"
        }
      },
      
      ],
      series: [
        {
        name: "Mr.Feng体重",
        type: "line",
        xAxisIndex: 0,
        yAxisIndex: 0,
        symbol: "none",
        smooth: true,
        data: data.map(function (item) {
          return item.weight;
          }),
        
        markLine: {
          silent: false,
          lineStyle: {
            color: "#333"
          },
          data: [
           
            {
              yAxis: getAvg(a).toFixed(2)
            },
          ]
        }
      },
      {
        name: "Ms.Wu体重",
        type: "line",
        xAxisIndex: 1,
        yAxisIndex: 0,
        symbol: "none",
        smooth: true,
        data: data2.map(function (item) {
          return item.weight;
        }),
        
        markLine: {
          silent: false,
          lineStyle: {
            color: "#333"
          },
          data: [
           
            {
              yAxis: getAvg(a2).toFixed(2)
            },
          ]
        }
      },
      
      ]
    }
```
:::

## 参考代码
修改以下代码的
`const data = await fetch()`对应的链接、标题名称等内容即可。

````md 
:::echarts 

```js
const data = await fetch(
  "https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_fsy.json"
).then((res) => res.json());

const data2 = await fetch(
  "https://raw.gitmirror.com/arthurfsy2/yunmai_weight_extract2json/main/weight_wyf.json"
).then((res) => res.json());

var a = data.map(function (item) {
    return item.weight
})

var a2 = data2.map(function (item) {
    return item.weight
})

function getAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    var avg = sum / arr.length
    return  avg;
}

const option = {
      
      tooltip: {
        trigger: "axis"
      },
      grid: {
        left: "5%",
        right: "15%",
        bottom: "10%"
      },  
      xAxis: [
        {
        
        data: data.map(function (item) {
          return item.createTime;
       
        })
      },
      {
        
        data: data2.map(function (item) {
          return item.createTime;
       
        })
      },
      ],
      yAxis: [
        {
        type: "value",
        scale: true,
        name: "体重",
        position: "left",
        alignTicks: true,
        axisLine: {
          show: true,

       },
      axisLabel: {
         formatter: "{value}kg"
       }
      },
      
      ],
      toolbox: {
        right: 10,
        feature: {
          
          restore: {},
          saveAsImage: {}
        }
      },
      dataZoom: [
        {
          start: 80
        },
        {
          type: "inside"
        }
      ],
      visualMap: [
        {
        
        seriesIndex:0,
        top: 50,
        right: 10,
        
        pieces: [
          {

            lte: 59.94,
            label: "偏瘦",
            color: "grey"
          },
          {
            gt: 59.94,
            lte: 77.76,
            label: "正常",
            color: "green"
          },
          {
            gt: 77.76,
            lte: 90.72,
            label: "偏胖",
            color: "orange"
          },
          {
            gt: 90.72,
            
            label: "肥胖",
            color: "red"
          },
          
        ],
        outOfRange: {
          color: "#999"
        }
      },
      {
        
        seriesIndex:1,
        down: 50,
        right: 10,
        pieces: [
          {

            lte: 53.465,
            label: "偏瘦",
            color: "grey"
          },
          {
            gt: 53.465,
            lte: 69.36,
            label: "正常",
            color: "green"
          },
          {
            gt: 69.36,
            lte: 80.92,
            label: "偏胖",
            color: "orange"
          },
          {
            gt: 80.92,
            
            label: "肥胖",
            color: "red"
          },
          
        ],
        outOfRange: {
          color: "#999"
        }
      },
      
      ],
      series: [
        {
        name: "Mr.Feng体重",
        type: "line",
        xAxisIndex: 0,
        yAxisIndex: 0,
        symbol: "none",
        smooth: true,
        data: data.map(function (item) {
          return item.weight;
          }),
        
        markLine: {
          silent: false,
          lineStyle: {
            color: "#333"
          },
          data: [
           
            {
              yAxis: getAvg(a).toFixed(2)
            },
          ]
        }
      },
      {
        name: "Ms.Wu体重",
        type: "line",
        xAxisIndex: 1,
        yAxisIndex: 0,
        symbol: "none",
        smooth: true,
        data: data2.map(function (item) {
          return item.weight;
        }),
        
        markLine: {
          silent: false,
          lineStyle: {
            color: "#333"
          },
          data: [
           
            {
              yAxis: getAvg(a2).toFixed(2)
            },
          ]
        }
      },
      
      ]
    }
```
:::
````

