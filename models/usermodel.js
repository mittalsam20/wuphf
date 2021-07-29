const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 30,
        unique: true
    },

    email: {
        type: String,
        require: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8,
        unique: true
    },
    dpic: {
        type: String,
        default: "",
    },
    coverpic: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,

    }
})