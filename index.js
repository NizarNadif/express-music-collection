const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send("Hello world!");
});

// elenco di tutti i dischi: GET /vinyls
app.get("/vinyls", (req, res) => {
	res.send([
		{
			titolo: "disco 1",
			autore: "1",
		},
		{
			titolo: "disco 2",
			autore: "2",
		},
	]);
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

// recuperare i dischi di un genere: GET /genres/1/vinyl\s

app.listen(3000, () => {
	console.log("connesso");
});
