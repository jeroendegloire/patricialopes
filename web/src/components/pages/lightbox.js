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
      <div className="mb-4 cinemato-image relative">
        <div
          aria-hidden="true"
          style={{
            backgroundImage: `url(${image.asset.metadata.lqip})`,
            backgroundSize: "cover",
            paddingTop: `calc(100% / ${image.asset.metadata.dimensions.aspectRatio})`,
          }}
        ></div>
        <img
          src={urlFor(image.asset.id)
            .width(2400)
            .quality(90)
            .format("jpg")
            .url()}
          alt={image.alt}
          className="absolute inset-0"
        />
      </div>
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
