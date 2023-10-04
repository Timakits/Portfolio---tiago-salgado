import React from "react";
import "./styles.css";

//images

import VisualCheck from "../../assets/Img/webs/3.png";
import CurrencyConvert from "../../assets/Img/webs/2.png";
import Metauric from "../../assets/Img/webs/1.png";

const Portfolio = () => {
  return (
    <div className="categoryContainer" id="portfolio">
      <div className="container-fluid">
        <div className="row">
          <h1 className="categoryTitle" >Portfolio</h1>
          <div className="col-md-4">
            <div className="card card1">
              <img src={Metauric} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">MetAuric</h5>
                <p className="card-text carText">
                  First project about a e-commerce for headsets and more. This
                  was my first web site
                </p>
                <a href="https://metauric.000webhostapp.com/" target="blank" className="btn btn-dark">
                  WebSite
                </a>
                <a
                  href="https://github.com/Timakits/PFSalgado/tree/main"
                  target="blank"
                  className="btn btn-dark"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="iconsCard">
              <i className="fa-brands fa-html5"></i>{" "}
              <i className="fa-brands fa-css3-alt"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={CurrencyConvert} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Currency Convert</h5>
                <p className="card-text">
                  This one is the second project and it's about a web that make
                  maths operations for calculate from a currency to another.
                </p>
                <a href="https://currencyconversion.com.ar/" target="blank" className="btn btn-dark">
                  WebSite
                </a>
                <a
                  href="https://github.com/Timakits/Proyectofinal_JS_TiagoSalgadp"
                  target="blank"
                  className="btn btn-dark"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="iconsCard">
              <i className="fa-brands fa-html5"></i>{" "}
              <i className="fa-brands fa-css3-alt"></i>{" "}
              <i className="fa-brands fa-square-js"></i>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={VisualCheck} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">VisualCheck ✔</h5>
                <p className="card-text">
                  Third project about a e-commerce of glasses. This one was made
                  with react so it's a combination of html,css and Js
                </p>
                <a href="https://visualcheck.com.ar/" target="blank" className="btn btn-dark">
                  WebSite
                </a>
                <a
                  href="https://github.com/Timakits/ProyectoFinal-ReactJs-TiagoSalgado#"
                  target="blank"
                  className="btn btn-dark"
                >
                  Code
                </a>
              </div>
            </div>
            <div className="iconsCard">
              <i className="fa-brands fa-html5"></i>{" "}
              <i className="fa-brands fa-css3-alt"></i>{" "}
              <i className="fa-brands fa-square-js"></i>{" "}
              <i className="fa-brands fa-react"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
