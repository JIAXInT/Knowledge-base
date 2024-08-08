const fs = require("fs");
const path = require("path");

// 设置变量
const baseDirectory = "docs/Nest"; // 二级目录路径
const baseUrl = "/docs/Nest/"; // 基础URL
const mainTitle = "Nest进阶指南"; // 主标题

// 指定目录路径
const directoryPath = path.join(__dirname, baseDirectory);

// 读取目录下的文件
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.error("无法扫描目录: " + err);
  }

  // 过滤出.md文件并排序
  let sortedFiles = files
    .filter((file) => path.extname(file) === ".md")
    .sort((a, b) => {
      let numA = parseInt(a.match(/第(\d+)章/)[1], 10);
      let numB = parseInt(b.match(/第(\d+)章/)[1], 10);
      return numA - numB;
    });

  // 初始化数据结构
  let dataStructure = {
    [baseUrl]: [
      {
        text: mainTitle,
        items: [],
      },
    ],
  };

  // 遍历排序后的文件列表，生成items数组
  sortedFiles.forEach((file) => {
    // 假设文件名即为text内容，且文件扩展名为.md
    let text = path.basename(file, ".md");
    let link = `${baseUrl}${file}`;

    dataStructure[baseUrl][0].items.push({
      text: text,
      link: link,
    });
  });

  // 将生成的数据结构转换为JSON字符串
  let jsonString = JSON.stringify(dataStructure, null, 2);

  // 输出到控制台或写入文件
  console.log(jsonString);
  fs.writeFile("Directory.json", jsonString, (err) => {
    if (err) return console.error("写入文件失败: " + err);
    console.log("数据已写入Directory.json文件");
  });
});
