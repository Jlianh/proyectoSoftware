const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

require('dotenv').config()
const DB_URL = process.env.DB_URL || '';

const http = require('http').Server(app);

const mongoose = require('mongoose');
mongoose.connect(DB_URL);

const cors = require('cors')

const clothesRoutes = require('./routes/ClothesRoute');

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

app.use(router);
app.use('/clothes', clothesRoutes);
app.listen(port, ()=>{
    console.log('listen on ' + port)
});

module.exports = http
