'use strict';
const { bookModel } = require("../models/book");

// this function to get/ retrieve all data inside db using GET method
let getBookController = (req, res) => {
    // here use find to access the all data inside bookmodal which also on the db 
    bookModel.find().then(data => { // use .then cause .find is a Async function
        res.json(data); // once you reach it make a response to get it
    }).catch((error) => {
        res.status(500).send('error there is no data to get it');
    });
}

// this function to create a new book and push/save it into db using POST method

let createBookController = (req, res) => {

    // first POST method recived data as body so here declare a bookData which inside the body
    // then create a new book using bookModel insert to it the body data then save it
    // after that use find method to render all the data again (we use .then cause it is an Async function)

    let bookData = req.body;
    let newBook = new bookModel(bookData);
    newBook.save();
    bookModel.find().then(data => {
        res.status(200).json(data);
    }).catch((error) => {
        res.status(500).send('error there is no recived data');
    });
}



// this function to delete a specific data from db using the id cause it is uniqe

let deleteBookController = (req, res) => {

    // first recieve the id for data/item that i want to delete it
    // then by using the modal find this item by it and delete it
    // after that return the remaining data and render it again

    let id = req.params.id;
    bookModel.findByIdAndDelete(id).then(() => {
        bookModel.find().then(data => {
            res.status(200).json(data);
        })
    }).catch((error) => {
        res.status(500).send('error there is no file');
    });
}



let updateBookController = async (req, res) => {
    try {
        let bookId = req.params.id;
        let updateValue = req.body;
        let option = { new: true };
        bookModel.findByIdAndUpdate({_id:bookId}, updateValue, option).then(result=>{
            result.title=updateValue.title;
            result.author=updateValue.author;
            result.description=updateValue.description;
            result.status=updateValue.status;
            result.email=updateValue.email;
            result.save();
        });
        let updatedBookList= await bookModel.find({});
        res.status(200).send(updatedBookList);

    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getBookController,
    createBookController,
    deleteBookController,
    updateBookController,
}