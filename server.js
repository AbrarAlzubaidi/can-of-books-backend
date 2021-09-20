'use strict';
const express = require('express');
const app = express(); // class that create a new API
const cors = require('cors');
const axios = require('axios');
app.use(cors()); // connect API with cors
require('dotenv').config(); // import dotenv

const PORT = process.env.PORT;// get the port number from .env file

app.get('/', (res, req) => {
    res.send('home route')
})

app.listen(PORT, () => {
    console.log('hello');
});