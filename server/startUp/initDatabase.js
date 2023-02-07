
const catalogMock = require("../mock/catalog.json")
const commentMock = require("../mock/comment.json")
const likeMock = require("../mock/like.json")
const orderMock = require("../mock/order.json")
const productMock = require("../mock/products.json")
const promocodeMock = require("../mock/promocode.json")

const Catalog = require("../models/Catalog")
const Comment = require("../models/Comment")
const Like = require("../models/Like")
const Order = require("../models/Order")
const Product = require("../models/Product")
const Promocode = require("../models/Promocode")

module.exports = async () => {
    const catalog = await Catalog.find()
    if(catalog.length!==catalogMock.length) {
        await  createInitialEntity(Catalog, catalogMock)
    }
    const comment = await Comment.find()
    if(comment.length!==commentMock.length) {
        await  createInitialEntity(Comment, commentMock)
    }

    const like = await Like.find()
    if(like.length!==likeMock.length) {
        await  createInitialEntity(Like, likeMock)
    }

    const order = await Order.find()
    if(order.length!==orderMock.length) {
        await  createInitialEntity(Order, orderMock)
    }

    const product = await Product.find()
    if(product.length!==productMock.length) {
        await  createInitialEntity(Product, productMock)
    }

    const promocode = await Promocode.find()
    if(promocode.length!==promocodeMock.length) {
        await  createInitialEntity(Promocode, promocodeMock)
    }
}

async function createInitialEntity(Model, data) {
    await  Model.collection.drop()
    return Promise.all(
        data.map( async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await  newItem.save()
                return newItem
            } catch (e) {
                return e
            }
        })
    )
}