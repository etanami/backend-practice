import express from "express";

import {
  getAllBooks,
  getBook,
  updateBook,
  addBook,
  deleteBook,
} from "./books.controller.js";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getBook);
booksRouter.put("/:id", updateBook);
booksRouter.post("/", addBook);
booksRouter.delete("/:id", deleteBook);

export default booksRouter;
