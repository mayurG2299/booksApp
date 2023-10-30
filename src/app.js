require('dotenv').config()
const express = require('express');

const mongoDBConn = require('../src/database/connection');


const router = require("../src/routers/books")

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(router)
app.all("*", (req, res, next) => {
    const err = new Error("Invalid request !!");
    err.name = "Page Not Found"
    err.statusCode = 404
    next(err)
})

app.use((error, req, res, next) => {

    if (error.name === "ValidationError") {
        let errMsgs = Object.values(error.errors).map(e => e.message)
        error.message = "Invalid Inputs :" + errMsgs.join(". ")
    }
    error.statusCode = error.statusCode || 500
    error.status = error.status || "error"
    res.status(error.statusCode).json({
        message: error.message
    })
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})