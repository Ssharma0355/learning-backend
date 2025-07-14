const fs = require("fs");
const { readFile } = require("fs/promises");

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

// console.log(fs.statSync("./contact.txt"))

//creating folder

// fs.mkdirSync("./Modolues");

fs.writeFileSync("./sample1.txt", "It is Blocking operation");

fs.writeFile("./sample2.txt", "It is a non-blobking operaation", (err) => {});

// another example of blocking and non blocking 

console.log("1");
const result  = fs.readFileSync("./contact.txt","utf-8");
console.log(result);
console.log("2")

// op-> 1 then file details then 2

console.log("1");
fs.readFile("./contact.txt","utf-8",(err,result)=>{
    console.log(result);
})
console.log("2");

// o/p -> 1 then 2 then file op 
