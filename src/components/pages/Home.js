import React from "react";
function Home(){
    return (<div class="container">
    <div class="row">
      <div class="card col-md-8 animate__animated animate__backInDown">
        <img
          src="./assets/headshot.jpg"
          class="card-img-top headshot"
          alt="Photo of developer Chris Boisjoli"
        />
        <div class="card-body">
          <h5 class="card-title">About Me</h5>
          <a href="https://github.com/ChrisBoisjoli" target="_blank"
            ><i class="contact fab fa-github fa-2x"></i
          ></a>
          <a
            href="https://www.linkedin.com/in/chris-boisjoli-b13193200/"
            target="_blank"
            ><i class="contact fab fa-linkedin fa-2x"></i
          ></a>
          <a href="mailto:christopherboisjoli@gmail.com"
            ><i class="contact fas fa-envelope-square fa-2x"></i
          ></a>
          <a href="tel:612-460-0187"
            ><i class="contact fas fa-phone fa-2x"></i
          ></a>
          <a
            href="./assets/Christopher_Boisjoli_Resume2_11.pdf"
            target="_blank"
            ><i class="contact fas fa-file fa-2x"></i
          ></a>
          <p class="card-text">
            Hi! My name is Chris Boisjoli and I am in the UMN Coding Bootcamp
            learning the MERN stack. So far in the course we have learned
            HTML, CSS, JavaScript, Node, Express, MySQL and I am very excited
            to learn more. I am 35 years old and have been married to my wife
            Christine for 13 years. We live in Minneapolis with our dog
            Dottie. I am originally from Duluth MN and graduated with a degree
            in International Relations from St. Cloud State University where I
            participated in ROTC and spent 10 years in the Army National
            Guard.
          </p>
        </div>
      </div>
    </div>
    </div>);
}

export default Home;