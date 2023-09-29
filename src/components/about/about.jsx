import React from "react";
import "./styles.css";
import Face from "../../assets/Img/Face.jpg";

const AboutMe = () => {
  return (
    <div className="categoryContainer"  id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="categoryTitle" >About me</h1>
          </div>
          <div className="col-md-6 text">
            <p className="Text">
              Hi, my name is tiago salgado, i'm 20 years old and since i finish
              high school y start my studies on CoderHouse platform about React
              Frontend development.
            </p>
            <br />
            <p className="Text">
              Now after having finished the degree, i'm looking for a job that will help me to improve more my
              skills and abilities.
            </p>
          </div>
          <div className="col-md-6 md imgCont">
            <img src={Face} alt="" className="img-fluid img" />
            <h2 className="animteText">Junior web developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
