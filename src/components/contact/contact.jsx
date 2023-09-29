import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <div className="categoryContainer" id="contact">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <h1 className="categoryTitle" >Contact me!</h1>
          </div>
          <div className="col-md-6">
            <div className="contactList">
              <ul className="ul">
                <li className="list-group-item">
                  <a
                    href="mailto:tiagosalgado1110@gmail.com?Subject=Contact%20from%20portfolio"
                    className="link"
                    target="blank"
                  >
                    <i className="fa-solid fa-envelope"></i>{" "}
                    Tiagosalgado1110@gmail.com
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://www.linkedin.com/in/tiago-salgado-554080225"
                    className="link"
                    target="blank"
                  >
                    <i className="fa-brands fa-linkedin"></i> Tiago salgado
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://github.com/Timakits"
                    className="link"
                    target="blank"
                  >
                    <i className="fa-brands fa-github"></i> Timakits
                  </a>
                </li>
                <li className="list-group-item">
                  <a
                    href="https://wa.link/ffr9jn"
                    className="link"
                    target="blank"
                  >
                    <i className="fa-brands fa-whatsapp"></i> 11-6423-0451
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
