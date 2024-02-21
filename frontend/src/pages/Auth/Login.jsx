import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Actions/UserAction";
import { ToastContainer, toast } from "react-toastify";
import "../../assets/css/signup.css";
import { Image } from "cloudinary-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    console.log("Effect triggered. Error:", error);
    if (
      error &&
      error.status === 400 &&
      error.data.message === "User does not exist"
    ) {
      toast.error("Wrong Credentials.");
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
    notify();
  };
  return (
    <div className="wrapper">
      <ToastContainer />
      <Image cloudName="dbwanc9og" publicId="synopsis/sgdmj1nuiphsv4yjpyj1" />
      <form onSubmit={loginHandler}>
        <h3 className="heading">Sign In</h3>
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
            required
          />
        </div>
        <button className="cta cta-non-round" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p className="body-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
