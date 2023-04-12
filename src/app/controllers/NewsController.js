class NewController {
    //GET /news
    index(req, res) {
        res.render('news');
    }
    //GET /news/slug --> slug : any thing path
    show(req, res) {
        res.send('DETAIL NEWS');
    }
}

module.exports = new NewController();
