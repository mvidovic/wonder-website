import React from "react"
import Layout from "../../components/serviceLayout/serviceLayout"
import ServiceCss from "./usluge.module.css"
import AccordionComponent from "../../components/accordion/Accordion"

const MasinskoGletovanje = props => (
  <Layout name="Mašinsko gletovanje">
    <div className="content">
    <div className={ServiceCss.titleContainer}>
        <h3 className={ServiceCss.title}>ŠTA SVE OBUHVATA</h3>
      </div>
      <p className={ServiceCss.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
        erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu
        libero volutpat, portas quam acc, tempus sem. Donec sodales quam id
        lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.
        Cras id justo eget sapien scelerisque lacinia non a eros.
      </p>

      <AccordionComponent />
    </div>
  </Layout>
)

export default MasinskoGletovanje
