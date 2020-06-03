import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "gatsby"
import CardServiceCss from "./CardService.module.css"

const CardService = props => (
  <Card className={CardServiceCss.card} border="light">
    <Card.Img variant="top" src={props.url} />
    <Card.Body className={CardServiceCss.cardBody}>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text className={CardServiceCss.cardText}>{props.text}</Card.Text>
      <Link to={props.linkto} className={CardServiceCss.button}>
        Saznaj više
      </Link>
    </Card.Body>
  </Card>
)

export default CardService
