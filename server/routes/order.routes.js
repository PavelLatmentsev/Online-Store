const express = require("express")
const router = express.Router({mergeParams:true})
const Order = require("../models/Order")
router.get("/", async(req,res) =>{
    try {
        const list = await  Order.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

router.post("/", async(req,res) =>{
        try {
            const newOrder =  await  Order.create(req.body)
            res.status(200).send(newOrder)
        } catch (e) {
            res.status(500).json({
                message:"На сервере произошла ошибка. Попробуйте позже"
            })
        }

})

module.exports=router