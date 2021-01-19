const express = require("express");
const fs = require("fs");

const app = express();

const data = JSON.parse(fs.readFileSync("./data.json").toString());
console.log(data);

// TODO: per scrivere data su file uso fs.writeFileSync
// TODO: come faccio a scrivere delle funzioni che scrivono dati dal nostro "db" da poter richiamare da express

app.get("/", (req, res) => {
	res.send("Hello world!");
});

// elenco di tutti i dischi: GET /vinyls
app.get("/vinyls", (req, res) => {
	//TODO: getAllVinyls()
	res.send(data);
});

// elenco degli autori: GET /authors
app.get("/authors", (req, res) => {
	res.send([
		{
			nome: "pinco pallo",
			id: 1,
		},
		{
			nome: "test",
			id: 2,
		},
	]);
});

// elenco dei generi: GET /genres

// recuperare informazioni di un disco: GET /vinyls/234
app.get("/vinyls/:id", (req, res) => {
	const { id } = req.params;

	// TODO: recupero dettagli vinile richiesto

	//ritorno valori al client
	res.send({
		titolo: "disco 1",
		autore: 1,
	});
});

// recuperare i dischi di un autore: GET /authors/2/vinyls
app.get("/authors/:id/vinyls", (req, res) => {
	const { id } = req.params;

	// TODO: recupero dettagli vinile richiesto

	//ritorno valori al client
	res.send([
		{
			titolo: "disco 1",
		},
		{
			titolo: "disco 1",
		},
	]);
});

// recuperare i dischi di un genere: GET /genres/1/vinyl\s

app.listen(3000, () => {
	console.log("connesso");
});
