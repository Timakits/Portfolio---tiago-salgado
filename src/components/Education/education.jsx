import React from "react";
import "./styles.css";

import coderLogo from "../../assets/Img/coderLogo.png";

//icons
import bitso from "../../assets/Img/icons/bitso.png";
import fbk from "../../assets/Img/icons/fbk.png";
import ml from "../../assets/Img/icons/ml.png";
import py from "../../assets/Img/icons/py.png";
import rappi from "../../assets/Img/icons/rappi.png";
import ubr from "../../assets/Img/icons/ubr.png";

//certificates
import js from "../../assets/certificates/js.png";
import wd from "../../assets/certificates/wd.png";
import Rjs from "../../assets/certificates/Rjs.png";

const Education = () => {
  return (
    <div className="categoryContainer" id="education">
      <div className="container-fluid">
        <div className="row">
          <h1 className="categoryTitle">Education</h1>
          <div className="col-md-6 info">
            <div className="col-12 text-center">
              <a href="https://us.coderhouse.com/" target="blank">
                <img src={coderLogo} alt="" className="img-fluid imgCoder" />
              </a>
            </div>
            <p className="Text">
              CoderHouse programs and careers has been Co-created with some
              developers from
            </p>
            <div className="d-flex">
              <div className="col-md-12">
                <img src={bitso} alt="" className="img-fluid icons" />
                <img src={fbk} alt="" className="img-fluid icons" />
                <img src={ml} alt="" className="img-fluid icons" />
                <img src={py} alt="" className="img-fluid icons" />
                <img src={rappi} alt="" className="img-fluid icons" />
                <img src={ubr} alt="" className="img-fluid icons" />
              </div>
            </div>
            <p className="Text" style={{ marginTop: "5%" }}>
              There are a lot of courses and career such as my case i did the
              career of React Frontend development.
            </p>
          </div>
          <div className="col-md-6 info d-flex flex-column align-items-center justify-content-center">
            <h2 className="subtitle">More than 100 hours of study</h2>
            <div className="d-flex justify-content-center degree">
              <div className="text-center">
                <h3>
                  JavaSctipt {" "}<i className="fa-brands fa-square-js"></i>
                </h3>
                <p>(34 Hours )</p>
              </div>
              <a href={js} download="Tiago_salgado_certificate_js">
                <button type="button" className="btn btn-outline-info">
                  Certificate
                </button>
              </a>
            </div>
            <div className="d-flex justify-content-center degree">
              <div className="text-center">
                <h3>
                  Web develope {" "} <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3-alt"></i>
                </h3>
                <p>(38 Hours)</p>
              </div>
              <a href={wd} download="Tiago_salgado_certificate_Web_develope">
                <button type="button" className="btn btn-outline-info">
                  Certificate
                </button>
              </a>
            </div>
            <div className="d-flex justify-content-center degree">
              <div className="text-center">
                <h3>
                  React js  {" "}<i className="fa-brands fa-react"></i>
                </h3>
                <p>(30 Hours)</p>
              </div>
              <a href={Rjs} download="Tiago_salgado_certificate_React_js">
                <button type="button" className="btn btn-outline-info">
                  Certificate
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
