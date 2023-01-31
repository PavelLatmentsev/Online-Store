const {Schema, model} = require("mongoose")

const schema =new Schema({
    userName: { type:String},
    avatar: { type:String},
    created_at: Number,
    userId: { type:String},
    pageId:{ type:String},
    textContent: { type:String}
}, {
    timestamps:true
})

module.exports=model("Comment", schema)