import React from "react"
import { Carousel, Row, Col } from "react-bootstrap"
import TestimonialItem from "../testimonialItem/TestimonialItem"

const Testimonials = () => (
  <Carousel indicators={false} controls={false}>
    <Carousel.Item>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <TestimonialItem
            url="/customer.jpg"
            name="Jane Doe"
            text=" Vestibulum eu libero volutpat, portas quam acc, tempus sem.
                Donec sodales quam id lorem lobortis, vitae interdum nisl
                vehicula. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Etiam suscipit, elit
                quis facilisis dictum, diam justo volutpat dui."
            position="Preduzetnik"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <TestimonialItem
            url="/customer2.jpg"
            name="John Doe"
            text=" Vestibulum eu libero volutpat, portas quam acc, tempus sem.
                Donec sodales quam id lorem lobortis, vitae interdum nisl
                vehicula. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Etiam suscipit, elit
                quis facilisis dictum, diam justo volutpat dui."
            position="Preduzetnik"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <TestimonialItem
            url="/customer3.jpg"
            name="Jo Doe"
            text=" Vestibulum eu libero volutpat, portas quam acc, tempus sem.
                Donec sodales quam id lorem lobortis, vitae interdum nisl
                vehicula. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Etiam suscipit, elit
                quis facilisis dictum, diam justo volutpat dui."
            position="Preduzetnik"
          />
        </Col>
      </Row>
    </Carousel.Item>
    <Carousel.Item>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <TestimonialItem
            url="/customer4.jpg"
            name="Tom Doe"
            text=" Vestibulum eu libero volutpat, portas quam acc, tempus sem.
                Donec sodales quam id lorem lobortis, vitae interdum nisl
                vehicula. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Etiam suscipit, elit
                quis facilisis dictum, diam justo volutpat dui."
            position="Preduzetnik"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <TestimonialItem
            url="/customer.jpg"
            name="Anne Doe"
            text=" Vestibulum eu libero volutpat, portas quam acc, tempus sem.
                Donec sodales quam id lorem lobortis, vitae interdum nisl
                vehicula. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Etiam suscipit, elit
                quis facilisis dictum, diam justo volutpat dui."
            position="Preduzetnik"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <TestimonialItem
            url="/customer5.jpg"
            name="Amy Doe"
            text=" Vestibulum eu libero volutpat, portas quam acc, tempus sem.
                Donec sodales quam id lorem lobortis, vitae interdum nisl
                vehicula. Pellentesque habitant morbi tristique senectus et
                netus et malesuada fames ac turpis egestas. Etiam suscipit, elit
                quis facilisis dictum, diam justo volutpat dui."
            position="Preduzetnik"
          />
        </Col>
      </Row>
    </Carousel.Item>
  </Carousel>
)

export default Testimonials
