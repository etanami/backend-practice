import express from "express";

import { getAllBooks, getBook, addBook } from "./books.controller.js";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getBook);
booksRouter.post("/", addBook);

export default booksRouter;
