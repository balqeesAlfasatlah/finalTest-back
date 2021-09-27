'use strict';
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const app= express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const{getDrink,addDrink,getData ,deleteDrink,updateDrink}=require('./contoller')

const mongoose = require('mongoose');
mongoose.connect('mongodb://balqees:12345@cluster0-shard-00-00.oh7ji.mongodb.net:27017,cluster0-shard-00-01.oh7ji.mongodb.net:27017,cluster0-shard-00-02.oh7ji.mongodb.net:27017/drinksDatabases?ssl=true&replicaSet=atlas-e444n5-shard-0&authSource=admin&retryWrites=true&w=majority');


app.listen(PORT,()=>{
    console.log(`its listen to port ${PORT}`);
})


//localhost:4009/
app.get('/' , (req,res)=>{
    res.send('its working fine balqees');
})

//localhost:4009/getDrink
app.get('/getDrink' ,getDrink);
app.post('/addDrink' ,addDrink);
app.get('/getData/:email' ,getData);
app.delete('/deleteDrink/:id' ,deleteDrink);
app.put('/updateDrink/:id' ,updateDrink);