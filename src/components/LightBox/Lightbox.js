import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styles from "./LightBox.module.css";
import { Dialog } from "@reach/dialog";
import {Button} from "react-bootstrap"
import "@reach/dialog/styles.css";

export default class Lightbox extends Component {
  static propTypes = {
    carImages: PropTypes.array.isRequired, // eslint-disable-line
  };

  constructor(props) {
    super(props);

    this.state = {
      showLightbox: false,
      selectedImage: null,
    };
  }

  render() {
    const { carImages } = this.props;
    const { selectedImage, showLightbox } = this.state;
    return (
      <Fragment>
        <div className={styles.lightboxContainer}>
          {carImages.map((image) => (
            <Button
              className={styles.previewButton}
              key={image.node.childImageSharp.fluid.src}
              type="button"
              onClick={() =>
                this.setState({ showLightbox: true, selectedImage: image })
              }
            >
              <Img
                fluid={image.node.childImageSharp.fluid}
                style={{ height: "200px" }}
              />
            </Button>
          ))}
        </div>
        {showLightbox && (
          <Dialog>
            <Img fluid={selectedImage.node.childImageSharp.fluid} />
            <button
              type="button"
              onClick={() => this.setState({ showLightbox: false })}
            >
              Close
            </button>
          </Dialog>
        )}
      </Fragment>
    );
  }
}
