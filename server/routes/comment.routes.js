const express = require("express")
const router = express.Router({mergeParams:true})
const Comment = require("../models/Comment")

router.get("/", async(req,res) =>{
    try {
        const list = await  Comment.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
module.exports=router