import React from "react";
import Layout from "../components/pagesLayout/pagesLayout";
import ProjectsCss from "./projects.module.css";

const AboutPage = () => (
  <Layout name="O nama">
    <div className={ProjectsCss.divContent}>
      <div className={ProjectsCss.titleContainer}>
        <h3 className={ProjectsCss.title}>Ko smo mi</h3>
      </div>
      <p className={ProjectsCss.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec
        erat erat. Integer blandit nulla quis fermentum hendrerit. Vestibulum eu
        libero volutpat, portas quam acc, tempus sem. Donec sodales quam id
        lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.
        Cras id justo eget sapien scelerisque lacinia non a eros. Libero volutpat, portas quam acc, tempus sem. Donec sodales quam id
        lorem lobortis, vitae interdum nisl vehicula. Pellentesque habitant
        morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        Etiam suscipit, elit quis facilisis dictum, diam justo volutpat dui.
        Cras id justo eget sapien scelerisque lacinia non a eros.
      </p>
    </div>
  </Layout>
);

export default AboutPage;
