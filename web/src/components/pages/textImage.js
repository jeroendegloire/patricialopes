import React from "react";
import PortableText from "../portableText";
import { Link } from "gatsby";
import Social from "../layout/social";
import builder from "../../../sanityClient.js";
import SanityImage from "gatsby-plugin-sanity-image"

function urlFor(source) {
  return builder.image(source);
}

const TextImage = ({ image, text }) => {
  const x = image?.hotspot ? image?.hotspot?.x : "0.5";
  const y = image?.hotspot ? image?.hotspot?.y : "0.5";

  return (
    image,
    text ? (
      <div className="flex flex-col md:flex-row w-full items-center bg-black text-white">
        <div className="mx-auto w-full flex max-w-6xl flex flex-col md:flex-row p-10 white textImage">
          {text ? (
            <div className="prose text-sm">
              {text.map((singleText) => (
                <PortableText blocks={singleText} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="w-full" style={{'flex': '1 1 auto'}}>
          <figure className="gatsby-image-wrapper w-full">
            <picture className={"w-full"}>
              <SanityImage {...image}
                           width={1200} alt=""
              />
            </picture>
          </figure>
        </div>
      </div>
    ) : null
  );
};

export default TextImage;
