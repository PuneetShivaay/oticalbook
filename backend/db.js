const mongoose = require('mongoose'); 

const mongURI = "mongodb+srv://puneetshivaay:iYtn8rukH6Uer7r5@oticalbook.pvpj0.mongodb.net/?retryWrites=true&w=majority&appName=oticalbook"

const connectToMongo = async() =>{
   await mongoose.connect(mongURI);
        console.log("Connected to mongo successfully")

}

module.exports = connectToMongo;