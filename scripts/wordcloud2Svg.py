import os
import jieba
from jieba import analyse
from wordcloud import WordCloud
from opencc import OpenCC
import re

# 获取当前脚本文件所在目录
script_dir = os.path.dirname(os.path.abspath(__file__))

# 定义目录路径和输出路径

dir_path = os.path.normpath(os.path.join(script_dir, "../../../")) #本博客对应的是/src目录

output_path = os.path.normpath(os.path.join(script_dir, "../assets/img")) #本博客对应的是/src/.vuepress/public/assets/img目录

font_path = os.path.normpath(os.path.join(script_dir, "./font.otf")) #本博客对应的是/src/.vuepress/public/scripts/font.otf

output_path_svg = os.path.normpath(os.path.join(script_dir, "../assets/img/wordcloud.svg"))  #本博客对应的是/src/.vuepress/public/assets/img/wordcloud.svg

#print(f"dir_path:{dir_path}\n\noutput_path:{output_path}\n\nfont_path:{font_path}\n\noutput_path_svg:{output_path_svg}\n\n")


def merge_md_contents(folder_path):
    exclude_keywords = ["黑神话悟空妖怪平生录","转载"]  # 直接在这里指定排除的关键字

    contents = ""
    for file in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file)
        if os.path.isdir(file_path):
            contents += merge_md_contents(file_path)  # 递归遍历子文件夹并将内容合并
        elif file.endswith(".md") and any(keyword in file for keyword in exclude_keywords):  # 排除包含关键字的文件
            continue  # 跳过该文件
        elif file.endswith(".md"):  # 合并其他文件
            with open(file_path, "r", encoding="utf-8") as f:
                file_content = f.read()
                contents += file_content
    return contents

def remove_content(contents):
    # 只保留中文、中文标点符号、空格
    pattern = r"[\u3000-\u301E\uFE10-\uFE1F\uFE30-\uFE4F\uFF00-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\u4e00-\u9fa5\s]"
    matched_content = re.findall(pattern, contents)
    # 将匹配到的内容连接起来
    filtered_text = ''.join(matched_content)
    return filtered_text


contents = merge_md_contents(dir_path)
contents = remove_content(contents)
# with open(r"./output.txt", "w", encoding="utf-8") as f:
#     f.write(contents)
# print(contents)

# 使用jieba的textrank功能提取关键词
keywords = jieba.analyse.textrank(contents, topK=150, withWeight=False, allowPOS=('ns', 'n', 'vn', 'v'))
#print(f"keywords={keywords}")

# 创建 OpenCC 对象，指定转换方式为简体字转繁体字
converter = OpenCC('s2t.json')

# 统计每个关键词出现的次数
keyword_counts = {}
for keyword in keywords:
    count = contents.count(keyword)
    keyword = converter.convert(keyword) #简体转繁体
    keyword_counts[keyword] = count

#print(keyword_counts)


# 创建一个WordCloud对象，并设置字体文件路径和轮廓图像

wordcloud = WordCloud(width=1600, height=800, background_color="white", font_path=font_path)


# 生成词云
wordcloud.generate_from_frequencies(keyword_counts)

# 转换为svg格式输出
svg_image = wordcloud.to_svg(embed_font=True)
with open(output_path_svg, "w+", encoding='UTF8') as f:
    f.write(svg_image)
    print(f"已保存至{output_path_svg}")
