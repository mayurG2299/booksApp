const express = require("express")
const router = new express.Router()
const booksModel = require("../models/books")

router.get("/books", async (req, res, next) => {
    try {

        const listBooks = await booksModel.find({});

        if (listBooks.length)
            res.status(201).send(listBooks)
        else {
            const err = new Error(" No Books");
            next(err)
        }
    } catch (error) {
        next(error)
    }


})

router.get("/books/:id", async (req, res, next) => {
    try {

        const id = req.params.id
        const bookData = await booksModel.findById(id);

        if (bookData) { res.status(201).send(bookData) }
        else {
            const err = new Error(" No book found, Please recheck the ID");
            next(err)
        }

    } catch (error) {
        next(error)
    }

})

router.patch("/books/:id", async (req, res, next) => {
    try {

        const id = req.params.id
        const updatedBookData = await booksModel.findByIdAndUpdate(id, req.body, { new: true });

        console.log(updatedBookData)
        if (updatedBookData)
            res.status(201).send(updatedBookData)
        else {
            const err = new Error(" No book found, Please recheck the ID");
            next(err)
        }

    } catch (error) {
        next(error)
    }

})


router.delete("/books/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const updatedBookData = await booksModel.findByIdAndDelete(id);

        console.log(updatedBookData)
        if (updatedBookData)
            res.status(201).send(updatedBookData)
        else {
            const err = new Error(" No book found, Please recheck the ID");
            next(err)
        }

    } catch (error) {
        next(error)
    }

})

router.post("/books", async (req, res, next) => {
    try {
        const addingBooks = new booksModel(req.body);


        const addingBooksRes = await addingBooks.save()

        res.send(addingBooksRes)

    } catch (error) {
        next(error)
    }
})

module.exports = router