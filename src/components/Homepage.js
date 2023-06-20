import React from "react";
import { useLocation } from "react-router-dom";
import MyCarousel from "/Users/emma/Documents/she_chats_tech/src/components/MyCarousel.js"; // Import your Carousel component

const Homepage = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/"; // Assuming the home page has a route path of '/'

  return (
    <div>
      {isHomepage && <MyCarousel />}{" "}
      {/* Render the Carousel only if it's the home page */}
      {/* Rest of your home page content */}
    </div>
  );
};

export default Homepage;
