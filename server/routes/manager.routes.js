const express = require("express")
const router = express.Router({mergeParams:true})
const Manager = require("../models/Manager")

router.get("/", async(req,res) =>{
    try {
        const list = await  Manager.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.post("/", async(req,res) =>{
    try {
        const newManager =  await  Manager.create(req.body);
        res.status(200).send(newManager)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }

})

module.exports=router