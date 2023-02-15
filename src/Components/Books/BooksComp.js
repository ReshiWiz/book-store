import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";
const BooksComp = () => {
  const [books, setBooks] = useState([]);

  const URL = "http://localhost:5000/books";
  const Fetch = async () => {
    return await axios.get(URL).then((res) => (res.data));
  };
  useEffect(() => {
    Fetch().then((data) => setBooks(data.books));
  }, []);


  return (
    <div>
      <ul>
        {books &&
          books.map((book, idx) => (
            <li key={idx} className="book-container">
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BooksComp;