const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title can not be empty"],
        trim: true
    },
    author: {
        type: String,
        required: [true, "Book can not be saved without author name"]
    },
    genre: {
        type: String,
        required: [true, "Genre can not be empty"]
    },
    summary: {
        type: String,
        required: [true, "Summary can not be empty"]
    },
    published: {
        type: Date,
        required: [true, "Published date can not be empty"]
    },

})

const Books = new mongoose.model("Books", bookSchema)

module.exports = Books