const express = require("express");
const scripts = require("./scripts.js");

const app = express();

// TODO: per scrivere data su file uso fs.writeFileSync
// TODO: come faccio a scrivere delle funzioni che scrivono dati dal nostro "db" da poter richiamare da express

app.get("/", (req, res) => {
	res.send("Hello world!");
});

// elenco di tutti i dischi: GET /vinyls
app.get("/vinyls", (req, res) => {
	res.send(scripts.getAllVinyls());
});

// elenco degli autori: GET /authors
app.get("/authors", (req, res) => {
	res.send(scripts.getAllAuthors());
});

// elenco dei generi: GET /genres
app.get("/authors", (req, res) => {
	res.send(scripts.getAllGenres());
});

// recuperare informazioni di un disco: GET /vinyls/234
app.get("/vinyls/:id", (req, res) => {
	const { id } = req.params;
	//ritorno valori al client
	res.send(scripts.getVinyl(id));
});

// recuperare i dischi di un autore: GET /authors/2/vinyls
app.get("/authors/:id/vinyls", (req, res) => {
	const { id } = req.params;
	//ritorno valori al client
	res.send(scripts.getAuthor(id));
});

// recuperare i dischi di un genere: GET /genres/1/vinyls
app.get("/genres/:id/vinyls", (req, res) => {
	const { id } = req.params;
	//ritorno valori al client
	res.send(scripts.getGenre(id));
});

app.listen(3000, () => {
	console.log("connesso");
});
