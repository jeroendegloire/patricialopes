import React from "react";
import { Link } from "gatsby";
import builder from "../../../sanityClient.js";

function urlFor(source) {
  return builder.image(source);
}

const Cineitem = (props) => {
  const x = props?.featuredImage?.hotspot
    ? props?.featuredImage?.hotspot?.x
    : "0";
  const y = props?.featuredImage?.hotspot
    ? props?.featuredImage?.hotspot?.y
    : "0";

  return (
    props?.images?.length >= 3 &&
    <div
      className={
        "w-full flex flex-col item__grid relative " +
        props.category + " " + props.categoryTwo
      }
    >
      <div className="relative">
        <Link
          to={`/${props.url}`}
          title={`Read more about ${props.title}`}
          className="absolute inset-0 z-10"
        />
        <div className={'flex gap-1'}>
          <picture className={"w-full relative hidden md:block"}>
            <div
              aria-hidden="true"
              style={{
                backgroundImage: `url(${props?.images[0]?.asset?.metadata?.lqip})`,
                backgroundSize: "cover",
                paddingTop: `calc(100% / 2 * 1)`,
              }}
            ></div>
            <img
              srcSet={[
                urlFor(props?.images[0]?.asset?.id)
                  .size(800, 400)
                  .quality(100)
                  .focalPoint(.5, .5)
                  .crop("focalpoint")
                  .auto("format")
                  .url() + " 768w,",
                urlFor(props?.images[0]?.asset?.id)
                  .size(1200, 600)
                  .quality(100)
                  .focalPoint(.5, .5)
                  .crop("focalpoint")
                  .auto("format")
                  .url() + " 1536w,",
              ]}
              alt={props?.images[0]?.alt}
              className="absolute inset-0"
              loading="lazy"
            />
          </picture>
          <picture className={"w-full relative"}>
            <div
              aria-hidden="true"
              style={{
                backgroundImage: `url(${props?.images[1]?.asset?.metadata?.lqip})`,
                backgroundSize: "cover",
                paddingTop: `calc(100% / 2 * 1)`,
              }}
            ></div>
            <img
              srcSet={[
                urlFor(props?.images[1]?.asset?.id)
                  .size(800, 400)
                  .quality(100)
                  .focalPoint(.5, .5)
                  .crop("focalpoint")
                  .fit("crop")
                  .auto("format")
                  .url() + " 768w,",
                urlFor(props?.images[1]?.asset?.id)
                  .size(1200, 600)
                  .quality(100)
                  .focalPoint(.5, .5)
                  .crop("focalpoint")
                  .fit("crop")
                  .auto("format")
                  .url() + " 1536w,",
              ]}
              alt={props?.images[1]?.alt}
              className="absolute inset-0"
              loading="lazy"
            />
          </picture>
          <picture className={"w-full relative hidden md:block"}>
            <div
              aria-hidden="true"
              style={{
                backgroundImage: `url(${props?.featuredImage?.asset?.metadata?.lqip})`,
                backgroundSize: "cover",
                paddingTop: `calc(100% / 2 * 1)`,
              }}
            ></div>
            <img
              srcSet={[
                urlFor(props?.images[2]?.asset?.id)
                  .size(800, 400)
                  .quality(100)
                  .focalPoint(.5, .5)
                  .crop("focalpoint")
                  .fit("crop")
                  .auto("format")
                  .url() + " 768w,",
                urlFor(props?.images[2]?.asset?.id)
                  .size(1200, 600)
                  .quality(100)
                  .focalPoint(.5, .5)
                  .crop("focalpoint")
                  .fit("crop")
                  .auto("format")
                  .url() + " 1536w,",
              ]}
              alt={props?.images[2]?.alt}
              className="absolute inset-0"
              loading="lazy"
            />
          </picture>
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
