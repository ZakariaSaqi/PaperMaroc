import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signin() {
  return (
    <div className="form-container  d-flex flex-column justify-content-center align-items-center">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="rounded-5 py-5 px-4 px-md-5 px-lg-5 d-flex flex-column justify-content-center align-items-center"
      >
        <div className="form-title text-center mb-3">
          <h5 className="m-0">Sign in</h5>
          <p>Please enter the fields below </p>
        </div>
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="First Name"
          name="Nom"
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Last Name"
          name="Prenom"
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Email"
          name="Adresse"
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Password"
          type="password"
          name="MotPasse"
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          required
        />
        <motion.button
          className="btn btn-blue btn-sm rounded-5 px-4 mb-3"
          type="submit"
        >Sign in</motion.button>
        <div className=" text-center d-flex flex-column">
          <Link to="/login" className="form-link">Already have an account ? <span>Login</span></Link>
        </div>
      </motion.form>
    </div>
  );
}

export default Signin;
