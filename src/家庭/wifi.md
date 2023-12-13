---
icon: wifi
date: 2023-08-24
category:
  - 家庭
tag:
  - 家庭
sticky: true

order: 2
---
# WIFI二维码

:::tabs
@tab 微信WIFI一键连

## 微信扫一扫

![](https://pan.4a1801.life/d/Onedrive-4A1801/%E4%B8%AA%E4%BA%BA%E5%BB%BA%E7%AB%99/public/img/wechatWIFI.png =300x)

@tab iPhone/安卓

## iPhone：

> 相机——对准——点击“加入”

## 安卓：

> 设置——WLAM——点击“扫一扫”(类似➡️“![](/assets/icon/saoyisao.svg =20x)”的图案)

![](https://pan.4a1801.life/d/Onedrive-4A1801/%E4%B8%AA%E4%BA%BA%E5%BB%BA%E7%AB%99/public/img/wifi.png =300x)
:::


:::echarts 
```js

const option = {
  series: [
    {
      name: "hour",
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 12,
      splitNumber: 12,
      clockwise: true,
      axisLine: {
        lineStyle: {
          width: 15,
          color: [[1, "rgba(0,0,0,0.7)"]],
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 15
        }
      },
      splitLine: {
        lineStyle: {
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 3,
          shadowOffsetX: 1,
          shadowOffsetY: 2
        }
      },
      axisLabel: {
        fontSize: 25,
        distance: 15,
        formatter: function (value) {
          if (value === 0) {
            return "";
          }
          return value + "";
        }
      },
      anchor: {
        show: true,
        icon: "image://",
        showAbove: false,
        offsetCenter: [0, "-35%"],
        size: 80,
        keepAspect: true,
        itemStyle: {
          color: "#707177"
        }
      },
      pointer: {
        icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
        width: 5,
        length: "55%",
        offsetCenter: [0, "8%"],
        itemStyle: {
          color: "#C0911F",
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: [0, "30%"]
      },
      data: [
        {
          value: 0
        }
      ]
    },
    {
      name: "minute",
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      clockwise: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
        width: 5,
        length: "70%",
        offsetCenter: [0, "8%"],
        itemStyle: {
          color: "#C0911F",
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      anchor: {
        show: true,
        size: 20,
        showAbove: false,
        itemStyle: {
          borderWidth: 15,
          borderColor: "#C0911F",
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ["0%", "-40%"]
      },
      data: [
        {
          value: 0
        }
      ]
    },
    {
      name: "second",
      type: "gauge",
      startAngle: 90,
      endAngle: -270,
      min: 0,
      max: 60,
      animationEasingUpdate: "bounceOut",
      clockwise: true,
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false
      },
      pointer: {
        icon: "path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z",
        width: 4,
        length: "85%",
        offsetCenter: [0, "8%"],
        itemStyle: {
          color: "#C0911F",
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      anchor: {
        show: true,
        size: 15,
        showAbove: true,
        itemStyle: {
          color: "#C0911F",
          shadowColor: "rgba(0, 0, 0, 0.3)",
          shadowBlur: 8,
          shadowOffsetX: 2,
          shadowOffsetY: 4
        }
      },
      detail: {
        show: false
      },
      title: {
        offsetCenter: ["0%", "-40%"]
      },
      data: [
        {
          value: 0
        }
      ]
    }
  ]
};
setInterval(function () {
  var date = new Date();
  var second = date.getSeconds();
  var minute = date.getMinutes() + second / 60;
  var hour = (date.getHours() % 12) + minute / 60;
  option.animationDurationUpdate = 300;
  myChart.setOption({
    series: [
      {
        name: "hour",
        animation: hour !== 0,
        data: [{ value: hour }]
      },
      {
        name: "minute",
        animation: minute !== 0,
        data: [{ value: minute }]
      },
      {
        animation: second !== 0,
        name: "second",
        data: [{ value: second }]
      }
    ]
  });
}, 1000);

```

:::