const fs = require("fs");


fs.writeFileSync("./sample1.txt","It is Blocking operation");

fs.writeFile("./sample2.txt","It is a non-blobking operaation",(err)=>{})