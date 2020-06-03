import React from "react"
import { Card, Accordion } from "react-bootstrap"
import { FaChevronDown } from "react-icons/fa"

const AccordionComponent = props => (
  <Accordion defaultActiveKey="0">
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey="0"
        className="row justify-content-between"
      >
        <div className="col-8"> Najnovije tehnologije</div>
        <div className="col-1">
          <FaChevronDown />
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Card.Body>{props.tehnologije}</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Accordion.Toggle
        as={Card.Header}
        eventKey="1"
        className="row justify-content-between"
      >
        <div className="col-8"> Kvalitet</div>
        <div className="col-1">
          <FaChevronDown />
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="1">
        <Card.Body>
          Zahvaljujući našim visokostručnim majstorima sa višegodišnjim
          iskustvom, kao i korišćenjem najkvalitetnije opreme i materijala,
          pružamo vam usluge visokog kvaliteta.
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
)

export default AccordionComponent
