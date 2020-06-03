import React from "react";
import Layout from "../../components/serviceLayout/serviceLayout";
import AccordionComponent from "../../components/accordion/Accordion";
import ServiceCss from "./usluge.module.css";

const Fasade = (props) => (
  <Layout name="Fasade">
    <div className="content">
      <div className={ServiceCss.titleContainer}>
        <h3 className={ServiceCss.title}>ŠTA SVE OBUHVATA</h3>
      </div>
      <p className={ServiceCss.text}>
        Reč fasada potiče od latinske reči „facies“ što znači lice. Međutim,
        fasada nije samo lice, ona je i odelo vašeg doma zato što čuva
        postojanost i izdržljivost zidova svakog objekta. Stoga je veoma važno
        pažljivo izabrati materijal i vrstu fasade.
      </p>
      <AccordionComponent />
    </div>
  </Layout>
);

export default Fasade;
