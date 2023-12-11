import express from "express";

import { getAllBooks } from "./books.controller.js";

const booksRouter = express.Router();

booksRouter.get("/", getAllBooks);

export default booksRouter;
