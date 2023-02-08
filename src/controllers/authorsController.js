import authors from "../models/Author.js";

class AuthorController {

    static getAllAuthors(req, res) {
        authors.find((err, authors) => {
            res.status(200).json(authors);
        })
    }

    static getAuthorById(req, res) {
        let { id } = req.params;
        authors.findById(id, (err, authors) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - autor não localizado` })
            }
            else{
                res.status(200).send(authors);
            }
        })
    }

    static createAuthor(req, res) {
        let author = new authors(req.body);

        author.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao adicionar o autor` })
            } else {
                res.status(200).json(author.toJSON());
            }
        })
    }

    static updateAuthor(req, res) {
        let { id } = req.params;
        let author = req.body;

        authors.findByIdAndUpdate(id, { $set: author }, (err) => {
            if (!err) {
                res.status(200).send({ message: "autor atualizado com sucesso!" });
            } else {
                res.status(500).send({ message: `${err.message} - falha ao atualizar o autor` })
            }
        })
    }

    static deleteAuthor(req, res) {
        let { id } = req.params;

        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: "autor excluído com sucesso!" });
            } else {
                res.status(500).send({ message: `${err.message} - falha ao excluir o autor` })
            }
        })
    }

}

export default AuthorController;