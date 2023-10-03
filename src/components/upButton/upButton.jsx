import React, { useState } from "react";
import "./styles.css";

const UpButton = () => {
  window.addEventListener("scroll", () => {
    const button = document.getElementById("upButton");
    if (window.scrollY > 200) {
      button.classList.remove("hidden");
    } else {
      button.classList.add("hidden");
    }
  });
  return (
      <a href="#" style={{ textDecoration: "none" }}>
    <div className="hidden" id="upButton">
        <i className="fa-solid fa-caret-up"></i>
    </div>
      </a>
  );
};

export default UpButton;
