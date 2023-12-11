import books from "../models/books.model.js";

function getAllBooks(req, res) {
  return res.json(books);
}

function getBook(req, res) {
  let bookId = Number(req.params.id);
  const book = books[bookId - 1];

  if (bookId > books.length || bookId < 1) {
    res.status(400).json({
      error: "Book does not exist!",
    });
  }

  return res.json(book);
}

function updateBook(req, res) {
  let bookId = Number(req.params.id) - 1;
  const book = books[bookId];
  const newTitle = req.body.title;
  const newQuantity = req.body.quantity;

  if (bookId > books.length || bookId < 1) {
    return res.status(400).json({
      error: "Book doesn't exist!"
    })
  }

  book.title = newTitle;
  book.quantity = newQuantity;

  return res.status(206).json(book);

}

function addBook(req, res) {
  const data = req.body;

  if(!data.title || !data.quantity) {
    return res.status(400).json({
      error: "Missing field!"
    })
  }

  let bookId = books.length + 1;
  data.id = bookId;

  books.push(data);
  return res.status(201).json(data);

}

export { getAllBooks, getBook, updateBook, addBook };
