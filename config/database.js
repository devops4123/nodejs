const mongoose = require('mongoose');
require("dotenv").config();

const dbconnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("Database connected successfully !");
    })
    .catch((error)=>{
        console.log("ohh Database is not connected", error);
        process.exit(1);
    })
}

module.exports = dbconnect;