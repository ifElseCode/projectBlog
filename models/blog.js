const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
<<<<<<< HEAD
    title: {
        type: String,
        required: true 
    },
    subtitle: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    like: {
        type: Number,
        required: true
    }
=======
  title: {
    type: String,
    required: true 
  },
  author: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes_count: {
    type: Number,
    required: false
  }
>>>>>>> master
});

module.exports = mongoose.model('Blog', blogSchema);
