const {Schema, model} = require("mongoose")

const schema =new Schema({
    name: { type:String},
    price: Number,
    sales:Number,
    url:{ type:String},
    absent:{ type:Boolean},
    hit:{ type:Boolean},
    novelty:{ type:Boolean},
    promotion:{ type:Boolean},
    category:{ type:String},
    popular:{ type:Boolean},
    brands:{ type:String},
    professions:{ type:Boolean},
    builders:{ type:Boolean},
    starter:{ type:Boolean},
}, {
    timestamps:true
})

module.exports=model("Product", schema)