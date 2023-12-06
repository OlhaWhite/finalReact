import React, { useState } from "react";
import logo from './ow remodel.png';
import './Navbar.css';
import {

    BrowserRouter as Router,

    Routes,

    Route,

    Link

} from "react-router-dom";
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Home from './Home';

    const Navbar = () => {
    const [Open, setOpen] = useState(false);
    const closesidebar = () => {
        setOpen(false)
      }
    return (
        <Router>
        <nav className='Navbar'>
        <span className='nav-logo'>
    <img src={logo} width="80px" height="70px" alt="logo"></img>
        </span>
        <div className={`nav-items ${Open && "open"}`}>
    <Link to="/" onClick={closesidebar}>Home</Link>
    <Link to="/about" onClick={closesidebar}>About</Link>
    <Link to="/portfolio" onClick={closesidebar}>Portfolio</Link>
    <Link to="/contact" onClick={closesidebar}>Contact</Link>
        </div>
        <div className={`nav-toggle ${Open && "open"}`}
        onClick={() => setOpen(!Open)}
        >
        <div className="bar">
        </div>
        </div>
        </nav>
        <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
    </Router>
    );
    };

export default Navbar;
