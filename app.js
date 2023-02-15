const express = require("express");

const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();
// meddleWare

app.use(express.json());
app.use(cors());
app.use("/books", router);

mongoose
  .connect(
    "mongodb+srv://jeeva:jeeva123@book-store.9qconvo.mongodb.net/book-store?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected to Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((error) => console.log("opps error", error));
