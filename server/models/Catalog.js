const {Schema, model} = require("mongoose")

const schema =new Schema({
    name: { type:String},
    path: { type:String},
    url: { type:String}
}, {
    timestamps:true
})

module.exports=model("Catalog", schema)