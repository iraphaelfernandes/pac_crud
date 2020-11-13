const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();


//Template engine

app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));





//Routes and Templates
app.get("/", (req, res)=>{
  
   //res.send('Mensagem');
  //res.sendFile(__dirname + "/index.html");
  res.render('index');
});
app.get("/javascript", (req, res)=>{
  
  res.sendFile(__dirname + '/js/javascript.js');
});
app.get("/style", (req, res)=>{
  
  res.sendFile(__dirname + '/css/style.css');
});


//Starter Server
app.listen(3000, (req, res) =>{
  
  console.log('Servidor rodando!');
});