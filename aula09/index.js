//importar express no arquivo index
const express = require ("express");

//criar uma instância do express
const app = express();

//utilizarem o método listen para o console.log
//consigam exibir a mensagem: Servidor rodando na porta 3000

app.listen(3000, () => {console.log("Servidor rodando: http://localhost:3000")});

let nome = null

app.get ("/cumprimentar" , (req, res) => {
    res.send ("Olá" + nome);
});
