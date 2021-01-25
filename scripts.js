module.exports = {
	// all GETs
	getAllVinyls,
	getAllAuthors,
	getAllGenres,

	// specific GETs
	getVinyl,
	getAuthor,
	getGenre,
	getAuthorVinyls,
	getGenreVinyls,

	// POSTs
	postVinyl,
	postAuthor,
	postGenre,
};

const fs = require("fs");

var vinyls = updateCollection("./vinyls.json");
var authors = updateCollection("./authors.json");
var genres = updateCollection("./genres.json");

function updateCollection(path) {
	return JSON.parse(fs.readFileSync(path).toString());
}

function getAllVinyls() {
	return vinyls;
}
function getAllAuthors() {
	return authors;
}
function getAllGenres() {
	return genres;
}

function getVinyl(id) {
	const result = vinyls.filter((vinyl) => vinyl.id == id)[0];
	return result;
}

function getAuthor(id) {
	const result = authors.filter((vinyl) => vinyl.id == id)[0];
	return result;
}

function getGenre(id) {
	const result = genres.filter((vinyl) => vinyl.id == id)[0];
	return result;
}
function getAuthorVinyls(id) {
	const result = vinyls.filter((vinyl) => vinyl.autore == id);
	return result;
}
function getGenreVinyls(id) {
	const result = vinyls.filter((vinyl) => vinyl.genere == id);
	return result;
}

function postVinyl(vinyl) {
	vinyls.push(vinyl);
	fs.writeFileSync("./vinyls.json", JSON.stringify(vinyls));
}

function postAuthor(author) {
	authors.push(author);
	fs.writeFileSync("./authors.json", JSON.stringify(authors));
}

function postGenre(genre) {
	genres.push(genre);
	fs.writeFileSync("./genres.json", JSON.stringify(genres));
}
