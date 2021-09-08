const express = require("express");
const app = express();

app.get('/' , (req , res)=>
{
  res.status(200).send("Hello");
});

//http://localhost:5000/products?limit=50&q=something something
//?limit=50&q=something something -> This is known as query

app.get('/products' , (req , res)=>
{
  res.send(req.query);
  //res.send(req.query.q);       
});

//http://localhost:5000/abcd

app.get('/ab?cd' , (req , res)=>    //ab?cd will give choice of writing b in url.
{
  res.send('abcd');
});

app.listen(5000);


app.get('/ab+cd' , (req , res)=>    //ab+cd -> b can come any number of times in url.
{
  res.send('abcd');
});

app.listen(5000);
/* 
1.In backend-> security , performance and edge cases should be handled

2. CRUD -> POST, GET, PUT, DELETE
3. res={sendStatus:()=>null , send:()=>return}
4. what is pipelining => writing above two statements as a single statements.
           example => res.status(200).send("hello");*/