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
  useCdn: false,
  withCredentials: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const photoGridItem = (props) => {
  const placeholder = props.mainImage.asset.metadata.lqip;

  const x = props.mainImage.hotspot ? props.mainImage.hotspot.x : "0.5";
  const y = props.mainImage.hotspot ? props.mainImage.hotspot.y : "0.5";

  return (
    <figure className="gatsby-image-wrapper">
      <div
        aria-hidden="true"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${placeholder})`,
        }}
      ></div>
      <img
        src={urlFor(props.mainImage)
          .size(1200, 600)
          .fit("crop")
          .crop("focalpoint")
          .focalPoint(x, y)
          .format("jpg")
          .quality(100)
          .url()}
      />
    </figure>
  );
};

export default photoGridItem;
