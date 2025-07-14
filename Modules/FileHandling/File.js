const fs = require("fs");

//sync call
// fs.writeFileSync("./test.txt", "Hey Sachin");


//async
// fs.writeFile("./test2.txt", "Async file handling",(err)=>{});

//Read the file sync

// const contactResult = fs.readFileSync("./contact.txt","utf-8");
// console.log(contactResult);

// fs.readFile("./contact.txt","utf-8",(err,result)=>{ //async gives always it except callback
//     if(err){}
//     else if(result){
//         console.log(result)
//     }
// })

//apend with sync

// fs.appendFileSync("./contact.txt", `${Date.now()}Hi Sachin \n`);

// fs.cpSync("./contact.txt","./copyFile.txt");

//delete file

// fs.unlinkSync("./copyFile.txt")

// stats 

console.log(fs.statSync("./contact.txt"))


