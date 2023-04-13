const mongoose = require('mongoose');
const { Schema } = mongoose;

const Course = new Schema({
    name: String, // String is shorthand for {type: String}
    title: String,
    image: String,
    slug: String,
    videoId: String,
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

const courses = mongoose.model('Course', Course);

module.exports = courses;
