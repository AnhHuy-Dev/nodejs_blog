const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const Course = new Schema(
    {
        name: String, // String is shorthand for {type: String}
        title: String,
        image: String,
        slug: String,
        videoId: String,
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

const courses = mongoose.model('Course', Course);

module.exports = courses;
