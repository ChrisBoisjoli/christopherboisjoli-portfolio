import React from "react";
import "./style.css";
import Reel2Real from "../pages/images/reel2real.png";
import Backroom from "../pages/images/backroom.png";
import Readmegen from "../pages/images/readmegen.png";
import Profilegenerator from "../pages/images/teamprofile.png";
import Dailyrecreational from "../pages/images/dailyrecreational.png";
function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div className="animate__animated animate__lightSpeedInRight card col-md-3">
          <img src={Reel2Real} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Reel2Real</h5>
            <a
              href="https://github.com/ChrisBoisjoli/reel2real"
              target="_blank"
            >Github Repo
              <i className="live fab fa-github fa-3x"></i>
            </a><br></br>
            <a
              href="https://reel2real.herokuapp.com/"
              target="_blank"
            >Deployed site
              <i className="live fab fa-github fa-3x"></i>
            </a>
            <p className="card-text">
              This is the second project that I worked on. I was responsible for
              many of the MVC back-end routes.
            </p>
          </div>
        </div>
        <div className="animate__animated animate__lightSpeedInRight card col-md-3">
          <img src={Dailyrecreational} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Daily Recreational</h5>
            <a
              href="https://github.com/kdkleven/dailyRecreational"
              target="_blank"
            >Github Repo
              <i className="live fab fa-github fa-3x"></i>
            </a><br></br>
            <a
              href="https://kdkleven.github.io/dailyRecreational/"
              target="_blank"
            >Deployed site
              <i className="live fab fa-github fa-3x"></i>
            </a>
            <p className="card-text">
              This is the first project that I worked on. I was responsible for
              many of the front-end layout.
            </p>
          </div>
        </div>
        <div className="animate__animated animate__lightSpeedInRight card col-md-3">
          <img src={Backroom} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Backroom</h5>
            <a href="https://github.com/ChrisBoisjoli/Backroom" target="_blank">Github Repo
              <i className="live fab fa-github fa-3x"></i>
            </a>
            <p className="card-text">
              With this project I created a database server for an E-Commerce
              site to update their backroom storage.
            </p>
          </div>
        </div>
        <div className="animate__animated animate__lightSpeedInRight card col-md-3">
          <img src={Profilegenerator} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Profile Generator</h5>
            <a
              href="https://github.com/ChrisBoisjoli/Team_Profile_Generator"
              target="_blank"
            >Github Repo
              <i className="live fab fa-github fa-3x"></i>
            </a>
            <p className="card-text">
              This project was a Node Server program that you can use to build a
              website for your development team.
            </p>
          </div>
        </div>
        <div className="animate__animated animate__lightSpeedInRight card col-md-3">
          <img src={Readmegen} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Readme Generator</h5>
            <a
              href="https://github.com/ChrisBoisjoli/README_Generator"
              target="_blank"
            >Github Repo
              <i className="live fab fa-github fa-3x"></i>
            </a>
            <p className="card-text">
              Utilizing the NPM package Inquirer this project will help users
              create a Readme for their project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
