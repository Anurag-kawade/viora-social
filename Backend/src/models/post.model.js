const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    caption : {
        type : String,
        default : ""
    },
    imageUrl : {
        type : String,
        required : [true,'imageUrl is required for creating an post']
    }
})

const postModel = mongoose.model('posts',postSchema)

module.exports = postModel

