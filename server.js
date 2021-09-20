"use strict";

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(cors());
const PORT = process.env.PORT;
const MONGO_SERVER = process.env.MONGO_SERVER

const { bookModel } = require("./models/book");
//const { seedAuthor } = require("./models/author");
//const { bookController, getbookController } = require("./controllers/bookController");
mongoose.connect(`${MONGO_SERVER}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    app.get('/', (res, req) => {
        res.send('home route')
    })
// app.get('/books',(req,res)=>{
//     seedBook();
//     res.json({
//         "message":"book Object Created succefully"
//     })

// })
// app.get('/get-data', bookController);
// app.get('/get-book', getbookController);

app.listen(PORT, (res) => {
    console.log(`server is running at port ${PORT}`);
})

