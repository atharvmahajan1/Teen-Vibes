import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../Actions/UserAction";
import { toast, ToastContainer } from "react-toastify";
import { Image } from "cloudinary-react";

import "../../assets/css/signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== cnfPassword) {
      toast.error("Passwords do not match");
      return;
    }
    dispatch(registerUser(name, email, password));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error]);
  return (
    <div className="wrapper">
      <ToastContainer />
      <Image cloudName="dbwanc9og" publicId="synopsis/sgdmj1nuiphsv4yjpyj1" />
      <form onSubmit={submitHandler}>
        <h3 className="heading">Sign Up</h3>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            className="form-control"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cnf-password">Confirm Password</label>
          <input
            type="password"
            id="cnf-password"
            className="form-control"
            placeholder="Confirm Password"
            value={cnfPassword}
            onChange={(e) => setCnfPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>
        <button className="cta cta-non-round" type="submit" disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <p className="body-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
