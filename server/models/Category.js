const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {type:String},
    parent: {type: mongoose.Schema.Types.ObjectId , ref : 'Category'},
    // parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'},
})

module.exports = mongoose.model('Category',schema)