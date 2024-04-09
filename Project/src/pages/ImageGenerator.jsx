import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Image from "../components/ImageGene/Image";
import ImageInput from "../components/ImageGene/ImageInput";
import logo from '../img/LogoBlue.png'
function ImageGenerator() {
  const image ='../../img/image.jpg';
  return (
    <div className="chatbot-container px-lg-4 px-2 pt-3">
      <div className="row">
        <div className="col-md-12">
          <motion.div
            initial={{  y: -50 }}
            animate={{  y: 0 }}
            transition={{ delay: .5 }}
            className="d-flex flex-row align-items-center justify-content-between pb-2 px-2 px-lg-5"
          >
            <Link to="/" className="d-flex align-items-center">
            <img src={logo} className='me-1 logo' alt="" srcset="" />
              <h5 className="m-0">Namodaj - Image Generator</h5>
            </Link>
            <div className="username d-flex align-items-center">
              <p className="m-0 d-none d-lg-block">
                Zakaria <strong>SAKI</strong>
              </p>
              <i
                type="button"
                className="fa-solid fa-right-from-bracket ms-2"
              ></i>
            </div>
          </motion.div>
          <ImageInput />
         <Image url={image} />
        
        </div>
      </div>
    </div>
  );
}

export default ImageGenerator;