import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  TextField,
  FormLabel,
  Box,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import Button from "@mui/material/Button";

const AddBook = () => {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState({
    description: "",
    name: "",
    author: "",
    price: "",
    image: "",
    available: false,
  });

  // Sending info to dataBase

  const history = useNavigate();

  const sendData = async () => {
    await axios
      .post("http://localhost:5000/books", {
        name: input.name,
        author: input.author,
        description: input.description,
        price: input.price,
        image: input.image,
        available: Boolean(checked),
      })
      .then((res) => res.data)
  };

  // handle Change Event
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //  handle submit Event
  const handleSubmit = (e) => {
    e.preventDefault();
    sendData().then(() => history("/books"));
  };
  return (
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
        >
          add book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;