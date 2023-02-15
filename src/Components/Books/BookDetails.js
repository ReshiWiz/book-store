import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Button,
  Checkbox,
  TextField,
  Box,
  FormLabel,
  FormControlLabel,
  FormGroup,
} from "@mui/material";

const BookDetails = () => {
  const [input, setInput] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useNavigate();

  // # send Request for updated

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(input.name),
        author: String(input.author),
        description: String(input.description),
        price: Number(input.price),
        image: String(input.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
    // history("/books")
  };
  const id = useParams().id;
  console.log(id);

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInput(data.book));
    };
    fetchHandler();
  }, [id]);

  console.log(input);

  // # handleChange

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      {input && (
        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            maxWidth={"700px"}
            alignItems={"center"}
            marginTop={"5rem"}
            marginLeft={"auto"}
            marginRight={"auto"}
          >
            <FormLabel>Name</FormLabel>
            <TextField
              margin="normal"
              variant="outlined"
              name="name"
              fullWidth
              placeholder="Enter  name"
              value={input.name}
              onChange={handleChange}
            />
            <FormLabel>Author</FormLabel>
            <TextField
              margin="normal"
              variant="outlined"
              name="author"
              fullWidth
              placeholder="Author name"
              value={input.author}
              onChange={handleChange}
            />
            <FormLabel>Description</FormLabel>
            <TextField
              margin="normal"
              variant="outlined"
              name="description"
              fullWidth
              placeholder=" Add description"
              value={input.description}
              onChange={handleChange}
            />
            <FormLabel>price</FormLabel>
            <TextField
              margin="normal"
              variant="outlined"
              name="price"
              type="number"
              fullWidth
              placeholder="price of book"
              value={input.price}
              onChange={handleChange}
            />
            <FormLabel>Image URL</FormLabel>
            <TextField
              margin="normal"
              variant="outlined"
              name="image"
              type="text"
              fullWidth
              placeholder="add URL"
              value={input.image}
              onChange={handleChange}
            />

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                  />
                }
                label="Available"
                onChange={handleChange}
              />
            </FormGroup>
            <Button
              style={{ alignItems: "center", marginTop: "2rem" }}
              type="submit"
              variant="contained"
              // onClick={() => alert("")}
              // onClick={() => handleEvent()}
            >
              update book
            </Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BookDetails;
