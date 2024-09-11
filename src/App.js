import './App.css';
import Topbar from './components/Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Pages from './pages/Pages';
import Services from './pages/Services';
function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/pages' element={<Pages/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
