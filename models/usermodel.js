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
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        max: 60,
    },
    city: {
        type: String,
        max: 60,
    },
    from: {
        type: String,
        max: 50,
    },
    relationship: {
        type: Number,
        enum: [1, 2, 3],
    }

}, { timestamps: true });


module.exports = mongoose.model("User", UserSchema);