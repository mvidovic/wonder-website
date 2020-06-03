import React from "react";
import { Col, Image } from "react-bootstrap";
import TestimonialItemCss from "./TestimonialItem.module.css";

const TestimonialItem = (props) => (
  <div className={TestimonialItemCss.wrapper}>
    <div className={TestimonialItemCss.customer}>
      <div className={TestimonialItemCss.outter}>
        <div className={TestimonialItemCss.inner}>
          <Col className="text-center">
            <Image
              src={props.url}
              roundedCircle
              className={TestimonialItemCss.image}
            />
          </Col>
          <Col className="text-center">
            <blockquote className={TestimonialItemCss.blockquote}>
              <p className="mb-0">{props.text}</p>
            </blockquote>
          </Col>
        </div>
        <Col className="text-center">
          <h4 className={TestimonialItemCss.h4}>{props.name}</h4>
        </Col>

        <Col className="text-center">
          <p className={TestimonialItemCss.position}>{props.position}</p>
        </Col>
      </div>
    </div>
  </div>
);

export default TestimonialItem;
