import React from "react";
import RecentWork from "../components/cardRecentWork/CardRecentWork";
import Layout from "../components/pagesLayout/pagesLayout";
import ProjectsCss from "./projects.module.css";

const ProjectsPage = () => (
  <Layout name="Naši projekti">
    <div className={ProjectsCss.divContent}>
      <div className={ProjectsCss.titleContainer}>
        <h3 className={ProjectsCss.title}>ŠTA SVE OBUHVATA</h3>
      </div>

      <p className={ProjectsCss.text}>
        Na ovoj stranici možete da pogledate sve naše dosadašnje radove.
      </p>
    </div>
    <RecentWork />
  </Layout>
);

export default ProjectsPage;
