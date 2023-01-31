const {Schema, model} = require("mongoose")

const schema =new Schema({
    city: { type:String},
    confirm: { type:Boolean},
    delivery: { type:String},
    email: { type:String},
    floor: { type:String},
    image: { type:String},
    intercom: { type:String},
    licence: { type:Boolean},
    name: { type:String},
    numData: Number,
    office: { type:String},
    orderId: { type:String},
    patronymic: { type:String},
    payment: { type:String},
    phone: { type:String},
    porch: { type:String},
    products: [{type: String }],
    sex:{type:String, enum:["Male", "Female", "Other"]},
    street: { type:String},
    sum: Number,
    surname: { type:String},
    totalQuantity: Number
}, {
    timestamps:true
})

module.exports=model("Order", schema)