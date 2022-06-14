const express = require('express');
const app = express()
const connection = require('./connection');
const ProductRoute = require('./product')


app.use(express.urlencoded({extended:true}));
app.use(express.json());

// routing.........

app.use('/product',ProductRoute);


app.get("/",(req,res)=>{
    res.send("Server is start");
   console.log("ok");
})

// create server
app.listen(4000, () =>  {
    console.log("port number is 4000");
})