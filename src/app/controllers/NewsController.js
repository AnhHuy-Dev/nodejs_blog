class NewsController {
	//[GET] /news
	index(req, res) {
		res.render("news");
	}

	//[GET] /news/:slug --slug: anything path
	show(req, res) {
		res.send("NEWS DETAILS");
	}
}

module.exports = new NewsController();
