import express from "express";

import { getAllBooks, getBook, updateBook, addBook } from "./books.controller.js";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getBook);
booksRouter.put("/:id", updateBook);
booksRouter.post("/", addBook);

export default booksRouter;
