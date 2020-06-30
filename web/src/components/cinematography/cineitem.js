import React from "react";
import { Link } from "gatsby";
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

const Cineitem = (props) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  const x = props?.featuredImage?.hotspot
    ? props?.featuredImage?.hotspot?.x
    : "0";
  const y = props?.featuredImage?.hotspot
    ? props?.featuredImage?.hotspot?.y
    : "0";

  console.log(props);

  return (
    <div
      className={
        "w-full md:w-1/2 lg:w-1/3 flex flex-col item__grid relative " +
        props.category
      }
    >
      <div className="relative">
        <Link to={`/${props.url}`} className="absolute inset-0 z-10" />
        <div
          className={"gatsby-image-wrapper"}
          style={{
            backgroundImage: `url(${props?.featuredImage?.asset?.metadata?.lqip})`,
            backgroundSize: "cover",
          }}
        >
          <div aria-hidden="true"></div>
          <img
            src={urlFor(props?.featuredImage?.asset?.id)
              .size(1422, 800)
              .fit("crop")
              .crop("focalpoint")
              .focalPoint(x, y)
              .format("jpg")
              .quality(100)
              .url()}
            alt={props?.featuredImage?.alt}
          />
        </div>
        <div className="hover absolute flex items-center justify-center inset-0">
          <h2 className="uppercase font-semibold px-10 text-center">
            {props.title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cineitem;
