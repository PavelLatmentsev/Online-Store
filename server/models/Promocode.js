const {Schema, model} = require("mongoose")

const schema =new Schema({
    title: { type:String},
    header: { type:String},
    url: { type:String},
    promocode: { type:String},
}, {
    timestamps:true
})

module.exports=model("Promocode", schema)