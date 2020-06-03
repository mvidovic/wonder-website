import React from "react";
import footerStyles from "./Footer.module.css";
import { Col, Row, Container } from "react-bootstrap";
import { FaMobileAlt, FaHome } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => (
  <footer className={footerStyles.footer}>
    <Container>
      <Row>
        <Col xs={12} sm={6} md={4}>
            <a href="/" className={footerStyles.span}>
              <FaHome className={footerStyles.spanIcon} />
              <span> Beograd, Republika Srbija</span>
            </a>
        </Col>
        <Col xs={12} sm={6} md={4}>
            <a href="mailto:companymail@gmailcom" className={footerStyles.span}>
              <MdMailOutline className={footerStyles.spanIcon} />
              <span> companymail@gmail.com</span>
            </a>
        </Col>
        <Col xs={12} sm={6} md={4}>
            <a href="tel: (880) 168-0528" className={footerStyles.span}>
              <FaMobileAlt className={footerStyles.spanIcon} />
              <span> (880) 168-0528</span>
            </a>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
