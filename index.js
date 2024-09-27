const express = require('express');
const exphbs = require('express-handlebars');
//const nodemon = require('nodemon');
const mysql = require('mysql2');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('home')
})

//Lembrando que Alex disse que cometeu alguns erros propositalmente

app.post('/adicionar',(req,res)=>{
    const nome = req.body.nome
    const idade = req.body.idade
          
    const sql = `INTERT INTO gps (nome, idade) (${NOME})`
    
    res.render('adicionar',{nome,idade})
})

const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: '',
    database : 'pjnode'
})

conn.connect((err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Conectou')
        app.listen(3000,() => console.log(`servidor funcionando em http://localhost:3000`))
    }
})

