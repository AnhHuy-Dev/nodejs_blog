const mongoose = require('mongoose');
const { Schema } = mongoose;
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
        name: String, // String is shorthand for {type: String}
        title: String,
        image: String,
        slug: String,
        videoId: String,
        slug: { type: String, slug: 'name', unique: true },
        deleteAt: Date,
    },
    {
        timestamps: true,
    },
);

mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

const courses = mongoose.model('Course', Course);

module.exports = courses;
