import "./App.css";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";
import NavBar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

import { Container } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container>
        <ImageSlider slides={SliderData} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
