const Course = require('../models/Course');

class CourseController {
    //GET /courses/slug --> slug : any thing path
    show(req, res, next) {
        req.params.slug; //Get value from path through params
        Course.findOne({ slug: req.params.slug })
            .lean()
            .then((course) => res.render('courses/show', { course }))
            .catch(next);
        // res.send("COURSES NEWS");
    }
}

module.exports = new CourseController();
