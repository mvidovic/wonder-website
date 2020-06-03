import React from "react";
import { Parallax } from "react-parallax";
import style from "./ParallaxComponent.module.css";
import { Row, Col } from "react-bootstrap";
import  CountUp  from "react-countup";



export default function ParallaxComponent() {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={"./img3.jpg"}
      bgImageAlt="workers"
      strength={-200}
      className="m-auto"
    >
      <div className={style.overlay}>
        <Row className="d-flex justify-content-center align-content-center w-100 m-auto">
          <Col className="d-grid w-100" xs={6} sm={6} md={6} lg={3}>
          
            <span className={style.span}><CountUp delay={2} end={700} /> +</span>
            <br /> <span className={style.spanText}>završenih projekata</span>
          </Col>
          <Col className="d-grid w-100" xs={6} sm={6} md={6} lg={3}>
          <span className={style.span}><CountUp delay={2} end={650} /> +</span>
            <br /> <span className={style.spanText}>zadovoljnih klijenata</span>
          </Col>
          <Col className="d-grid w-100" xs={6} sm={6} md={6} lg={3}>
          <span className={style.span}><CountUp delay={2} end={1300} /> +</span>
            <br /> <span className={style.spanText}>zaposlenih radnika</span>
          </Col>
          <Col className="d-grid w-100" xs={6} sm={6} md={6} lg={3}>
          <span className={style.span}><CountUp delay={2} end={4300} /> +</span>
            <br /> <span className={style.spanText}>popijenih kafa</span>
          </Col>
        </Row>
      </div>
    </Parallax>
  );
}
