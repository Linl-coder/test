const fs = require('fs');
const XLSX = require('xlsx');

// 读取 JSON 文件
const jsonFilePath = 'input.json';  // 替换为您的 JSON 文件路径
const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// 创建一个新的工作簿
const workbook = XLSX.utils.book_new();

// 将 JSON 数据转换为工作表
const sheetData = [];
for (const key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
        sheetData.push([key, jsonData[key].index]);
    }
}

// 将数据转换为工作表
const worksheet = XLSX.utils.aoa_to_sheet(sheetData);

// 将工作表添加到工作簿
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// 将工作簿写入 Excel 文件
const excelFilePath = 'output.xlsx';  // 替换为您想要保存的 Excel 文件路径
XLSX.writeFile(workbook, excelFilePath);

console.log(`Excel 文件已生成：${excelFilePath}`);
