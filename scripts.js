module.exports = {
	// all GETs
	getAllVinyls,
	getAllAuthors,
	getAllGenres,

	// specific GETs
	getVinyl,
	getAuthor,
	getGenre,

	// POSTs
	postVinyl,
	postAuthor,
	postGenre,
};

const fs = require("fs");

function getAllVinyls() {
	const data = JSON.parse(fs.readFileSync("./vinyls.json").toString());
	return data;
}
function getAllAuthors() {
	const data = JSON.parse(fs.readFileSync("./authors.json").toString());
	return data;
}
function getAllGenres() {
	const data = JSON.parse(fs.readFileSync("./genres.json").toString());
	return data;
}

function getVinyl(id) {
	const data = JSON.parse(fs.readFileSync("./vinyls.json").toString());
	const result = data.filter((vinyl) => vinyl.id == id)[0];
	return result;
}
function getAuthor(id) {
	const data = JSON.parse(fs.readFileSync("./vinyls.json").toString());
	const result = data.filter((vinyl) => vinyl.autore == id);
	return result;
}
function getGenre(id) {
	const data = JSON.parse(fs.readFileSync("./vinyls.json").toString());
	const result = data.filter((vinyl) => vinyl.genere == id);
	return result;
}

function postVinyl(vinyl) {
	var data = JSON.parse(fs.readFileSync("./vinyls.json").toString());
	data.push(vinyl);
	fs.writeFileSync("./vinyls.json", JSON.stringify(data));
}

function postAuthor(author) {
	var data = JSON.parse(fs.readFileSync("./authors.json").toString());
	data.push(author);
	fs.writeFileSync("./authors.json", JSON.stringify(data));
}

function postGenre(genre) {
	var data = JSON.parse(fs.readFileSync("./genres.json").toString());
	data.push(genre);
	fs.writeFileSync("./genres.json", JSON.stringify(data));
}
