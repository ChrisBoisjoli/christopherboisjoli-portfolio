import React from "react";
function Portfolio(){
    return (<div class="container">
    <div class="row">
      <div class="animate__animated animate__lightSpeedInRight card col-md-3">
        <img src="./assets/reel2real.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Reel2Real</h5>
          <a href="https://github.com/ChrisBoisjoli/reel2real" target="_blank"
            ><i class="live fab fa-github fa-3x"></i
          ></a>
          <p class="card-text">
            This is the second project that I worked on. I was responsible for
            many of the MVC back-end routes.
          </p>
        </div>
      </div>
      <div class="animate__animated animate__lightSpeedInRight card col-md-3">
        <img src="./assets/backroom.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Backroom</h5>
          <a href="https://github.com/ChrisBoisjoli/Backroom" target="_blank"
            ><i class="live fab fa-github fa-3x"></i
          ></a>
          <p class="card-text">
            With this project I created a database server for an E-Commerce site
            to update their backroom storage.
          </p>
        </div>
      </div>
      <div class="animate__animated animate__lightSpeedInRight card col-md-3">
        <img src="./assets/teamprofile.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Profie Generator</h5>
          <a
            href="https://github.com/ChrisBoisjoli/Team_Profile_Generator"
            target="_blank"
            ><i class="live fab fa-github fa-3x"></i
          ></a>
          <p class="card-text">
            This project was a Node Server program that you can use to build a
            website for your development team.
          </p>
        </div>
      </div>
      <div class="animate__animated animate__lightSpeedInRight card col-md-3">
        <img src="./assets/readmegen.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Readme Generator</h5>
          <a
            href="https://github.com/ChrisBoisjoli/README_Generator"
            target="_blank"
            ><i class="live fab fa-github fa-3x"></i
          ></a>
          <p class="card-text">
            Utilizing the NPM package Inquirer this project will help users
            create a Readme for their project.
          </p>
        </div>
      </div>
    </div>
  </div>);
}

export default Portfolio;