const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const ejs = require('express-ejs-layouts');
const axios = require('axios');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json({extended:false}));
app.use(ejs);

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs');
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
