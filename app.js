const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();




//Starter Server
app.listen(3000, (req, res) =>{
  
  console.log('Servidor rodando!');
});