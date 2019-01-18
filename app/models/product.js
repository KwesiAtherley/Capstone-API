const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  quantity: {
    type: Number
  }
  // readingList: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'ReadingList'
  // },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // }
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', productSchema)
