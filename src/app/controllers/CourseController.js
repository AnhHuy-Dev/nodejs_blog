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

    //GET /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //POST /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.create(formData).then(() => res.redirect('/'));
    }
}

module.exports = new CourseController();
