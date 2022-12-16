import books from "../models/Book.js";

class BookController {

    static getAllBooks(req, res) {
        books.find((err, books) => {
            res.status(200).json(books);
        })
    }

    static getBookById(req, res) {
        let { id } = req.params;
        books.findById(id, (err, book) => {
            res.status(200).json(book);
        })
    }

    static createBook(req, res) {
        let book = new books(req.body);

        book.save((err) => {

            if (err) {
                res.status(500).send({ message: `${err.message} - falha ao adicionar o livro` })
            } else {
                res.status(200).json(book.toJSON());
            }
        })
    }

    static updateBook(req, res) {
        let { id } = req.params;
        let book = req.body;

        books.findByIdAndUpdate(id, { $set: book }, (err) => {
            if (!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso!" });
            } else {
                res.status(500).send({ message: `${err.message} - falha ao atualizar o livro` })
            }
        })
    }

    static deleteBook(req, res) {
        let { id } = req.params;
        books.deleteOne({ _id: id }, (err, book) => {
            res.status(200).json(book);
        })
    }

}

export default BookController;