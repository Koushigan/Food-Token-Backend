const express = require("express");
const router = express.Router();
const Food = require('../models/foodModel')


router.get("/getallfood", async(req, res) => {

    try{
        const food = await Food.find({})
        res.send(food)
    } catch (error) {
        return res.status(400).json({ message: error});
    }

});

module.exports = router;