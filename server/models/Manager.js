const {Schema, model} = require("mongoose")

const schema =new Schema({
    email:  { type:String, required:true, unique:true},
    image: { type:String},
    name: { type:String},
    phone: { type:String},
    manager: { type:Boolean}
}, {
    timestamps:true
})

module.exports=model("Manager", schema)