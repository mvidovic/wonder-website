import React from "react"
import Header from "../serviceHeader/ServiceHeader.js"
import SideBar from "../sideBar/SideBar.js"
import serviceCss from "./serviceLayout.module.css"
import Footer from "../footer/Footer"
import {Container, Row, Col} from "react-bootstrap"

export default props => (
  <div>
    <Header />
    <div className={serviceCss.divHeader}>
      <Container className="w-100 d-flex align-items-center">
        <h1 className={serviceCss.h1}>{props.name}</h1>
      </Container>
    </div>
    <Container
      style={{
        marginTop: "80px",
      }}
    >
      <Row>
        <Col lg={4} md={4}>
          <SideBar />
        </Col>
        <Col lg={8} md={8}>{props.children}</Col>
      </Row>
    </Container>
    <Footer />
  </div>
)
