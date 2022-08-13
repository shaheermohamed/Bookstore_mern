
//passwrd - eESFhvpO41cDnP0v
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/book-routes');
const cors = require('cors')



const app = express();

//Middlewares
app.use(express.json());
app.use(cors())
app.use('/books',router)//localhost:5000/books




mongoose.connect(
    "mongodb+srv://admin:eESFhvpO41cDnP0v@cluster0.qq3ghxd.mongodb.net/bookStore?retryWrites=true&w=majority")
    .then(()=>console.log("connected to database"))
    .then(()=>{
        app.listen(5000)
    }).catch((err) => console.log("error occured"+err));