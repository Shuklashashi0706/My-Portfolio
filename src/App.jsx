import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Home from "./screens/home/home";
import Skill from "./screens/skill/skill";
import Contact from "./screens/contact/contact"
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
