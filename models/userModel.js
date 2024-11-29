//Trabalhando com Schema
import { Schema, models, model } from "mongoose";

//Criando um objeto que obtenha os dados que o nosso objeto possa possuir

const userschema = new Schema({

    //Passando os dados que usuario possui
    firstName: {

        type: String,
        required: true
    },
    lastName: {

        type: String,
        required: true
    },

    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        select: false;
    },

    birthday: {
        type: Date,
        required: true
    },

    gender: {
        type: String,
        enum: ["M", "F", "X"],
        required: true
    },

    phone: {

        type:Number,
        required: true
    },

    role: {
        type:String,
        enum: ["admin", "users"]
    },
    

});
