import books from "../models/Book";

class BookController {

    static getAllBooks(req, res) {
        books.find((err, books) => {
            res.status(200).json(books);
        })
    }

    static getBookById(req, res) {
        let {id} = req.params;
        books.findById(id, (err, book) => {
            res.status(200).json(book);
        })
    }
}

export default BookController;