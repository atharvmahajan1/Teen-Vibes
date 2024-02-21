import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/UserAction";

// Css Imports
import "./App.css";

// Page Imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/ContactUs";
import Disclamer from "./pages/Disclamer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

import Header from "./layout/Header";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Page500 from "./pages/Lost/Page500";
import Page404 from "./pages/Lost/Page404";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, isLoading } = useSelector((state) => state.user);
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  useEffect(() => {
    dispatch(loadUser()).then(() => {
      setIsUserLoaded(true);
    });
  }, [dispatch]);

  if (isLoading || !isUserLoaded) {
    return <div className="loader"></div>;
  }
  return (
    <Router>
      {isAuthenticated && <Header />}
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/disclamer" element={<Disclamer />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
        <Route path="/500" element={<Page500 />} />
        <Route path="/404" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
