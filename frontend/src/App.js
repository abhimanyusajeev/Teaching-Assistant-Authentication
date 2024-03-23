import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Assistance from "./pages/Assistance";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Assistance />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
