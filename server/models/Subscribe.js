const {Schema, model} = require("mongoose")

const schema =new Schema({
    email:  { type:String},
    name: { type:String},
    license: { type:Boolean}
}, {
    timestamps:true
})

module.exports=model("Subscribe", schema)