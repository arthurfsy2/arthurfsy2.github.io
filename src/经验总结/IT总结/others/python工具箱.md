---
icon: edit
title: python工具箱
date: 2023-08-31
category:
  - 经验总结
tag:
  - IT总结
order: 3
---

# 实用工具汇总

## 文件压缩

### PDF 压缩

在线压缩：[ilovepdf.com](https://www.ilovepdf.com/zh-cn/compress_pdf)

### 图片压缩

在线压缩：[TinyPNG](https://tinypng.com/cn/)
:::tip 也可以通过 python 调用 API 实现（需要注册获取 tinify.key)↓↓↓
:::

:::details tinyPNG.py

```python
import tinify
import os

# 设置API密钥
tinify.key = "XXX"

# 遍历目录并压缩.jpg格式的图片
directory = r"D:\Users\ArthurFsy\Documents\python脚本\rawPic"   #输入路径
output_directory = r"D:\Users\ArthurFsy\Documents\python脚本\tinyPNG"  #输出路径
total_files = 0  # 总任务数量
completed_files = 0  # 已完成的任务数量

# 计算总任务数量
for root, dirs, files in os.walk(directory):
    for file in files:
        file_ext = os.path.splitext(file)[1].lower()
        if file_ext in ['.jpg', '.jpeg', '.png']:
            total_files += 1

# 遍历目录并压缩图片
for root, dirs, files in os.walk(directory):
    for file in files:
        file_ext = os.path.splitext(file)[1].lower()
        if file_ext in ['.jpg', '.jpeg', '.png']:
            file_path = os.path.join(root, file)
            output_file_path = os.path.join(output_directory, file)  # 输出文件路径

            # 检查输出目录中是否已存在与输入目录中文件名相同的图片文件
            if os.path.exists(output_file_path):
                print(f"已存在相同文件名的图片文件，跳过压缩：{output_file_path}")
                completed_files += 1
                continue

            # 使用tinify组件来压缩图片大小
            source = tinify.from_file(file_path)
            source.to_file(output_file_path)  # 保存压缩后的图片到输出目录
            print(f"已压缩至{output_file_path}！")
            completed_files += 1  # 更新已完成的任务数量

            # 显示脚本运行的时间进度百分比
            progress_percentage = (completed_files / total_files) * 100
            print("脚本运行进度：{:.2f}%".format(progress_percentage))
        else:
            print("未找到jpg/jpeg/png格式的文件!")

```

:::

### 视频压缩

:::tip 需要先下载 python 和 ffmpeg
:::

::: important 感觉直接选择视频到`微信`的文件传输助手进行自动压缩还更方便
:::

> [win10 系统下 ffmpeg 的安装配置与 Python 调用 - 代码天地 (codetd.com)](https://www.codetd.com/article/15441361)

:::details tinyVideo.py

```python
import os
import subprocess

input_directory = r"D:\Users\ArthurFsy\Documents\python脚本\tinyVideo_old"
output_directory = r"D:\Users\ArthurFsy\Documents\python脚本\tinyVideo_new"
file_extensions = ['.mp4', '.MP4', '.MOV']  # 可以根据需要添加其他后缀名

for root, dirs, files in os.walk(input_directory):
    for file in files:
        for extension in file_extensions:
            if file.endswith(extension):
                input_file_path = os.path.join(root, file)
                output_file_path = os.path.join(output_directory, file)
                subprocess.run(['ffmpeg', '-y', '-i', input_file_path, '-c:v', 'libx264', '-profile:v', 'high',  '-crf', '30',output_file_path])
```

:::

## 文件转换

### HTML 合并后转换为 markdown

:::details mergeHTML2MD.py

```python
#将多个html格式的文件合并为一个html,并转换成markdown格式

import os
import html2text
from bs4 import BeautifulSoup

# 定义目录A和目录B的路径
html_folder = r'D:\web\html'
markdown_folder = r'D:\web\md'

# 创建html2text的实例
h = html2text.HTML2Text()
#h.ignore_links = True  # 忽略链接
#h.ignore_images = True  # 忽略图片

# 遍历目录A并找到所有.html文件
html_files = []
for root, dirs, files in os.walk(html_folder):
    for file in files:
        if file.endswith('.html'):
            html_files.append(os.path.join(root, file))
print(f'html_files:{html_files}')
# 创建一个BeautifulSoup对象来解析HTML
combined_html = BeautifulSoup('', 'html.parser')

# 将所有.html文件合并到一个BeautifulSoup对象中
for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        html_content = f.read()
        soup = BeautifulSoup(html_content, 'html.parser')
        combined_html.append(soup)

# 将合并后的HTML保存到目录B中
combined_html_path = os.path.join(markdown_folder, 'combined.html')
with open(combined_html_path, 'w', encoding='utf-8') as f:
    f.write(combined_html.prettify())
print(combined_html_path)

with open(combined_html_path,  'r', encoding='utf-8') as f:
    html_content = f.read()
markdown_text = h.handle(html_content)

converted_md_path = os.path.join(markdown_folder, 'converted.md')
with open(converted_md_path,  'w', encoding='utf-8') as f:
    f.write(markdown_text)


```

:::

### 图片转为 webp 格式

webp 格式可在尽量保持原有图片分辨率的同时，显著压缩图片大小。

在线转换：[WebP.to: 您的多合一 WebP 转换工具](https://www.webp.to/)

> 可单独使用，也可以先使用 tinyPNG.py 压缩图片后再转换为 webp

:::details pic2Webp.py

```python
import os
import shutil
from PIL import Image

def convert_images_to_webp(input_dir, output_dir):
    for root, dirs, files in os.walk(input_dir):
        output_subdir = os.path.join(output_dir, os.path.relpath(root, input_dir))
        os.makedirs(output_subdir, exist_ok=True)

        for file in files:
            file_path = os.path.join(root, file)
            file_ext = os.path.splitext(file_path)[1].lower()
            output_file_webp = os.path.splitext(os.path.join(output_subdir, file))[0] + '.webp'

            if file_ext in ['.jpg', '.jpeg', '.png']:
                if os.path.exists(output_file_webp):
                    print(f"{os.path.abspath(output_file_webp)} 已存在，已跳过！")
                else:
                    with Image.open(file_path) as image:
                        image.save(output_file_webp, 'webp')
                    print(f"已完成 {os.path.abspath(output_file_webp)} 的转换！")
            else:
                shutil.copyfile(file_path, os.path.join(output_subdir, file))
                print(f"非图片格式：{os.path.abspath(output_file_webp)} 已复制！")


input_dir = r'D:\Users\xxx' # 待转换图片所在的文件夹
output_dir = r'D:\Users\xxx' # 转换后webp需要存放的文件夹
convert_images_to_webp(input_dir, output_dir)
```
