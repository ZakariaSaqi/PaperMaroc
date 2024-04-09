import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from 'axios';

function Signin() {
  // const [userModel, setUserModel] = useState({
  //   Nom: '',
  //   Prenom: '',
  //   Adresse: '',
  //   MotPasse: '',
  //   confirmPassword: ''
  // });
  // const [isLoading, setIsLoading] = useState(false);
  // const [errors, setErrors] = useState([]);

  // const handleChange = (e) => {
  //   setUserModel({
  //     ...userModel,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);
  //   setErrors([]);

  //   try {
  //     const response = await axios.post('http://localhost:5086/api/Utilisateur/register', userModel);
  //     if (response.data.isSuccessful) {
  //       // Registration successful, handle accordingly (e.g., redirect to login page)
  //       console.log('Registration successful');
  //     } else {
  //       // Registration failed, set errors
  //       setErrors(response.data.errors);
  //     }
  //   } catch (error) {
  //     console.error('Error occurred during registration:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <div className="form-container  d-flex flex-column justify-content-center align-items-center">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="rounded-5 py-5 px-4 px-md-5 px-lg-5 d-flex flex-column justify-content-center align-items-center"
        onSubmit={handleSubmit}
      >
        <div className="form-title text-center mb-3">
          <h5 className="m-0">Sign in</h5>
          <p>Please enter the fields below </p>
        </div>
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="First Name"
          name="Nom"
          value={userModel.Nom}
          onChange={handleChange}
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Last Name"
          name="Prenom"
          value={userModel.Prenom}
          onChange={handleChange}
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Email"
          name="Adresse"
          value={userModel.Adresse}
          onChange={handleChange}
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Password"
          type="password"
          name="MotPasse"
          value={userModel.MotPasse}
          onChange={handleChange}
          required
        />
        <input
          className="form-control no-outline rounded-4 mb-2 "
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={userModel.confirmPassword}
          onChange={handleChange}
          required
        />
        <motion.button
          className="btn btn-blue btn-sm rounded-5 px-4 mb-3"
          type="submit"
        >
          {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Sign in'}
        </motion.button>
        <div className=" text-center d-flex flex-column">
          <Link to="/login" className="form-link">Already have an account ? <span>Login</span></Link>
        </div>
      </motion.form>
    </div>
  );
}

export default Signin;
