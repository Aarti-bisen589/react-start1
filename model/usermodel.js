const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        require: [true, "email is required"],
        miniengh: [ 3, "username must be at least 3 chrecters"],
    },

    email:{
        type: String,
        lowercase: true,
        require: [true, "Email adress is require"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],

    },

    password: {
        type: String,
        require: [true, "password is require"],
        minilengh: [3, "username must be at least 3 characters"],
        minilengh: [15, "username must be at most 15 characters"],
    },


},
{timestamp: true}
)
const user = mongoose.model("user", userModel);
module.exports = user;