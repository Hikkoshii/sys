const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: { type:String },
    body: { type:String },
    categories :[{ type: mongoose.Schema.Types.ObjectId , ref : 'Category' }],
},{
    timestamps: true
})

module.exports = mongoose.model('Article',schema)