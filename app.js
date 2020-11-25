const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const urlencodeParser = bodyParser.urlencoded({extended: false});


//Criando conexão
const sql = mysql.createConnection({
  
  host:'localhost',
  user:'raphapac',
  password: 'Pac2020$',
  port: 3306
});
sql.query("use nodejs");

//Template engine

app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/img', express.static('img'));


//Routes and tamplates

app.get("/", (req, res) => {
  
  res.render('index', {id: req.params.id}); 
});

app.get("/inserir",function(req,res){res.render("inserir");});

app.get("/select/:id?",function(req,res){
  
  if(!req.params.id){
    
      sql.query("select * from user order by id asc",function(err,results,fields){
        
        res.render('select',{data:results});
      });
  }
  
  else{
      sql.query("select * from user where id=? order by id asc",[req.params.id],function(err,results,fields){
          res.render('select',{data:results});
      });
  }
});


app.post("/controllerForm",urlencodeParser,function(req,res){
    sql.query("insert into user values (?,?,?)",[req.body.id,req.body.name,req.body.age]);
    res.render('controllerForm',{name:req.body.name});
});


app.get('/deletar/:id', (req, res) =>{
  
  sql.query("delete from user where id=?", [req.params.id]);
  res.render('deletar');
});

app.get("/update/:id",function(req,res){
  
  sql.query("select * from user where id=?",[req.params.id],function(err,results,fields){
      
      res.render('update',{id:req.params.id,name:results[0].name,age:results[0].age});
  });
});

app.post("/controllerUpdate",urlencodeParser,function(req,res){
  
  sql.query("update user set name=?,age=? where id=?",[req.body.name,req.body.age,req.body.id]);
  res.render('controllerUpdate');
});

//Starter Server
app.listen(3000, (req, res) =>{console.log('Servidor rodando!');})