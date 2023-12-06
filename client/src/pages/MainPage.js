import React from "react";
import NavBar from "../components/NavBar";
import "../pages/style/MainPage.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const handleMeetTheTeamClick = () => {
    navigate("/about-us");
  };

  return (
    <div className="main-page">
      <NavBar />
      <div className="cunySphere">
        <h1>CUNY Sphere</h1>
      </div>
      <div className="content-container">
        <div className="image-container">
          <img
            src="../84-removebg.png"
            alt=""
            className="img-hover"
          />
        </div>
        <div className="text-container">
          <div className="aboutCunySphere">
            <h2>About CUNY Sphere</h2>
            <p>
              Navigating the digital landscape of education, students often
              struggle to find reliable resources and connect with peers who
              share their academic interests. Our team at CUNY Sphere addresses
              this challenge, a specialized online platform for CUNY computer
              majors. <br />
              We provide comprehensive academic support, student assistance, and
              opportunities for meaningful connections. Dedicated to enhancing
              the educational experience, our team is committed to empowering
              CUNY students for success.
            </p>
            {/* Add more paragraphs if needed */}
          </div>
          <div className="aboutUs">
            <h2>CUNY Crafters</h2>
            <p>
              CUNY Crafters is a team of four students enrolled at the City
              University of New York (CUNY), embarking on a transformative
              journey in the realm of technology. As proud Full Stack Fellows of
              the CUNY Tech Prep program, a dynamic initiative supported by the
              CUNY Institute for Software Design and Development (CISDD) and the
              New York City Tech Talent Pipeline (NYC TTP), we are driven by a
              shared vision to bring about positive change and enhance the
              college experience. Get to know us!
            </p>
            <button onClick={handleMeetTheTeamClick}>Meet The Team</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
