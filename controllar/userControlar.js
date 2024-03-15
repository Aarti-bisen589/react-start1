const user = require("../model/usermodel");

exports.home = function(req,res, next){
    res.status(200).json({
        success: true, message :"this is test route"
    });
}
exports.createuser =  async function (req, res, next){
    try {
        const newuser = new user(req.body);
        await newuser.save();
        res.status(201).json({
            success: true, user: newuser
        });

    }catch (error){
        res.status(500).json({success: false, message: error.message});
    }
};