const express = require("express"),
	app = express(),
	scripts = require("./scripts.js");

// TODO: leggere il body della richiesta ed estrarre i dati da aggiungere al "db"

app.use(express.json());

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

// creare un nuovo vinile: POST /vinyls
app.post("/vinyls", (req, res) => {
	try {
		scripts.postVinyl(req.body);
		res.sendStatus(200);
	} catch (error) {
		console.error("impossibile aggiungere il vinile");
		res.sendStatus(500);
	}
});

// creare un nuovo autore: POST /authors
app.post("/authors", (req, res) => {
	try {
		scripts.postAuthor(req.body);
		res.sendStatus(200);
	} catch (error) {
		console.error("impossibile aggiungere l'autore");
		res.sendStatus(500);
	}
});

// creare un nuovo genere: POST /genres
app.post("/genres", (req, res) => {
	try {
		scripts.postGenre(req.body);
		res.sendStatus(200);
	} catch (error) {
		console.error("impossibile aggiungere il genere");
		res.sendStatus(500);
	}
});

app.listen(3000, () => {
	console.log("connesso");
});
