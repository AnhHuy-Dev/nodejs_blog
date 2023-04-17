const Course = require('../models/Course');
const create = require('express-handlebars');

class MeController {
    //GET /me/stored/courses
    storedCourses(req, res, next) {
        const page = req.query.page;
        Course.find({})
            .lean()
            .then((courses) => {
                const currentCourses = courses.slice(page * 5 - 5, page * 5);
                return res.render('me/stored-courses', {
                    currentCourses,
                    page,
                    countPage: parseInt(courses.length / 5, 10) + 1,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
