::: echarts

```js
const option = {
  // canvas background color
  backgroundColor: "#ffa",
  // The mouse pointer hangs to display the value
  tooltip: {},
  series: [
    {
      type: "wordCloud",

      // The shape of the "cloud" to draw. Can be any polar equation represented as a
      // callback function, or a keyword present. Available presents are circle (default),
      // cardioid (apple or heart shape curve, the most known polar equation), diamond (
      // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

      shape: "square",

      // Keep aspect ratio of maskImage or 1:1 for shapes
      // This option is supported since echarts-wordcloud@2.1.0
      keepAspect: false,

      // A silhouette image which the white area will be excluded from drawing texts.
      // The shape option will continue to apply as the shape of the cloud to grow.

      // maskImage: maskImage,

      // Following left/top/width/height/right/bottom are used for positioning the word cloud
      // Default to be put in the center and has 75% x 80% size.

      left: null,
      top: null,
      width: null,
      height: null,
      right: null,
      bottom: null,

      // Text size range which the value in data will be mapped to.
      // Default to have minimum 12px and maximum 60px size.

      sizeRange: [5, 150],

      // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

      rotationRange: [-90, 90],
      rotationStep: 90,

      // size of the grid in pixels for marking the availability of the canvas
      // the larger the grid size, the bigger the gap between words.

      gridSize: 0,

      // set to true to allow word to be drawn partly outside of the canvas.
      // Allow word bigger than the size of the canvas to be drawn
      // This option is supported since echarts-wordcloud@2.1.0
      drawOutOfBound: false,

      // if the font size is too large for the text to be displayed,
      // whether to shrink the text. If it is set to false, the text will
      // not be rendered. If it is set to true, the text will be shrinked.
      // This option is supported since echarts-wordcloud@2.1.0
      shrinkToFit: false,

      // If perform layout animation.
      // NOTE disable it will lead to UI blocking when there is lots of words.
      layoutAnimation: false,

      // Global text style
      textStyle: {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        // Color can be a callback function or a color string
        color: function () {
          // Random color
          return (
            "rgb(" +
            [
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
              Math.round(Math.random() * 160),
            ].join(",") +
            ")"
          );
        },
      },
      emphasis: {
        focus: "self",

        textStyle: {
          textShadowBlur: 10,
          textShadowColor: "#333",
        },
      },

      // Data is an array. Each array item must have name and value property.
      // textStyle must not be empty
      data: [{'name': '沒有', 'value': 731}, {'name': '時候', 'value': 767}, {'name': '時間', 'value': 1018}, {'name': '知道', 'value': 599}, {'name': '不能', 'value': 270}, {'name': '工作', 'value': 328}, {'name': '中國', 'value': 237}, {'name': '看到', 'value': 287}, {'name': '問題', 'value': 319}, {'name': '需要', 'value': 300}, {'name': '發現', 'value': 308}, {'name': '夢幻', 'value': 412}, {'name': '不會', 'value': 272}, {'name': '開始', 'value': 259}, {'name': '感覺', 'value': 301}, {'name': '喜歡', 'value': 281}, {'name': '相識', 'value': 593}, {'name': '系統', 'value': 346}, {'name': '希望', 'value': 254}, {'name': '下載', 'value': 281}, {'name': '文件', 'value': 365}, {'name': '朋友', 'value': 375}, {'name': '還有', 'value': 197}, {'name': '來自', 'value': 758}, {'name': '可能', 'value': 207}, {'name': '應該', 'value': 215}, {'name': '空間', 'value': 714}, {'name': '信息', 'value': 225}, {'name': '大家', 'value': 188}, {'name': '大學', 'value': 334}, {'name': '覺得', 'value': 224}, {'name': '手機', 'value': 292}, {'name': '計算機', 'value': 236}, {'name': '獲得', 'value': 461}, {'name': '回答', 'value': 1073}, {'name': '使用', 'value': 159}, {'name': '世界', 'value': 209}, {'name': '數據', 'value': 190}, {'name': '轉發', 'value': 642}, {'name': '生活', 'value': 1959}, {'name': '東西', 'value': 211}, {'name': '速度', 'value': 163}, {'name': '媽媽', 'value': 248}, {'name': '只能', 'value': 144}, {'name': '進行', 'value': 118}, {'name': '地方', 'value': 175}, {'name': '愛情', 'value': 156}, {'name': '宿舍', 'value': 184}, {'name': '出來', 'value': 176}, {'name': '電腦', 'value': 187}, {'name': '女孩', 'value': 188}, {'name': '遊戲', 'value': 171}, {'name': '有點', 'value': 164}, {'name': '考試', 'value': 159}, {'name': '選擇', 'value': 152}, {'name': '記錄', 'value': 198}, {'name': '孩子', 'value': 220}, {'name': '公司', 'value': 129}, {'name': '關心', 'value': 1201}, {'name': '小時', 'value': 315}, {'name': '老師', 'value': 146}, {'name': '男人', 'value': 162}, {'name': '同學', 'value': 171}, {'name': '看着', 'value': 102}, {'name': '看看', 'value': 137}, {'name': '日誌', 'value': 378}, {'name': '方式', 'value': 116}, {'name': '權限', 'value': 582}, {'name': '學校', 'value': 139}, {'name': '人生', 'value': 118}, {'name': '活動', 'value': 141}, {'name': '無法', 'value': 106}, {'name': '顯示', 'value': 131}, {'name': '學習', 'value': 139}, {'name': '設置', 'value': 123}, {'name': '提示', 'value': 115}, {'name': '找到', 'value': 134}, {'name': '記得', 'value': 147}, {'name': '準備', 'value': 108}, {'name': '運行', 'value': 102}, {'name': '修復', 'value': 151}, {'name': '回家', 'value': 146}, {'name': '女人', 'value': 106}, {'name': '讀書', 'value': 121}, {'name': '相冊', 'value': 439}, {'name': '視頻', 'value': 117}, {'name': '完成', 'value': 117}, {'name': '出現', 'value': 96}, {'name': '才能', 'value': 86}, {'name': '語言', 'value': 94}, {'name': '要求', 'value': 97}, {'name': '回來', 'value': 147}, {'name': '日本', 'value': 76}, {'name': '男孩', 'value': 116}, {'name': '任務', 'value': 104}, {'name': '起來', 'value': 172}, {'name': '材料', 'value': 95}, {'name': '玩家', 'value': 103}, {'name': '能力', 'value': 94}, {'name': '眼睛', 'value': 90}, {'name': '好像', 'value': 102}, {'name': '方法', 'value': 107}, {'name': '得到', 'value': 97}, {'name': '打開', 'value': 88}, {'name': '等待', 'value': 177}, {'name': '對方', 'value': 77}, {'name': '事情', 'value': 125}, {'name': '用戶', 'value': 173}, {'name': '不到', 'value': 165}, {'name': '羣組', 'value': 580}, {'name': '網頁', 'value': 101}, {'name': '功能', 'value': 85}, {'name': '結果', 'value': 85}, {'name': '鏈接', 'value': 122}, {'name': '進入', 'value': 75}, {'name': '安裝', 'value': 106}, {'name': '紀念', 'value': 107}, {'name': '內容', 'value': 128}, {'name': '美國', 'value': 80}, {'name': '情況', 'value': 89}, {'name': '發佈', 'value': 225}, {'name': '客戶端', 'value': 139}, {'name': '好友', 'value': 1186}, {'name': '導致', 'value': 49}, {'name': '軟件', 'value': 121}, {'name': '繼續', 'value': 65}, {'name': '角色', 'value': 70}, {'name': '病毒', 'value': 115}, {'name': '父母', 'value': 87}, {'name': '輸入', 'value': 81}, {'name': ' 類型', 'value': 597}, {'name': '是否', 'value': 62}, {'name': '相信', 'value': 83}, {'name': '屬性', 'value': 79}, {'name': '遇到', 'value': 84}, {'name': '貌似', 'value': 97}, {'name': '芯片', 'value': 110}, {'name': '影響', 'value': 58}, {'name': '說明', 'value': 86}, {'name': '仙劍', 'value': 120}, {'name': '網絡', 'value': 120}, {'name': '建議', 'value': 81}, {'name': '成爲', 'value': 58}, {'name': '價格', 'value': 94}, {'name': '過程', 'value': 69}, {'name': '分析', 'value': 124}, {'name': '呵呵', 'value': 146}, {'name': '機會', 'value': 86}, {'name': '表示', 'value': 78}, {'name': '經驗', 'value': 111}],
    },
  ],
};
```

:::


### Multiple Chart

::: echarts

```js
const option = {
  legend: {},
  tooltip: {
    trigger: "axis",
    showContent: false,
  },
  dataset: {
    source: [
      ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
      ["Milk Tea", 56.5, 82.1, 88.7, 70.1, 53.4, 85.1],
      ["Matcha Latte", 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
      ["Cheese Cocoa", 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
      ["Walnut Brownie", 25.2, 37.1, 41.2, 18, 33.9, 49.1],
    ],
  },
  xAxis: { type: "category" },
  yAxis: { gridIndex: 0 },
  grid: { top: "55%" },
  series: [
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "line",
      smooth: true,
      seriesLayoutBy: "row",
      emphasis: { focus: "series" },
    },
    {
      type: "pie",
      id: "pie",
      radius: "30%",
      center: ["50%", "25%"],
      emphasis: {
        focus: "self",
      },
      label: {
        formatter: "{b}: {@2012} ({d}%)",
      },
      encode: {
        itemName: "product",
        value: "2012",
        tooltip: "2012",
      },
    },
  ],
};

const height = 800;
```

:::