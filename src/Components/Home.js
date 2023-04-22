import { Typography, Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import React from "react";

function Home() {
  return (
    <>
      <h1>Home Component</h1>
      <Typography variant="h6" component="h2">
        I-Phone Price: $1200
      </Typography>
      <Button variant="contained" startIcon={<Add />}>
        Add To Cart
      </Button>
      
      
    </>
  );
}

export default Home;
