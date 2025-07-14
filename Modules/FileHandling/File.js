const fs = require("fs");

//sync call
// fs.writeFileSync("./test.txt", "Hey Sachin");


//async
// fs.writeFile("./test2.txt", "Async file handling",(err)=>{});

//Read the file sync

// const contactResult = fs.readFileSync("./contact.txt","utf-8");
// console.log(contactResult);

const results = fs.readFile("./contact.txt","utf-8",(err,result)=>{
    if(err){}
    else if(result){
        console.log(result)
    }
})

