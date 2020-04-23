import React from 'react';
import Navbar from "./components/Common/Navbar"
import { BrowserRouter as Router } from "react-router-dom"


function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
