import React from "react";
import Header from "../serviceHeader/ServiceHeader.js";
import serviceCss from "./pagesLayout.module.css";
import Footer from "../footer/Footer";
import { Container } from "react-bootstrap";

export default (props) => (
  <div>
    <Header />
    <div style={{ paddingBottom: "100px" }}>
      <div className={serviceCss.divHeader}>
        <Container className="w-100 d-flex align-items-center">
          <h1 className={serviceCss.h1}>{props.name}</h1>
        </Container>
      </div>
      <Container>{props.children}</Container>
    </div>
    <Footer />
  </div>
);
