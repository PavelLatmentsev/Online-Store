const {Schema, model} = require("mongoose")

const schema =new Schema({
    absent: {type: Boolean},
    brands: { type:String},
    category: { type:String},
    favorite: {type: Boolean},
    hit:{type: Boolean},
    likeStatus:{type: Boolean},
    name: { type:String},
    novelty: {type: Boolean},
    popular:{type: Boolean},
    price: Number,
    promotion: {type: Boolean},
    sales:Number,
    url: { type:String},
    userId: { type:String}
}, {
    timestamps:true
})

module.exports=model("Like", schema)