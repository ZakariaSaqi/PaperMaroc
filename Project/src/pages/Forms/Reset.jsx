import React from 'react'
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Reset() {
  return (
    <div className="form-container  d-flex flex-column justify-content-center align-items-center">
      <motion.form 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.5}}
      className="rounded-5 py-5 px-4 px-md-5 px-lg-5 d-flex flex-column justify-content-center align-items-center">
        <div className="form-title text-center mb-3">
          <h5 className="m-0">Reset Password</h5>
          <p>Please enter your new password  </p>
        </div>
         <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Password"
          required
        />
         <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Confirme Password"
          required
        />
        <motion.button
          className="btn btn-blue btn-sm rounded-5 px-4 mb-3"
        >
          Reset
        </motion.button>
      </motion.form>
    </div>
  )
}

export default Reset