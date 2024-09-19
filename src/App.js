import './App.css';
import React from "react";
import Topbar from './components/Topbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Scrolltop from './components/Scrolltop';
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
          <Scrolltop/>
        </div>
      </Router>
    </>
  );
}

export default App;
