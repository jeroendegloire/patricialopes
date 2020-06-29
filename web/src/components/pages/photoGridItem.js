import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import myConfiguredSanityClient from "../../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";

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

const photoGridItem = (props) => {
  const placeholder = props.mainImage.asset.metadata.lqip;

  const x = props.mainImage.hotspot ? props.mainImage.hotspot.x : null;
  const y = props.mainImage.hotspot ? props.mainImage.hotspot.y : null;

  return (
    <figure
      className="gatsby-image-wrapper"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${placeholder})`,
      }}
    >
      <div aria-hidden="true"></div>
      <img
        src={urlFor(props.mainImage)
          .size(1200, 600)
          .fit("crop")
          .crop("focalpoint")
          .focalPoint(x, y)
          .format("jpg")
          .url()}
      />
    </figure>
  );
};

export default photoGridItem;
