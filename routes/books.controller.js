import books from "../models/books.model.js";

function getAllBooks(req, res) {
  return res.json(books);
}

function getBook(req, res) {
  let bookId = Number(req.params.id);
  const book = books[bookId - 1];

  if (bookId > books.length || bookId < 1) {
    res.status(400).json({
      error: "Book does not exist!"
    })
  }

  return res.json(book);
}

export { getAllBooks, getBook };
