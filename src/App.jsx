import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home.jsx";
import Auth from "./Components/Auth.jsx";
import Jobs from "./Components/Jobs.jsx";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/job" element={<Jobs />} />
      </Routes>
    </Router>
  );
};

export default App;
