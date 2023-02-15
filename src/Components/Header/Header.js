import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuBookIcon from "@mui/icons-material/MenuBook";
const Header = () => {
  const history = useNavigate();

  const [first, setFirst] = useState();
  return (
    <div>
      <AppBar position="sticky" sx={{ backgroundColor: "#000" }}>
        <Toolbar>
          <Typography>
            <MenuBookIcon onClick={async () => await history("/")} />
          </Typography>
          <Tabs
            sx={{
              ml: "auto",
            }}
            textColor="inherit"
            indicatorColor="secondary"
            value={first}
            onChange={(e, val) => setFirst(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Products" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
