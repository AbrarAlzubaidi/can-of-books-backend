"use strict";

const express = require("express"); // it ia a framework to build APIs
const app = express(); // to make app value which is used to build API use express framework
const cors = require("cors"); // for securing issues
const mongoose = require("mongoose"); // import mongoose lib to interacte with mongodb
require("dotenv").config();// import dotenv to access which inside .env file
app.use(cors());// to make APIs use secure 
app.use(express.json()); // to be able to use POST request body

//================= import from .env file ====================

const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER
//================ connect with mongodb by using mongoose lib =====================

mongoose.connect(`${MONGO_SERVER}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
//================ importing from files  ======================

//const { seedBook } = require('./models/book');
const { getBookController, createBookController, deleteBookController, updateBookController } = require("./controllers/bookController");
//============= home route =======================

app.get('/', function (req, res) {
    res.send('hello world')
})
//================= this get method to initialize the data by seedBook function. it is called for once ===================

// app.get('/books', (req, res) => {

//     res.json(seedBook());

// })

// ========== this get method to make get request/ retrieve data from db ==========

app.get('/books', getBookController);
app.post('/create-data', createBookController);
app.delete('/delete-data/:id', deleteBookController);
app.put('/update-data/:id', updateBookController);

// =========== to open the server ============

app.listen(PORT, (res) => {
    console.log(`server is running at port ${PORT}`);
})

