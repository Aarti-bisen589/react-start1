const express = require ("express");
const router = express.router();


router.get("/", function (req, res, next){
    res.stutus(200).json({
        sucess: true, message: "this is test route"
    });
});

router.post("/create", function (req, res,next){
    res.stutus(201).json({
        sucsses: true,user: req.body
    });
});

module.exports = router;