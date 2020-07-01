import React from "react";

//https://github.com/treyhuffine/lightbox-react/blob/master/src/lightbox-react.js
//https://reactjsexample.com/lightbox-for-components-or-images-built-for-react/
import LightboxReact from "lightbox-react";
import "lightbox-react/style.css";

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

const Lightbox = ({
  images,
  selectedImage,
  handleClose,
  handlePrevRequest,
  handleNextRequest,
}) => {
  const array = [];

  images.forEach((image) => {
    const imageUrl = image.asset ? image.asset.id : image.image.asset.id;
    const imageAlt = image.alt ? image.alt : image.image.alt;
    const backgroundImage = image.asset
      ? image.asset.metadata.lqip
      : image.image.asset.metadata.lqip;
    const imageRatio = image.asset
      ? image.asset.metadata.dimensions.aspectRatio
      : image.image.asset.metadata.dimensions.aspectRatio;
    array.push(
      <div>
        {/* //className="w-full z-10" */}
        <div
          aria-hidden="true"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            paddingTop: `calc(100% / ${imageRatio})`,
          }}
        ></div>
        <img
          src={urlFor(imageUrl).width(2400).quality(100).format("jpg").url()}
          alt={imageAlt}
          className="absolute inset-0 mx-auto"
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
