const express = require("express")
const router = express.Router({mergeParams:true})
const Like = require("../models/Like")
const auth = require("../middleware/auth.middleware");

router.get("/", async(req,res) =>{
    try {
        const list = await  Like.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

router.delete("/:likeId",auth,  async (req,res) => {
    try {
        const {likeId} = req.params
        const removeLike = await  Like.findById(likeId)
        // const removeComment = await  Comment.find({_id:commentId}) одно и тоже что выше. Для демонстрации
        if(removeLike.userId.toString() === req.user._id) {
            await  removeLike.remove()
            return res.send(null)
        } else {
            res.status(401).json({message: 'Like dont delete from base'})
        }
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.post("/",auth,  async (req,res) => {
    try {
        if (req.body) {
            const newLike=  await  Like.create({
                ...req.body,
                userId:req.user._id
            })
            res.status(201).send(newLike)
        }

    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
module.exports=router