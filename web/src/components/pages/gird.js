import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import LightBox from "./lightbox";
import PropTypes from "prop-types";
import Isotope from "isotope-layout/js/isotope";

import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  useCdn: true,
  withCredentials: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Gird = ({ items }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (i) => (e) => {
    setShowLightbox(true);
    setSelectedImage(i);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };

  useEffect(() => {
    var elem = document.querySelector(".grid");
    var iso = new Isotope(elem, {
      layoutMode: "masonry",
      percentPosition: true,
    });
  }, []);

  return (
    <div className="flex items-center flex-wrap flex-1 -mb-4 masonry-wrapper">
      <div className="flex flex-1 grid">
        {items.map((item, i) => (
          <div
            onClick={handleOpen(i)}
            className={"item-grid " + item.ratio}
            key={i}
          >
            <div
              className={"gatsby-image-wrapper"}
              style={{
                backgroundImage: `url(${item.image.asset.metadata.lqip})`,
                backgroundSize: "cover",
              }}
            >
              <div aria-hidden="true"></div>
              <img
                src={urlFor(item.image.asset)
                  .width(2000)
                  .quality(100)
                  .format("jpg")
                  .url()}
                alt={item.image.alt}
                style={{
                  objectPosition:
                    item.positionVertical + " " + item.positionHorizontal,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {showLightbox && selectedImage !== null && (
        <LightBox
          images={items}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

Gird.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array,
};

export default Gird;
