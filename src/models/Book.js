import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true},
        author: { type: String, required: true},
        pagesNumber: { type: Number, required: true},
    }
);

const books = mongoose.model('books', BookSchema);

export default books;