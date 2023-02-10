const express = require("express")
const User = require("../models/User");
const router = express.Router({mergeParams:true})
const auth = require("../middleware/auth.middleware")

router.patch("/:userId",auth, async(req,res) =>{
    try {
        const {userId} = req.params
        const isAdmin = await User.findById(req.user._id)
        if (userId===req.user._id || isAdmin.admin) {
            const updateUser = await User.findByIdAndUpdate(userId, req.body,{new:true})
            res.send(updateUser)
        } else {
            res.status(401).json({message:"Не удалось обносить данные"})
        }
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.get("/", auth, async(req,res) =>{
    try {
        const list = await User.find();
        res.status(200).send(list);
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
router.delete("/:userId",auth,  async (req,res) => {
    try {
        const {userId} = req.params
        const removeUser = await  User.findById(userId)
        // const removeComment = await  Comment.find({_id:commentId}) одно и тоже что выше. Для демонстрации
        if(removeUser) {
            await  removeUser.remove()
            return res.send(null)
        } else {
            res.status(401).json({message: 'User do not remove'})
        }
    } catch (e) {
        res.status(500).json({
            message:"На сервере произошла ошибка. Попробуйте позже"
        })
    }
})
module.exports=router