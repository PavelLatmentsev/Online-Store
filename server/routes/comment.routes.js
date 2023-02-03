const express = require("express")
const router = express.Router({mergeParams:true})
const auth = require("../middleware/auth.middleware")
const Comment = require("../models/Comment")

router
    .route("/")
    .get(auth, async (req,res) => {
        try {
            const {orderBy, equalTo} = req.query
            const list = await  Comment.find({[orderBy]:equalTo})
            res.status(200).send(list)
        } catch (e) {
            res.status(500).json({
                message:"На сервере произошла ошибка. Попробуйте позже"
            })
        }
    })
    .post(auth, async (req,res) => {
        try {
            const newComment=  await  Comment.create({
                ...req.body,
                userId:req.user._id
            })
            res.status(201).send(newComment)
        } catch (e) {
            res.status(500).json({
                message:"На сервере произошла ошибка. Попробуйте позже"
            })
        }
    })


router.delete("/:commentId",auth,  async (req,res) => {
    try {
        const {commentId} = req.params
        const removeComment = await  Comment.findById(commentId)
        // const removeComment = await  Comment.find({_id:commentId}) одно и тоже что выше. Для демонстрации
        if(removeComment.userId.toString() === req.user._id) {
            await  removeComment.remove()
            return res.send(null)
        } else {
            res.status(401).json({message: 'comment Unauthorized'})
        }
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})

router.patch("/:commentId",auth, async(req,res) =>{
    try {
        const {commentId} = req.params
        if (commentId===req.user._id) {
            const updateComment = await Comment.findByIdAndUpdate(commentId, req.body,{new:true})
            res.send(updateComment)
        } else {
            res.status(401).json({message:"Unauthorized"})
        }
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
module.exports=router