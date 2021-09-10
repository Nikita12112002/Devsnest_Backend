// SENDING STATIC FILES
const express = require('express');
const app = express();
const path = require('path');


app.use('/' , (req , res)=>
{
  // res.sendFile(path.join(__dirname , "public/Hello.txt"),'test.txt')
  // res.sendFile(path.join(__dirname , "public/text.json"))
    res.download(path.join(__dirname , "public/image.jpg"),"download.jpg")
   //  res.download(path.join(__dirname , "public/text.json"))
  
});

app.listen(5000);