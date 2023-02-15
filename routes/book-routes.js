const express = require("express");

const router = express.Router();

const Book = require("../model/Book");
const BooksController = require("../controllers/control");

router.get("/", BooksController.getAllBooks);
router.post("/", BooksController.addBooks);
router.get("/:id", BooksController.getById);
router.put("/:id", BooksController.updateBook);
router.delete("/:id", BooksController.deleteBook);
module.exports = router;
