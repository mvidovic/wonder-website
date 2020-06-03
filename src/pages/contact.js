import React from "react"
import Layout from "../components/pagesLayout/pagesLayout"
import ProjectsCss from "./projects.module.css"
import  Map  from "../components/leafletMap/LeafletMap"

const ContactPage = () => (
  <Layout name="Kontakt">
    <div className={ProjectsCss.divContent}>
    {typeof window !== 'undefined' &&
        <Map
        />
    }
    </div>
  </Layout>
)

export default ContactPage
