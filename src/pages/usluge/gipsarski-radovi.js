import React from "react"
import Layout from "../../components/serviceLayout/serviceLayout"
import ServiceCss from "./usluge.module.css"
import AccordionComponent from "../../components/accordion/Accordion"

const GipsarskiRadovi = props => (
  <Layout name="Gipsarski Radovi">
    <div className="content">
    <div className={ServiceCss.titleContainer}>
        <h3 className={ServiceCss.title}>ŠTA SVE OBUHVATA</h3>
      </div>
      <p className={ServiceCss.text}>
        Najvažnija osobina gipsa koja ga svrstava u veoma dobre gradjevinske
        materijale je da je ekološki proizvod. Gips je topao na dodir i ima malu
        toplotnu provodljivost što ga čini termoizolacionim materijalom.
        Prostorije obložene gipsom lako se zagrevaju i zadržavaju toplotu.
      </p>

      <AccordionComponent tehnologije="Dugogodišnje iskustvo u izvođenju svih vrsta gipsanih ili gipsarskih radova po sistemu 'knauf'." />
    </div>
  </Layout>
)

export default GipsarskiRadovi
