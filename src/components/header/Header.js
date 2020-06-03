import React from "react";
import { Navbar, Image, Nav } from "react-bootstrap";
import headerCss from "./Header.module.css";
import { Link } from "gatsby";

const activeStyles = {
  color: "rgb(241, 190, 36)",
};

const LinkStyles = {
  color: "rgb(255, 255, 255)",
};
const ListLink = (props) => (
  <Nav.Item className={headerCss.navLink}>
    <Link
      activeStyle={activeStyles}
      style={LinkStyles}
      to={props.to}
    >
      {props.children}
    </Link>
  </Nav.Item>
);

const Header = () => (
  <Navbar collapseOnSelect expand="lg" className={headerCss.headerTop}>
    <Navbar.Brand className={headerCss.brand} href="/">
      <Image fluid={true} src="logo.png" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={headerCss.nav}>
        <ListLink className={headerCss.navLink} to="/">
          Početna
        </ListLink>
        <ListLink className={headerCss.navLink} to="/usluge">
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
);

export default Header;
