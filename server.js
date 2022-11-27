const http = require("http");
const port = 8080;

const rotas = {
    "/": "Curso de Node.js",
    "/livros": "Página de Livros",
    "/autores": "Página de Autores",
    "/editoras": "Página de Editoras"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(rotas[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
})