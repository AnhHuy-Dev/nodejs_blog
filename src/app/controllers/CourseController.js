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
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        Course.create(req.body)
            .then(() => res.redirect('/me/stored/courses?page=1'))
            .catch(next);
    }

    //GET /courses/:id/edit
    edit(req, res, next) {
        req.params.id;
        Course.findOne({ _id: req.params.id })
            .lean()
            .then((course) => res.render('courses/edit', { course }))
            .catch(next);
    }

    //PUT /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .lean()
            .then(() => res.redirect('/me/stored/courses?page=1'))
            .catch(next);
    }

    //DELETE /courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //RESTORE /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //DELETE /courses/:id/force
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

module.exports = new CourseController();
