import React from "react";
import myConfiguredSanityClient from "../../../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import fallbackImage from "../../images/fallback.png";

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
    <picture className={"w-full"}>
      <div
        aria-hidden="true"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${placeholder})`,
          paddingTop: "50%",
        }}
      ></div>
      <source
        type="image/webp"
        src={fallbackImage}
        data-srcset={[
          urlFor(props?.mainImage?.asset?.id)
            .size(800, 400)
            .fit("crop")
            .crop("focalpoint")
            .focalPoint(x, y)
            .quality(100)
            .format("webp")
            .url() + " 768w,",
          urlFor(props?.mainImage?.asset?.id)
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
        src={fallbackImage}
        data-srcset={[
          urlFor(props?.mainImage?.asset?.id)
            .size(800, 400)
            .quality(100)
            .focalPoint(x, y)
            .crop("focalpoint")
            .fit("crop")
            .format("jpg")
            .url() + " 768w,",
          urlFor(props?.mainImage?.asset?.id)
            .size(1200, 600)
            .quality(100)
            .focalPoint(x, y)
            .crop("focalpoint")
            .fit("crop")
            .format("jpg")
            .url() + " 1536w,",
        ]}
        alt={props?.mainImage?.alt}
        className="lazy absolute inset-0"
        loading="lazy"
      />
    </picture>
  );
};

export default photoGridItem;
