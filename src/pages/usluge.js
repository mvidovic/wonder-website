import React from "react"
import Service from "../components/cardService/CardService"
import Layout from "../components/pagesLayout/pagesLayout"
import {Row, Col} from "react-bootstrap"

const ServicesPage = () => (
  <Layout name="Naše usluge">
    <Row className="text-center" style={{ marginTop: "4vh" }}>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Gipsarski Radovi"
          url="/img1.jpg"
          linkto="/usluge/gipsarski-radovi"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Molersko-farbarski Radovi"
          linkto="/usluge/molersko-farbarski-radovi"
          url="/img3.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Fasade"
          linkto="/usluge/fasade"
          url="/img2-2.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Keramika"
          linkto="/usluge/keramika"
          url="/img1.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Vodoinstalaterski radovi"
          linkto="/usluge/vodoinstalaterski-radovi"
          url="/img3.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Montaža vodovodne mreže"
          linkto="/usluge/montaza-vodovodne-mreze-sanitarija"
          url="/img2-2.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Hidroizolacija krova"
          linkto="/usluge/hidroizolacija-krova"
          url="/img1.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Mašinsko gletovanje"
          linkto="/usluge/masinsko-gletovanje"
          url="/img3.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
      <Col className="p-3" xs={12} sm={6} md={6} lg={4}>
        <Service
          name="Mašinsko krečenje"
          linkto="/usluge/masinsko-krecenje"
          url="/img2-2.jpg"
          text="Some quick example text to build on the card title and make up the bulk of
        the card's content."
        />
      </Col>
    </Row>
  </Layout>
)

export default ServicesPage
