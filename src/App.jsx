import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menupage from "./pages/Menupage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/menupage" element={<Menupage />} />
      </Routes>
    </Router>
  );
}

export default App;
