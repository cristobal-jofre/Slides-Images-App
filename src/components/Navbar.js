import React from "react";
import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <div className="div">Slide Images App</div>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
