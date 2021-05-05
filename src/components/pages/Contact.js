import React from "react";
function Contact() {
  return (
    <div>
      <h1 className="contactHeader">
        You must really want to chat! Reach me here:
      </h1>
      <div className=" container">
        <div className="row">
          <div className="reach col-md-4">
            <div className=" card">
              <div className="animate__animated animate__flipInX card-body">
                <h5 className="card-title"></h5>
                <h6 className="card-muted mb-2 text-muted"></h6>
                <p className="card-text"></p>
                <a href="mailto:christopherboisjoli@gmail.com">
                  <i className="contact fas fa-envelope-square fa-3x"></i>
                </a>
                <a href="tel:612-460-0187">
                  <i className="contact fas fa-phone fa-3x"></i>
                </a>
                <a href="https://twitter.com/Chris_Boisjoli_" target="_blank">
                  <i className="contact fab fa-twitter fa-3x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
