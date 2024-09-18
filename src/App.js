import './App.css';
import React from "react";
import Topbar from './components/Topbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Router>
        <div>
          <Topbar />
          <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
