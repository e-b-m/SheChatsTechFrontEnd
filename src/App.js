import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./components/Homepage.js";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import About from "./components/About";
import People from "./components/People";
import Events from "./components/Events";
import Faqs from "./components/Faqs";
import Contact from "./components/Contact";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import MyCarousel from "./components/MyCarousel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Logo />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/people" element={<People />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
        <HomePage />
        {/* <MyCarousel /> */}
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
