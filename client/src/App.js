import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import NewsPage from "./pages/NewsPage";
import CoursePage from "./pages/CoursePage";

import "../src/pages/style/App.css";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function Navigation(props) {

  const navStyle = {
    backgroundColor: "#0033a1",
  };

  const logoStyle = {
    width: "100px", // Adjust the width as needed
    height: "100px", // Maintain the aspect ratio
    objectFit: "cover",
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/main">
          <img src = "../cuny-sphere-preview.png"></img>
        </Link>
        <ul className="navbar-nav me-auto" >
          <li className="nav-item">
            <NavLink className="nav-link" to="/course">
              {/* PostFormPage */}
              Course
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/job">
              Job
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/news">
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
          <li className="nav-item"><button>Sign out</button></li>
        </ul>
      </div>
    </nav>
  );
} 

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/about-us" element={<PrivateRoute>{<AboutUsPage />}</PrivateRoute>}/>
            <Route path="/job" element={<PrivateRoute>{<JobPage />}</PrivateRoute>}/>
            <Route path="/news" element={<PrivateRoute>{<NewsPage />}</PrivateRoute>}/>
            <Route path="/course" element={<PrivateRoute>{<CoursePage />}</PrivateRoute>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
