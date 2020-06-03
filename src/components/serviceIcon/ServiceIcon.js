import React from "react";
import { MdDashboard } from "react-icons/md";
import ServiceIconCss from "./ServiceIcon.module.css";
import { Card, Col, Row } from "react-bootstrap";

const ServiceIcon = (props) => (
  <Row className="d-flex justify-content-center align-content-center w-100">
    <Col xs={10} sm={6} md={4} lg={2}>
      <Card className={ServiceIconCss.card}>
        <Card.Body className={ServiceIconCss.cardBody}>
          <MdDashboard className={ServiceIconCss.icon} />
        </Card.Body>
        <Card.Footer className={ServiceIconCss.cardIcon}>
          <a className={ServiceIconCss.cardLink} href="/usluge/fasade"><small>Fasade</small></a>
        </Card.Footer>
      </Card>
    </Col>
    <Col xs={10} sm={6} md={4} lg={2}>
      <Card className={ServiceIconCss.card}>
        <Card.Body className={ServiceIconCss.cardBody}>
          <MdDashboard className={ServiceIconCss.icon} />
        </Card.Body>
        <Card.Footer className={ServiceIconCss.cardIcon}>
        <a className={ServiceIconCss.cardLink} href="/usluge/gipsarski-radovi"><small>Gipsarski Radovi</small></a>
        </Card.Footer>
      </Card>
    </Col>

    <Col xs={10} sm={6} md={4} lg={2}>
      <Card className={ServiceIconCss.card}>
        <Card.Body className={ServiceIconCss.cardBody}>
          <MdDashboard className={ServiceIconCss.icon} />
        </Card.Body>
        <Card.Footer className={ServiceIconCss.cardIcon}>
        <a className={ServiceIconCss.cardLink} href="/usluge/hidroizolacija-krova"><small>Hidroizolacija Krova</small></a>
        </Card.Footer>
      </Card>
    </Col>

    <Col xs={10} sm={6} md={4} lg={2}>
      <Card className={ServiceIconCss.card}>
        <Card.Body className={ServiceIconCss.cardBody}>
          <MdDashboard className={ServiceIconCss.icon} />
        </Card.Body>
        <Card.Footer className={ServiceIconCss.cardIcon}>
        <a className={ServiceIconCss.cardLink} href="/usluge/keramika"><small>Keramika</small></a>
        </Card.Footer>
      </Card>
    </Col>

    <Col xs={10} sm={6} md={4} lg={2}>
      <Card className={ServiceIconCss.card}>
        <Card.Body className={ServiceIconCss.cardBody}>
          <MdDashboard className={ServiceIconCss.icon} />
        </Card.Body>
        <Card.Footer className={ServiceIconCss.cardIcon}>
        <a className={ServiceIconCss.cardLink} href="/usluge/masinsko-gletovanje"><small>Mašinsko Gletovanje</small></a>
        </Card.Footer>
      </Card>
    </Col>
    <Col xs={10} sm={6} md={4} lg={2}>
      <Card className={ServiceIconCss.card}>
        <Card.Body className={ServiceIconCss.cardBody}>
          <MdDashboard className={ServiceIconCss.icon} />
        </Card.Body>
        <Card.Footer className={ServiceIconCss.cardIcon}>
        <a className={ServiceIconCss.cardLink} href="/usluge/masinsko-krecenje"><small>Mašinsko Krečenje</small></a>
        </Card.Footer>
      </Card>
    </Col>
  </Row>
);

export default ServiceIcon;
