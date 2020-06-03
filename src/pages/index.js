import React from "react";
import ParallaxComponent from "../components/parallaxComponent/ParallaxComponent";
import Layout from "../components/layoutIndex/layoutIndex";
import Service from "../components/cardService/CardService";
import ServiceIcon from "../components/serviceIcon/ServiceIcon";
import RecentWork from "../components/cardRecentWork/CardRecentWork";
import IndexCss from "./index.module.css";
import Testimonials from "../components/testimonials/Testimonials";
import { Container, Col, Row } from "react-bootstrap";
import Footer from "../components/footer/Footer";




const IndexPage = () => (
  <div>
    <Layout>
      <Row
        className="text-center"
        style={{ marginTop: "110px", marginBottom: "90px" }}
      >
        <Col xs={12} sm={12} md={4} lg={4}>
          <Service
            name="Gipsarski Radovi"
            url="/img1.jpg"
            linkto="/usluge/gipsarski-radovi"
            text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
          />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Service
            name="Molersko-farbarski Radovi"
            linkto="/usluge/molersko-farbarski-radovi"
            url="/img3.jpg"
            text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
          />
        </Col>
        <Col xs={12} sm={12} md={4} lg={4}>
          <Service
            name="Fasade"
            linkto="/usluge/fasade"
            url="/img2-2.jpg"
            text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
          />
        </Col>
      </Row>
    </Layout>
    <div className="container-fluid p-0">
      <ParallaxComponent />

      <Row
        className="d-flex justify-content-center ml-auto mr-auto"
        style={{ marginTop: "113px", height: "75px" }}
      >
        <Col
          sm={12}
          md={6}
          xl={3}
          className="d-flex justify-content-center ml-auto mr-auto h-100"
        >
          <div className={IndexCss.titleContainer}>
            <h3 className={IndexCss.title}>NEDAVNI RADOVI</h3>
          </div>
        </Col>
      </Row>
      <Row className="text-center m-auto" style={{ marginTop: "50px" }}>
        <Col className="p-0">
          <RecentWork />
        </Col>
      </Row>
      <Row
        className="d-flex justify-content-center ml-auto mr-auto"
        style={{ marginTop: "113px", height: "75px" }}
      >
        <Col
          sm={12}
          md={6}
          xl={3}
          className="d-flex justify-content-center ml-auto mr-auto h-100"
        >
          <div className={IndexCss.titleContainer}>
            <h3 className={IndexCss.title}>ŠTA NUDIMO</h3>
          </div>
        </Col>
      </Row>

      <Row
        className="d-flex justify-content-center text-center m-auto"
        style={{ marginTop: "50px" }}
      >
        <Col>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            sit amet iaculis elit. Nam semper ut arcu non placerat. Praesent
            nibh massa varius.
          </p>
        </Col>
      </Row>
    </div>
    <div className="container" style={{ marginTop: "80px" }}>
      <Row className="text-center m-auto d-flex justify-content-center">
        <ServiceIcon />
      </Row>
    </div>
    <Row
      className="d-flex justify-content-center ml-auto mr-auto"
      style={{ marginTop: "113px", height: "75px" }}
    >
      <Col
        sm={12}
        md={6}
        xl={3}
        className="d-flex justify-content-center ml-auto mr-auto h-100"
      >
        <div className={IndexCss.titleContainer}>
          <h3 className={IndexCss.title}>UTISCI KLIJENATA</h3>
        </div>
      </Col>
    </Row>
    <Row
      className="d-flex justify-content-center m-auto"
      style={{ marginTop: "50px" }}
    >
      <Col className="text-center" xs={10}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit
          amet iaculis elit. Nam semper ut arcu non placerat. Praesent nibh
          massa varius.
        </p>
      </Col>
    </Row>
    <Container style={{ paddingTop: "70px", paddingBottom: "110px" }}>
      <Testimonials />
    </Container>
    <Footer />
  </div>
);

export default IndexPage;
