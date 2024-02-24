import React from "react";
import "./App.css"
import { lazy , Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Loader from "./components/loader/loader"
const Home = lazy(()=>import("./screens/home/home"))
const Skill = lazy(()=>import("./screens/skill/skill"))
const Contact = lazy(()=>import("./screens/contact/contact"))
const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
    </>
  );
};

export default App;
