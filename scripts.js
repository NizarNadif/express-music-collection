module.exports = {
	getAllVinyls,
	getAllAuthors,
	getAllGenres,

	// get di un dato singolo
	getVinyl,
	getAuthor,
	getGenre,
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
