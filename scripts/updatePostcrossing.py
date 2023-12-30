import os
import requests
import hashlib
import shutil

# 获取当前脚本文件所在目录
script_dir = os.path.dirname(os.path.abspath(__file__))

# 定义目录路径和输出路径
postcrossing_path = os.path.normpath(os.path.join(script_dir, "../../../Arthur/postcrossing")) #本博客对应的是/src/Arthur/Postcrossing目录


print(f"postcrossing_path:\n",postcrossing_path)

def downloadMD(type):
    baseurl="https://raw.githubusercontent.com/arthurfsy2/Postcrossing_map_generator/main"
    if type != '信息汇总':
        url = f"{baseurl}/gallery/{type}.md"
    else:
        url = f"{baseurl}/output/{type}.md"
    print("url:",url)
    response = requests.get(url)
    new_file_path = f"{postcrossing_path}/{type}_new.md"
    with open(new_file_path,"w",encoding="utf-8") as f:
        f.write(response.text)
    
    old_file_path = f"{postcrossing_path}/{type}.md"
    new_md5 = md5(new_file_path)
    old_md5 = md5(old_file_path)
    if new_md5 != old_md5:
        
        shutil.move(new_file_path, old_file_path)
        print(f"已更新{type}.md")
    else:
        os.remove(new_file_path)
        print(f"{type}.md无需更新")


def md5(file_path):
    with open(file_path, 'rb') as file:
        data = file.read()
        md5_hash = hashlib.md5(data).hexdigest()
    return md5_hash
types=['sent', 'received', 'favourites', 'popular','信息汇总']

for type in types:
    downloadMD(type)