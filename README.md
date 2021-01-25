# VINYLS SERVER MADE USING EXPRESS

## obiettivi

- definire le collezioni
- definire le varie relazioni tra elementi delle collezioni

## problema

gestione collezione di dischi in vinile

## definisco le collezioni

- dischi
- autori
- generi

## definisco le relazioni

- disco -> autore
- disco -> genere
- genere -> dischi
- autore -> dischi

## REST

Una richiesta in rete è fatta in questo modo:

VERBO HTTP -> cosa fare:

- GET: lettura
- POST (su collection): creazione di un nuovo elemento
- PUT (su un elemento di una collection): modifica di un elemento esistente
- DELETE (su un elemento di una collection): elimina elemento esistente

URI: su cosa fare l'operazione

BODY: informazioni per eseguire la richiesta scritte in JSON

## query (API del web service)

### API pubblica

- oggetto json con esempi di possibili percorsi a cui il server risponde: GET /
- elenco di tutti i dischi: GET /vinyls
- elenco degli autori: GET /authors
- elenco dei generi: GET /genres
- recuperare informazioni di un disco: GET /vinyls/234
- recuperare informazioni di un autore: GET /authors/2
- recuperare informazioni di un genere: GET /genres/1
- recuperare i dischi di un autore: GET /authors/2/vinyls
- recuperare i dischi di un genere: GET /genres/1/vinyls

### API privata

- creare un nuovo vinile: POST /vinyls
- creare un nuovo autore: POST /authors
- creare un nuovo genere: POST /genres
