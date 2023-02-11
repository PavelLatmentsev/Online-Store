const express = require("express")
const router = express.Router({mergeParams:true})
const Review = require("../models/Review")

router.get("/", async(req,res) =>{
    try {
        const list = await  Review.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.post("/", async(req,res) =>{
    try {
        const newReview =  await  Review.create(req.body);
        res.status(200).send(newReview)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }

})

module.exports=router