var fs = require("fs");
fs.mkdirSync("Day5");
fs.writeFileSync("Day5/day5.txt","Hello");
fs.appendFileSync("Day5/day5.txt", " Everyone");
fs.writeFileSync("Day5/File2.txt","This is file2");
var data = fs.readFileSync("Day5/day5.txt","utf-8");
console.log(data);
//fs.renameSync("Day5/day5.txt","Day5/File2.txt");
fs.renameSync("Day5/day5.txt","Day5/day5.txt");
fs.unlinkSync("Day5/file2.txt");
fs.rmdirSync("Day5");


