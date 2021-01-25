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
	let vinili = vinyls;
	vinili.forEach((vinile) => {
		vinile = getVinylInformations(vinile);
	});
	return vinili;
}
function getAllAuthors() {
	return authors;
}
function getAllGenres() {
	return genres;
}

function getVinyl(id) {
	const result = getVinylInformations(
		vinyls.find((vinyl) => vinyl.id === id)
	);
	return result;
}

function getAuthor(id) {
	const result = authors.find((author) => author.id === id);
	return result;
}

function getGenre(id) {
	const result = genres.find((genre) => genre.id === id);
	return result;
}
function getAuthorVinyls(id) {
	const result = vinyls.filter((vinyl) => vinyl.autore === id);
	return result;
}
function getGenreVinyls(id) {
	const result = vinyls.filter((vinyl) => vinyl.genere === id);
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

function getVinylInformations(vinyl) {
	var { autore, genere } = vinyl;
	vinyl.autore = getAuthor(autore);
	vinyl.genere = getGenre(genere);
	return vinyl;
}
