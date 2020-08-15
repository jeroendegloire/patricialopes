import React from "react";
import { previewClient, productionClient } from "../../../sanityClient.js";
import imageUrlBuilder from "@sanity/image-url";
import fallbackImage from "../../images/fallback.png";

const builder =
  process.env.NODE_ENV == "development"
    ? imageUrlBuilder(previewClient)
    : imageUrlBuilder(productionClient);

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
        data-srcset={[
          urlFor(props?.mainImage?.asset?.id)
            .size(800, 400)
            .fit("crop")
            .crop("focalpoint")
            .focalPoint(x, y)
            .quality(100)
            .auto("format")
            .url() + " 768w,",
          urlFor(props?.mainImage?.asset?.id)
            .size(1200, 600)
            .quality(100)
            .crop("focalpoint")
            .focalPoint(x, y)
            .fit("crop")
            .auto("format")
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
