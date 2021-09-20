"use strict";
const mongoose = require("mongoose");
// id (Auto generated)
// title
// descpription

const bookSchema = new mongoose.Schema({ // calss 
    title: String,
    description: String,
    status: String,
    email: String
});

const bookModel = mongoose.model('book', bookSchema); // object from bookSchema class / how to craete collection from schema

let seedBook = () => {
    let newBook = new bookModel([
        {
            title: "48 laws of power",
            description: "a book authered and it talks about political stuff",
            status: 'intresting',
            email: 'book@email.com'
        },
        {
            title: "aaaaaaa",
            description: "a book authered, it talks about aaaa stuff",
            status: 'intresting',
            email: 'book@email.com'
        },
        {
            title: "tttttttttttt",
            description: "a book authered, and it talks about tttttt stuff",
            status: 'intresting',
            email: 'book@email.com'
        },
    ]);
    newBook.save();
}

module.exports = {
    seedBook,
    bookModel
}