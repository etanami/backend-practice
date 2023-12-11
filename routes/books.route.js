import express from "express";

import { getAllBooks, getBook } from "./books.controller.js";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);
booksRouter.get("/:id", getBook);

export default booksRouter;
