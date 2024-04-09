import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="form-container  d-flex flex-column justify-content-center align-items-center">
      <motion.form 
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: 0.5}}
      className="rounded-5 py-5 px-4 px-md-5 px-lg-5 d-flex flex-column justify-content-center align-items-center">
        <div className="form-title text-center mb-3">
          <h5 className="m-0">Log in</h5>
          <p>Please enter your login and password </p>
        </div>
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Username"
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Password"
          type="password"
          required
        />
        <motion.button
          className="btn btn-blue btn-sm rounded-5 px-4 mb-3"
        >
          Log in
        </motion.button>
        <div className=" text-center d-flex flex-column">
            <Link to="/signin" className="form-link">Don't have an account ? <span>Signin</span></Link>
            <Link  to="/forgot" className="form-link">You forgot your password ? <span>Forgot</span></Link>
        </div>
      </motion.form>
    </div>
  );
}

export default Login;
