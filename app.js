const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();


//Template engine

app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



//Routes and Templates
app.get("/", (req, res)=>{
  
   //res.send('Mensagem');
  //res.sendFile(__dirname + "/index.html");
  res.render('index');
});


//Starter Server
app.listen(3000, (req, res) =>{
  
  console.log('Servidor rodando!');
});