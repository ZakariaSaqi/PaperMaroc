import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Image({url}) {
    const [imageKey, setImageKey] = useState(0);

  useEffect(() => {

    setImageKey((prevKey) => prevKey + 1);
  }, [url]);
  return (
    <div className="img-container py-3 py-lg-0 d-flex flex-column  align-items-center justify-content-center">
      <motion.img
      key={imageKey}
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 1}}
        className="img-fluid  mx-3 "
     src={require('../../img/image2.jpg')}
        alt="Generated Image"
      />
      <div className="d-flex flex-row mt-2">
        <motion.button 
        initial={{ x: "-150vh" }}
        animate={{ x: 0 }}
        transition={{ delay: .6, type: "spring", stiffness: 50 }}
        className="me-1 btn btn-blue  no-outline rounded-4 d-flex align-items-center justify-content-center">
          <span className="d-none d-lg-block">Download</span>
          <i
            type="button"
            className="fa-solid fa-circle-down mx-0 px-1 px-lg-0 ms-lg-2"
          ></i>
        </motion.button>
        <motion.button
        initial={{ x: "150vh" }}
        animate={{ x: 0 }}
        transition={{ delay: .6, type: "spring", stiffness: 50 }} className="ms-1 btn btn-blue  no-outline rounded-4 d-flex align-items-center justify-content-center">
          <span className="d-none d-lg-block">Open</span>
          <i
            type="button"
            className="fa-solid fa-image mx-0 px-1 px-lg-0 ms-lg-2"
          ></i>
        </motion.button>
      </div>
    </div>
  );
}

export default Image;
