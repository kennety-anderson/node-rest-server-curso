require('./config/config')
    //require do express e invocação do mesmo
const express = require('express');
const app = express();
//require de body-parser
const bodyParser = require('body-parser');

//midlleware que trata a url
app.use(bodyParser.urlencoded({ extended: false }));
//convertendo o dado recebido para um json
app.use(bodyParser.json());

app.get('/usuario', (req, res) => {
    res.json('usuario');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "El nombre es necessario"
        })
    } else {
        res.json({
            persona: body
        });
    };
});

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('delete usuario');
});

app.listen(process.env.PORT, () => {
    console.log('Servido rodando', process.env.PORT);
});