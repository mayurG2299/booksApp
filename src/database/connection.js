const mongoose = require('mongoose');

const mongoDBUrl = process.env.mongo_url

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected")
}).catch((error) => {
    console.log(error)
    console.log("error while connecting to database")
})
