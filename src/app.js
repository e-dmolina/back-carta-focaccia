const express = require('express');
const cors = require('cors');
const app = express();

//Settings
app.set('port',process.env.PORT || 4000);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//Routes
app.use('/api/productos', require('./routes/productos'));

module.exports = app;