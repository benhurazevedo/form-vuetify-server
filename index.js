const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

nome = null;

app.use(require("cors")());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 
app.post('/setNome', (req, res, next) => {
    try{
        let data = req.body;
        console.log(data);
        //data = JSON.stringify(data);
        nome = data.nome;
        res.sendStatus(200);
    }catch(error){
        console.log(error);
    }
});
 
app.get('/getNome',  (req, res, next) => {
    res.status(200).json({ nome: nome });
});
 
 
const server = http.createServer(app);
server.listen(process.env.PORT || 3001);
console.log(`Servidor escutando na porta ${process.env.PORT || 3001}...`)
