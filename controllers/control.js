const Book = require("../model/Book");


const getAllBooks = async (req, res, next) => {
  let books;

  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    return res.status(404).json({ message: "No books found in block" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ message: "No book found" });
  }
  return res.status(200).json({ book });
};

const addBooks = async (req, res, next) => {
  const { name, author, description, available, price,image } = req.body;
  let book;

  try {
    book = new Book({
      name,
      author,
      description,
      available,
      price,
      image
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }

  if (!book) {
    return res.status(500).json({ message: "unable to add" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, author, description, price, available,image } = req.body;
  let book;

  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      price,
      available,
      image
    });
    book = await book.save();
  } catch (error) {
    console.log("error", error);
  }

  if (!book) {
    return res.status(404).json({ message: "unable to edit the by ID" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (error) {
    console.log("error while deleting the book", error);
  }
  if (!book) {
    return res.status(404).json({ message: "unable to delete the book" });
  }
  return res.status(200).json({ message: "book is deleted successfully" });
};

exports.getAllBooks = getAllBooks;

exports.addBooks = addBooks;

exports.getById = getById;

exports.updateBook = updateBook;

exports.deleteBook = deleteBook;

