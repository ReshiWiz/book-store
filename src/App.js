import React from "react";
import Header from "./Components/Header/Header";
import Home from "./Components/Comp/Home";
import About from "./Components/Comp/About";
import AddBook from "./Components/AddBook";
import BooksComp from "./Components/Books/BooksComp";
import BookDetails from "./Components/Books/BookDetails";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />} exact></Route>
          <Route path="/add" element={<AddBook />} exact></Route>
          <Route path="/books" element={<BooksComp />} exact></Route>
          <Route path="/books/:id" element={<BookDetails />} exact></Route>
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
