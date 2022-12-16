import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Fred:2704@libraryexpressjs.zph1kjk.mongodb.net/libraryjs");

let db = mongoose.connection;

export default db;