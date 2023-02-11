const express = require("express")
const router = express.Router({mergeParams:true})


router.use("/auth", require("./auth.routes"))

router.use("/catalog", require("./catalog.routes"))

router.use("/comment", require("./comment.routes"))

router.use("/like", require("./like.routes"))

router.use("/order", require("./order.routes"))

router.use("/product", require("./product.routes"))

router.use("/promocode", require("./promocode.routes"))

router.use("/user", require("./user.routes"))

router.use("/subscribe", require("./subscribe.routes"))

router.use("/review", require("./review.routes"))





module.exports=router