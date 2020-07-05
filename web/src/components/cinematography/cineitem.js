import React from "react";
import { Link } from "gatsby";
import imageUrlBuilder from "@sanity/image-url";
import styled from "styled-components";
import { useEffect } from "react";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  useCdn: true,
  withCredentials: false,
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

  return (
    <div
      className={
        "w-full md:w-1/2 lg:w-1/3 flex flex-col item__grid relative " +
        props.category
      }
    >
      <div className="relative">
        <Link to={`/${props.url}`} className="absolute inset-0 z-10" />
        <figure
          className={"gatsby-image-wrapper"}
          style={{
            backgroundImage: `url(${props?.featuredImage?.asset?.metadata?.lqip})`,
            backgroundSize: "cover",
          }}
        >
          <picture className={"w-full"}>
            <div
              aria-hidden="true"
              style={{
                paddingTop: `calc(100% / 2 * 1)`,
              }}
            ></div>
            <source
              type="image/webp"
              data-srcset={[
                urlFor(props?.featuredImage?.asset?.id)
                  .size(800, 400)
                  .fit("crop")
                  .crop("focalpoint")
                  .focalPoint(x, y)
                  .quality(100)
                  .format("webp")
                  .url() + " 768w,",
                urlFor(props?.featuredImage?.asset?.id)
                  .size(1200, 600)
                  .quality(100)
                  .crop("focalpoint")
                  .focalPoint(x, y)
                  .fit("crop")
                  .format("webp")
                  .url() + " 1536w,",
              ]}
              data-sizes="(min-width: 1536px) 100vw, 
                  (min-width: 1366px) 100vw,
                  100vw"
              loading="lazy"
            />
            <img
              src={props?.featuredImage?.asset?.metadata?.lqip}
              data-srcset={[
                urlFor(props?.featuredImage?.asset?.id)
                  .size(800, 400)
                  .quality(100)
                  .focalPoint(x, y)
                  .crop("focalpoint")
                  .fit("crop")
                  .format("jpg")
                  .url() + " 768w,",
                urlFor(props?.featuredImage?.asset?.id)
                  .size(1200, 600)
                  .quality(100)
                  .focalPoint(x, y)
                  .crop("focalpoint")
                  .fit("crop")
                  .format("jpg")
                  .url() + " 1536w,",
              ]}
              alt={props?.featuredImage?.alt}
              className="lazy absolute inset-0"
              loading="lazy"
            />
          </picture>
        </figure>
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
