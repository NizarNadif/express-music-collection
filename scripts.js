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

var vinyls = getCollection("./vinyls.json"),
	authors = getCollection("./authors.json"),
	genres = getCollection("./genres.json");

function getCollection(path) {
	return JSON.parse(fs.readFileSync(path).toString());
}

function getAllVinyls() {
	let result = JSON.parse(JSON.stringify(vinyls));
	result.map((vinyl) => {
		return getVinylInfos(vinyl);
	});
	return result;
}
function getAllAuthors() {
	return [...authors];
}
function getAllGenres() {
	return [...genres];
}

function getVinyl(id) {
	let result = getVinylInfos(vinyls.find((vinyl) => vinyl.id === id));
	return result;
}

function getAuthor(id) {
	let result = authors.find((author) => author.id === id);
	return result;
}

function getGenre(id) {
	let result = genres.find((genre) => genre.id === id);
	return result;
}
function getAuthorVinyls(id) {
	let result = vinyls.filter((vinyl) => vinyl.autore === id);
	result.map((vinyl) => {
		return getVinylInfos(vinyl);
	});
	return result;
}
function getGenreVinyls(id) {
	let result = vinyls.filter((vinyl) => vinyl.genere === id);
	result.map((vinyl) => {
		return getVinylInfos(vinyl);
	});
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

function getVinylInfos(vinyl) {
	let { autore, genere } = vinyl;
	vinyl.autore = getAuthor(autore);
	vinyl.genere = getGenre(genere);
	return vinyl;
}
