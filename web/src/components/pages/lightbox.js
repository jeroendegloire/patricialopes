import React from "react";

//https://github.com/treyhuffine/lightbox-react/blob/master/src/lightbox-react.js
//https://reactjsexample.com/lightbox-for-components-or-images-built-for-react/
import LightboxReact from "lightbox-react";
import "lightbox-react/style.css";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

import NonStretchedImage from "./nonStretchedImage";

const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  //token: "myToken",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const Lightbox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const array = [];

  images.forEach((image) => {
    const imageUrl = image.asset ? image.asset : image.image.asset;
    const imageAlt = image.alt ? image.alt : image.image.alt;
    array.push(
      <img
        src={urlFor(imageUrl).width(2000).quality(100).format("jpg").url()}
        alt={imageAlt}
      />
    );
  });

  return (
    <LightboxReact
      enableZoom={false}
      clickOutsideToClose={true}
      mainSrc={array[selectedImage]}
      nextSrc={array[(selectedImage + 1) % array.length]}
      prevSrc={array[(selectedImage + array.length - 1) % images.length]}
      onCloseRequest={handleClose}
      onMovePrevRequest={handlePrevRequest(selectedImage, array.length)}
      onMoveNextRequest={handleNextRequest(selectedImage, array.length)}
    />
  );
};

export default Lightbox;
