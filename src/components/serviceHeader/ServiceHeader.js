import React from "react";
import { Row, Container, Navbar, Image, Nav } from "react-bootstrap";
import headerStyles from "./ServiceHeader.module.css";
import { MdMailOutline } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { Link } from "gatsby";

const activeStyles = {
  color: "rgb(241, 190, 36)",
};

const LinkStyles = {
  color: "rgb(119, 119, 127)",
};
const ListLink = (props) => (
  <Nav.Item className={headerStyles.navLink}>
    <Link
      activeStyle={activeStyles}
      to={props.to}
      style={LinkStyles}
    >
      {props.children}
    </Link>
  </Nav.Item>
);

export default (props) => (
  <header>
    <div className={headerStyles.headerTop}>
      <Container>
        <Row className="top-left mr-auto clearfix">
          <div className={headerStyles.linkContainer}>
            <a href="mailto:companymail@gmailcom">
              <MdMailOutline />
              <span className="pl-1">companymail@gmail.com</span>
            </a>
          </div>
          <div className={headerStyles.linkContainer}>
            <a href="/">
              <FaMobileAlt />
              <span className="pl-1">(880) 168-0528</span>
            </a>
          </div>
        </Row>
      </Container>
    </div>

    <div className={headerStyles.headerBottom}>
      <Navbar collapseOnSelect expand="lg" className="w-100">
        <Navbar.Brand className={headerStyles.brand} href="/">
          <Image fluid={true} src="/logo.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className={headerStyles.collapse}
          id="basic-navbar-nav"
        >
          <Nav className={headerStyles.nav}>
            <ListLink to="/">
              Početna
            </ListLink>
            <ListLink to="/usluge">
              Usluge
            </ListLink>
            <ListLink to="/portfolio">
              Portfolio
            </ListLink>
            <ListLink to="/about">
              O Nama
            </ListLink>
            <ListLink to="/contact">
              Kontakt
            </ListLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
);
