

import './App.css';
import AddAdmin from './admin/AddAdmin';
import ListAdmins from './admin/ListAdmins';
import ServicesAdmin from './admin/ServicesAdmin';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/admin/services" element={<ServicesAdmin />} />
        <Route path="/admin/list" element={<ListAdmins />} />
        <Route path="/admin/add" element={<AddAdmin />} />
        
        
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
