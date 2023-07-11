const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait connecting to the database");

    mongoose.connect("mongodb+srv://alexmcaste:alexmcaste@cluster0.9gdw4zx.mongodb.net/?retryWrites=true&w=majority",
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDb Atlas Connected"))
        .catch((error) => console.log(error));
}

module.exports = connectDatabase;
