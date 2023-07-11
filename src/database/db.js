const mongoose = require("mongoose");

const connectDatabase = () => {
    console.log("Wait connecting to the database");

    mongoose.connect("a",
        { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDb Atlas Connected"))
        .catch((error) => console.log(error));
}

module.exports = connectDatabase;
