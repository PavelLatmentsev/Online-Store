const {Schema, model} = require("mongoose")

const schema =new Schema({
    city: { type:String},
    email:  { type:String, required:true, unique:true},
    floor: { type:String},
    image: { type:String},
    intercom: { type:String},
    licence: { type:Boolean},
    name: { type:String},
    office: { type:String},
    patronymic: { type:String},
    phone: { type:String},
    porch: { type:String},
    sex: {type:String, enum:["Male", "Female", "Other"]},
    street: { type:String},
    surname: { type:String},
    password: { type:String},
}, {
    timestamps:true
})

module.exports=model("User", schema)