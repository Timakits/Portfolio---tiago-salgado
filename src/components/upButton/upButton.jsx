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
    <div className="hidden" id="upButton">
      <a href="#" style={{ textDecoration: "none" }}>
        <i className="fa-solid fa-caret-up"></i>
      </a>
    </div>
  );
};

export default UpButton;
