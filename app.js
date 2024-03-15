require("dotenv").config({path: "./.env"});
const express = require("express")
const app = express()

require("./model/dbconfig").dbconnection()



app.listen(process.env.PORT ,()=>{
console.log(`the server is running on the port ${process.env.PORT}`);

});

// logger
const logger = require("morgan");
app.use(logger("tiny"));

// body parser

app.use(express.json());
app.use(express.urlencoded({ extended: true}));