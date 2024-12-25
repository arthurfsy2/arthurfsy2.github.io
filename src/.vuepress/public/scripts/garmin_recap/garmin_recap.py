from fetcher import WeightDataFetcher
import json
import os
from jinja2 import Template
from datetime import datetime, timedelta
import re
import base64
from jinja2 import Environment, FileSystemLoader

BIN = os.path.dirname(os.path.realpath(__file__))
blog_path = os.path.normpath(os.path.join(BIN, "../../assets/html"))


def get_single_metric_data(metric, year, garmin_client):
    monthly_data = []
    for month in range(1, 13):
        start_date = datetime(year, month, 1).date()
        if month == 12:
            end_date = datetime(year, 12, 31).date()
        else:
            end_date = (start_date + timedelta(days=31)).replace(day=1) - timedelta(
                days=1
            )
        # recap_result = recap_by_garmin(garmin_client, metric, str(start_date), str(end_date))
        recap_result = garmin_client.get_progress_summary_between_dates(
            str(start_date),
            str(end_date),
            metric,
            True,
        )
        recap_final = recap_result[0]
        recap_final["date"] = f"{year}年{month}月"

        default_stat = {metric: {"count": 0, "min": 0, "max": 0, "avg": 0, "sum": 0}}
        default_stats = {
            "running": default_stat,
            "cycling": default_stat,
            "hiking": default_stat,
            "safety": default_stat,
        }
        if not recap_final.get("stats"):
            recap_final["stats"] = default_stats
        recap_final_stats = recap_final.get("stats")
        # print(recap_final_stats)
        if recap_final_stats:
            if not recap_final_stats.get("running"):
                recap_final_stats["running"] = default_stat
            if not recap_final_stats.get("cycling"):
                recap_final_stats["cycling"] = default_stat
            if not recap_final_stats.get("hiking"):
                recap_final_stats["hiking"] = default_stat
        monthly_data.append(recap_final)
    total_year_content[metric] = monthly_data
    return total_year_content


def get_summary_html(total_year_content, total_template_content):

    # print("total_year_content:", total_year_content)
    count = 0
    for metric in ["distance", "duration", "elevationGain"]:
        contents = total_year_content.get(metric)
        chart_data = {"months": [], "cycling": [], "running": [], "hiking": []}

        for month in contents:

            chart_data["months"].append(month["date"])
            cycling_distance = month["stats"]["cycling"][metric]["sum"]
            running_distance = month["stats"]["running"][metric]["sum"]
            hiking_distance = month["stats"]["hiking"][metric]["sum"]
            stats_list = [cycling_distance, running_distance, hiking_distance]
            if stats_list == [0, 0, 0]:
                count += 1

            if metric == "distance":
                chart_data["cycling"].append(round(cycling_distance / 100000, 1))
                chart_data["running"].append(round(running_distance / 100000, 1))
                chart_data["hiking"].append(round(hiking_distance / 100000, 1))
                unit = "km"
                title = "距离"
            elif metric == "elevationGain":
                chart_data["cycling"].append(round(cycling_distance / 100, 1))
                chart_data["running"].append(round(running_distance / 100, 1))
                chart_data["hiking"].append(round(hiking_distance / 100, 1))
                unit = "m"
                title = "总爬升"
            elif metric == "duration":
                chart_data["cycling"].append(round(cycling_distance / 3600000, 1))
                chart_data["running"].append(round(running_distance / 3600000, 1))
                chart_data["hiking"].append(round(hiking_distance / 3600000, 1))
                unit = "h"
                title = "总时间"

        render_params = {
            f"{metric}_months": chart_data["months"],
            f"{metric}_cycling": chart_data["cycling"],
            f"{metric}_running": chart_data["running"],
            f"{metric}_hiking": chart_data["hiking"],
            f"{metric}_metrics": metrics,
            f"{metric}_unit": unit,
            f"{metric}_title": title,
        }
        # 替换内容
        for key, value in render_params.items():
            # 替换 {key} 为实际值
            total_template_content = total_template_content.replace(
                f"{key}", str(value)
            )
        # print(render_params,'\n-------\n')
    # print(count)
    if count != 36:
        year_html_path = os.path.join(BIN, "output", f"{year}.html")
        with open(year_html_path, "w", encoding="utf-8") as new_html_file:
            new_html_file.write(total_template_content)
    else:
        print(f"{year}数据为空！")
        print("----------")


