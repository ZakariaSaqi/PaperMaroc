import React from 'react';
import About from '../components/Home/About';
import Services from '../components/Home/Services';
import { motion } from "framer-motion"
function Home() {
  return (
    <>
    <div
      className="home text-center container px-5 d-flex flex-column justify-content-center align-items-center"
    >
     <motion.h5 
     initial={{y :'-100vh'}}
     animate={{y : 0}}
     transition={{duration: 4, type :"spring"}}
     >Welcome to Namodaj</motion.h5>
     <h1>Morocco's AI Revolution <br />Starts Here</h1>
     <motion.p
     initial={{y :'100vh'}}
     animate={{y : 0}}
     transition={{duration: 4, type :"spring"}}
     >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Cumque dolor quae magni, perspiciatis est consequatur laudantium?<br/> Nulla esse doloremque sequi a explicabo officia commodi.</motion.p>
    <motion.button
    initial={{y :'100vh'}}
    animate={{y : 0}}
    whileHover={{x:20}}
    transition={{delay : 2,type: "spring", stiffness: 300}}
     className="btn btn-blue btn-lg rounded-5 px-5">Get Started</motion.button>
    </div>
    <About />
    <Services />
    </>
  );
}

export default Home;
