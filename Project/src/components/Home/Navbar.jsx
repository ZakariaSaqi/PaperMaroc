import React, { useEffect } from 'react'
import { motion } from "framer-motion"
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/LogoBlue.png'
function Navbar() {
    useEffect(() => {
        const handleScroll = () => {
          const navbar = document.getElementById("header");
          if (window.scrollY > 0) {
            navbar.classList.add("header-scrolled");
          } else {
            navbar.classList.remove("header-scrolled");
          }
        };
        document.addEventListener("scroll", handleScroll);
    
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }, []);
  return (
    <motion.nav
    initial={{ opacity: 0, y: -50 }} 
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1 }}
    id='header' className="navbar navbar-expand-lg px-5 fixed-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand d-flex align-items-center" >
        <img src={logo} className='me-1 logo' alt="" srcset="" /> Namodaj
      </Link>
 
      <i id='menuIcon' className="fa-solid fa-bars d-lg-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></i>
      <div className="offcanvas offcanvas-top" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
        <div className=""></div>
          <i type="button" className="fa-solid fa-xmark close" data-bs-dismiss="offcanvas" aria-label="Close"></i>
        </div>
        <div className="offcanvas-body px-3 my-2 my-lg-0 d-flex  justify-content-center align-items-center">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item d-flex justify-content-center text-center">
              <NavLink className="nav-link px-3 "  to="/"  activeclassname="active" exact="true" aria-current="page" >Home</NavLink>
            </li>
            <li className="nav-item d-flex justify-content-center text-center">
              <NavLink className="nav-link px-3 my-2 my-lg-0"  to="/chatBot"
                     activeclassname="active" exact="true" >Chat Bot</NavLink>
            </li>
            <li className="nav-item d-flex justify-content-center text-center">
              <NavLink className="nav-link px-3 my-2 my-lg-0 "  to="/imageGenerator"
                     activeclassname="active" exact="true" aria-current="page" >Images Generator</NavLink>
            </li>
            <li className="nav-item d-flex justify-content-center text-center">
              <NavLink className="nav-link px-3 my-2 my-lg-0"  to="/documentGenerator"
                     activeclassname="active" exact="true">Documents Geneator</NavLink>
            </li>
            <li className="nav-item d-flex justify-content-center text-center">
            <Link to="/login" className="btn btn-white rounded-5 px-3 my-2 my-lg-0">Connection</Link>
            </li>
          

          </ul>
        </div>
      </div>
    </div>
  </motion.nav>
  )
}

export default Navbar