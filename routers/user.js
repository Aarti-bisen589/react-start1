const express = require ("express");
const router = express.Router();

// router.get("/", function (req, res, next){
//     res.stutus(200).json({
//         sucess: true, message: "this is test route"
//     });
// });

// router.post("/create", function (req, res,next){
//     res.stutus(201).json({
//         sucsses: true,user: req.body
//     });
// });

const {home, createuser} =require("../controllar/userControlar");

router.post("/create", createuser);

module.exports = router;