import React from "react"
import { Carousel } from "react-bootstrap"
import styles from "./Slider.module.css"



const Slider = () => (
  <Carousel>
    <Carousel.Item className={styles.item}>
    </Carousel.Item>
    <Carousel.Item className={styles.item2}>
    </Carousel.Item>
    <Carousel.Item className={styles.item3}>
    </Carousel.Item>
  </Carousel>
)

export default Slider
