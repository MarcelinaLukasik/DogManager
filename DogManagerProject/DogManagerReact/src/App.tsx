import React from "react";
import Home from "./Components/Main/Home";
import Start from "./Components/Main/Start";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Main/Layout";
import Details from "./Components/Main/AddDogForm";
import Manager from "./Components/Manager/Manager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/getStarted" element={<Start />} />
          <Route path="/getStarted/Details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
