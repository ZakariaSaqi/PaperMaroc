import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Home/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import ChatBot from "./pages/ChatBot";
import ImageGenerator from "./pages/ImageGenerator";
import DocumentGenerator from "./pages/DocumentGenerator";
import Login from "./pages/Forms/Login";
import Signin from "./pages/Forms/Signin";
import Forgout from "./pages/Forms/Forgout";
import Reset from "./pages/Forms/Reset";
AOS.init({ duration: 1000 });

function NavigationNavbar() {
  const location = useLocation();
  const isNavbarVisible = ![
    "/chatBot",
    "/imageGenerator",
    "/documentGenerator",
    "/login",
    "/signin",
    "/reset",
    "/forgot"
  ].includes(location.pathname);

  return isNavbarVisible ? <Navbar /> : null;
}
function NavigationFooter() {
  const location = useLocation();

  const isFooterVisible = ![
    "/chatBot",
    "/imageGenerator",
    "/documentGenerator",
    "/login",
    "/signin",
    "/reset",
    "/forgot"
  ].includes(location.pathname);
  return isFooterVisible ? <Footer /> : null;
}
function App() {
  return (
    <BrowserRouter>
      <NavigationNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatBot" element={<ChatBot />} />
        <Route path="/imageGenerator" element={<ImageGenerator />} />
        <Route path="/documentGenerator" element={<DocumentGenerator />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/forgot" element={<Forgout />} />
      </Routes>
      <NavigationFooter />
    </BrowserRouter>
  );
}

export default App;
