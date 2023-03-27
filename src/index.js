const path = require("path");

//Express
const express = require("express");
const app = express();
const port = 3000;

//Static files in Express
app.use(express.static(path.join(__dirname, "public")));

//Morgan
const morgan = require("morgan");
app.use(morgan("combined"));

//Handlebars
const handlebars = require("express-handlebars");

app.engine(".hbs", handlebars.engine({ extname: ".hbs" })); //Change .handlebars -> .hbs
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "/resource/views"));

app.get("/", (req, res) => {
	res.render("home");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
