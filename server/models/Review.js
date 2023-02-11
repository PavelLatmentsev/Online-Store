const {Schema, model} = require("mongoose")

const schema =new Schema({
    image:  { type:String},
    textContent: { type:String},
    name: { type:String}
}, {
    timestamps:true
})

module.exports=model("Review", schema)