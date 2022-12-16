import express from "express"

const app = express();

app.use(express.json());

const books = [
    {id: 1, "title": "Senhor dos Aneis"},
    {id: 2, "title": "O Hobbit"},
]

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    let index = searchBook(req.params.id);
    res.json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Livro adicionado com sucesso!");
});

app.put("/books/:id", (req, res) => {
    let index = searchBook(req.params.id);
    books[index].title = req.body.title;
    res.json(books);
});

app.delete("/books/:id", (req, res) => {
    let {id} = req.params;
    let index = searchBook(id);
    books.splice(index, 1);
    res.send("Livro removido com sucesso!");
});

function searchBook(id) {
    return books.findIndex(book => book.id == id);
}


export default app