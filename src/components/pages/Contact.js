import React from "react";
function Contact(){
    return (<div>
    <h1 class="contactHeader">You must really want to chat! Reach me here:</h1>
    <div class=" container">
      <div class="row">
        <div class="reach col-md-4">
          <div class=" card">
            <div class="animate__animated animate__flipInX card-body">
              <h5 class="card-title"></h5>
              <h6 class="card-muted mb-2 text-muted"></h6>
              <p class="card-text"></p>
              <a href="mailto:christopherboisjoli@gmail.com"
                ><i class="contact fas fa-envelope-square fa-3x"></i
              ></a>
              <a href="tel:612-460-0187"
                ><i class="contact fas fa-phone fa-3x"></i
              ></a>
              <a href="https://twitter.com/Chris_Boisjoli_" target="_blank"
              ><i class="contact fab fa-twitter fa-3x"></i
            ></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
);
}

export default Contact;