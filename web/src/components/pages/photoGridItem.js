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
  useCdn: false,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const photoGridItem = (props) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  const placeholder = props.mainImage.metadata.lqip;
  const aspectRatio = props.mainImage.metadata.dimensions.aspectRatio;

  const Figure = styled.figure`
  background-image: url('${placeholder}');
  background-size: cover;
  `;

  return (
    <Figure classname="gatsby-image-wrapper">
      <div aria-hidden="true"></div>
      <img
        src={urlFor(props.mainImage)
          .size(1200, 600)
          .fit("crop")
          .crop("focalpoint")
          .url()}
      />
    </Figure>
  );
};

export default photoGridItem;
