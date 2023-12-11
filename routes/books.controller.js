import books from "../models/books.model.js";

function getAllBooks(req, res) {
  return res.json(books);
}

export { getAllBooks };
