'use strict';
const { bookModel } = require("../models/book");

let bookController = (req, res) => {
    bookModel.find().then(data => {
        res.json(data);
    })
}
let getBookController = (req, res) => {
    let bookId = req.query.id
    bookModel.findOne({ _id: bookId }).then(data => {
        res.json(data);
    })
}

module.exports = {
    bookController,
    getBookController

}