def generate_summary():
    # 指定要读取的目录
    target_directory = os.path.join(BIN, "output")

    # 读取符合条件的文件名
    total_years = [
        int(filename.split(".")[0])
        for filename in os.listdir(target_directory)
        if filename.startswith("20") and filename.endswith(".html")
    ]
    sorted_total_years = sorted(total_years, key=int, reverse=True)
    template = env.get_template("summary_template.html")

    options = []

    # 读取每个年度文件并进行 base64 编码
    for year in sorted_total_years:
        year = str(year)
        year_html_path = os.path.join(BIN, "output", f"{year}.html")
        if os.path.exists(year_html_path):
            with open(os.path.join(year_html_path), "r", encoding="utf-8") as f:
                file_content = f.read()
                encoded_content = base64.b64encode(file_content.encode("utf-8")).decode(
                    "utf-8"
                )
                options.append({"year": year, "value": encoded_content})

    # 使用 Jinja2 渲染模板
    full_html = template.render(options=options)

    summary_file = os.path.join(blog_path, "summary.html")
    # 将汇总后的文件内容保存为 summary.html
    with open(summary_file, "w", encoding="utf-8") as f:
        f.write(full_html)
    if len(total_years) >= 2:
        print(f"{total_years[1]}~{total_years[1-1]}已汇总到以下目录: {summary_file}")
    else:
        print(f"{total_years[0]}已汇总到以下目录: {summary_file}")


def generate_years(min_year=None, max_year=None):
    current_year = datetime.now().year

    if min_year is None and max_year is None:
        return [current_year]

    # 如果 min_year 或 max_year 为 None，使用当前年份作为默认值
    min_year = min_year if min_year is not None else current_year
    max_year = max_year if max_year is not None else current_year

    return list(range(min_year, max_year + 1))


def sum_cycling_data(start_date, end_date):
    recap_result = garmin_client.get_progress_summary_between_dates(
        start_date,  # "2023-12-25",
        end_date,  # "2024-09-10",
        "distance",
        True,
    )
    # print(recap_result[0])
    cycling_data = recap_result[0]["stats"]["cycling"]["distance"]
    cycling_sum = round(cycling_data["sum"] / 10**5, 2)
    cycling_count = cycling_data["count"]
    print(cycling_count, cycling_sum)


if __name__ == "__main__":
    template_dir = "template"  # Jinja2 模板目录
    env = Environment(loader=FileSystemLoader(template_dir))

    with open(
        "./template/recap_total_template.html", "r", encoding="utf-8"
    ) as total_template_file:
        total_template_content = total_template_file.read()

    # total_years = generate_years(2014, 2024)
    total_years = generate_years()
    garminAccount = "254904240@qq.com"
    garminPassword = "Fsy364115."
    metrics = ["distance", "elevationGain", "duration"]
    fetcher = WeightDataFetcher()
    garmin_client = fetcher.garmin_login(garminAccount, garminPassword)

    for year in total_years:
        print("正在整理:", year)
        total_year_content = {"distance": [], "duration": [], "elevationGain": []}
        total_year_json_path = f"./workouts_recap/data/{year}.json"
        for metric in metrics:
            get_single_metric_data(metric, year, garmin_client)

        get_summary_html(total_year_content, total_template_content)
    generate_summary()

    # sum_cycling_data("2023-12-25", "2024-12-25")
