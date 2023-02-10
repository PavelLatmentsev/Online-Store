const express = require("express")
const router = express.Router({mergeParams:true})
const Subscribe = require("../models/Subscribe")

router.get("/", async(req,res) =>{
    try {
        const list = await  Subscribe.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.post("/", async(req,res) =>{
    try {
        const newSubscribe =  await  Subscribe.create(req.body);
        res.status(200).send(newSubscribe)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }

})

module.exports=router