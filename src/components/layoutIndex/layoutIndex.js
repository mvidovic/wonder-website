import React from "react";
import Header from "../header/Header.js";
import layoutCss from "./layoutIndex.module.css"
import Slider from "../Slider";

export default ({ children }) => (
  <div>
    <div className={layoutCss.headerBanerContainer}>
      <Header />
      <Slider />
    </div>

    <div className="container mt-4">{children}</div>
  </div>
);
