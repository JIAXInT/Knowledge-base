const fs = require("fs");
const path = require("path");

const folderPath = __dirname; // 获取当前脚本所在的文件夹路径

function compareFileNames(fileName1, fileName2) {
  const index1 = parseInt(fileName1.split("-")[0]);
  const index2 = parseInt(fileName2.split("-")[0]);
  return index1 - index2;
}

function generateJSONData(folderPath) {
  const jsonData = [];

  const files = fs.readdirSync(folderPath);
  files.sort(compareFileNames); // 按文件名从1到28排序

  files.forEach((file) => {
    const filePath = path.join(folderPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile()) {
      // 如果是文件，则生成对应的JSON数据
      jsonData.push({
        text: file.replace(".md", ""), // 从文件名中提取出 text
        link: `/docs/algorithm/${file}`, // 生成 link
      });
    }
  });

  return jsonData;
}

const jsonData = generateJSONData(folderPath);
console.log(JSON.stringify(jsonData, null, 2)); // 打印生成的JSON数据
