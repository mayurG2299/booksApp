const mongoose = require('mongoose');

const mongoDBUrl = "mongodb+srv://mayurG22:fGGwSlCmzLQyEuj1@testingcluster.dclslmw.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("connected")
}).catch((error) => {
    console.log(error)
    console.log("error while connecting to database")
})
