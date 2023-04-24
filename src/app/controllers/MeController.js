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
                const cntPage = courses.length / 5;
                return res.render('me/stored-courses', {
                    currentCourses,
                    page,
                    countPage: cntPage,
                });
            })
            .catch(next);
    }

    trashCourses(req, res, next) {
        const page = req.query.page;
        Course.findDeleted({})
            .lean()
            .then((courses) => {
                const currentCourses = courses.slice(page * 5 - 5, page * 5);
                const cntPage = courses.length / 5;
                return res.render('me/trash-courses', {
                    currentCourses,
                    page,
                    countPage: cntPage,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
