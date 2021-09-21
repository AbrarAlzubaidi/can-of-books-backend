"use strict";
const mongoose = require("mongoose");
// id (Auto generated)
// title
// descpription

const bookSchema = new mongoose.Schema({ // calss 
    title: String,
    author:String,
    description: String,
    status: String,
    email: String
});

const bookModel = mongoose.model('book', bookSchema); // object from bookSchema class / how to craete collection from schema

let seedBook = () => {
    let newBook = [
        new bookModel(
        {
            title: "I Feel Bad About My Neck",
            author:"Nora Ephron",
            description: "Perhaps better known for her screenwriting (Silkwood, When Harry Met Sally, Heartburn), Ephron’s brand of smart theatrical humour is on best display in her essays",
            status: 'intresting',
            email: 'book1@email.com'
        }),
        new bookModel({
            title: "Broken Glass",
            author:"Alain Mabanckou",
            description: "The Congolese writer says he was “trying to break the French language” with Broken Glass – a black comedy told by a disgraced teacher without much in the way of full stops or paragraph breaks.",
            status: 'intresting',
            email: 'book2@email.com'
        }),
        new bookModel({
            title: "Austerlitz",
            author:"WG Sebald",
            description: "Sebald died in a car crash in 2001, but his genre-defying mix of fact and fiction, keen sense of the moral weight of history and interleaving of inner and outer journeys have had a huge influence on the contemporary literary landscape.",
            status: 'intresting',
            email: 'book3@email.com'
        })
    ]

    for(let i=0; i<newBook.length;i++){
        newBook[i].save();
    }
    return newBook;
}

module.exports = {
    seedBook,
    bookModel
}