const express = require('express');
const { connect } = require('./db');
const bodyParser = require('body-parser')
const { save, get } = require('./queries');

app = express();
port = process.env.PORT || 3000;

global.conn = connect();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('/cliente', async function (req, res) {
    const payload = req.body;
    if (!payload) return res.status(400).send({ message: 'Body is required and should be a JSON' });

    if (!payload.name) return res.status(400).send({ message: 'Field name is required' });
    if (!payload.cpf) return res.status(400).send({ message: 'Field cpf is required' });
    if (!payload.phone) return res.status(400).send({ message: 'Field phone is required' });
    if (!payload.email) return res.status(400).send({ message: 'Field email is required' });
    await save(req.body)
    return res.status(201).send(req.body);
});

app.get('/cliente/:cpf', async function (req, res) {
    return await get(req.params.cpf, res);
});

app.listen(port);

console.log('Starting NAC1 API: ' + port);