'use strict';
const mongoose = require('mongoose');


class Drink {
    constructor(items){
        this.strDrinkThumb = items.strDrinkThumb;
        this.strDrink = items.strDrink;
        this.idDrink = items.idDrink;
    }
}

const DrinkSchema = new mongoose.Schema({
    email : String ,
    strDrinkThumb: String ,
    strDrink: String ,
    idDrink: String ,

  });

const DrinkModel = mongoose.model('drinkCollection', DrinkSchema);

module.exports ={Drink,DrinkModel}