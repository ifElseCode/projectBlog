const mongoose = require("mongoose");

const blogSchema = new Schema({
    image: String,
    name: String,
    date: { type: Date, default: Date.now },
    description: String,
    author: {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
    comments: [{ body: String, date: Date }],
    meta: {
        votes: Number,
        favs:  Number
    }
});


module.exports = mongoose.model('Blog', blogSchema);