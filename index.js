const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('FUNCIONANDO')
});

app.use(express.json());

const listaPessoas = [
    { cod: 1, nome: "Camilly"},
    { cod: 2, nome: "Vitoria"},
    { cod: 3, nome: "Otavio"},
];
const listaUsuarios = [
    { cod: 1, user: "VitoriaCamilly"},
    { cod: 2, user: "CamillyVitoria"},
    { cod: 3, user: "neves"},
];

app.get('/', (req, res) => {
    res.send("HELLO WORLD")
});

app.get('/pessoas', (req, res) => {
    res.json(listaPessoas);
});

app.post('/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.cod = listaPessoas.length + 1;
    listaPessoas.push(pessoa);
    res.json(pessoa);
});

app.put('/pessoas/:cod', (req, res) => {
    const cod = req.params.cod;
    const pessoa = req.body;
    const indice = listaPessoas.findIndex(pessoa => pessoa.cod == cod);
    listaPessoas[indice] = pessoa;
    res.send(pessoa.cod);
});

app.delete('/pessoas/:cod', (req, res) => {
    const cod = req.params.cod;
    const indice = listaPessoas.findIndex(pessoa => pessoa.cod == cod);
    listaPessoas.splice(indice, 1);
    res.json(listaPessoas);
});

app.get('/pessoas/:cod', (req, res) => {
    const cod = req.params.cod;
    const pessoa = listaPessoas.find(pessoa => pessoa.cod == cod);
    res.json(pessoa);
});

app.get('/usuarios', (req, res) => {
    res.json(listaUsuarios);
});

app.post('/usuarios', (req, res) => {
   const usuario = req.body;
   usuario.cod = listaUsuarios.length + 1;
   listaUsuarios.push(usuario);
   res.json(usuario);
})

app.put('/usuarios/:cod', (req, res) => {
    const cod = req.params.cod;
    const usuario = req.body;
    const indice = listaUsuarios.findIndex(usuario => usuario.cod == cod);
    listaUsuarios[indice] = usuario;
    res.json(usuario);
 })

 app.delete('/usuarios/:cod', (req, res) => {
    const cod = req.params.cod;
    const indice = listaUsuarios.findIndex(usuario => usuario.cod == cod);
    listaUsuarios.splice(indice, 1);
    res.json(listaUsuarios);
 })

 app.get('/usuarios/:cod', (req, res) => {
    const cod = req.params.cod;
    const usuario = listaUsuarios.findIndex(usuario => usuario.cod == cod);
    res.json(usuario);
 })
