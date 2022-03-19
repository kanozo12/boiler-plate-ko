const express = require('express');
const app = express();
const port = 5000;

const mongooes = require('mongoose');
mongooes.connect('mongodb+srv://kanozo12:lMIvow9otLzU0lkV@boilerplate.2kofb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected ... '))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Express app listen ${port}...`));