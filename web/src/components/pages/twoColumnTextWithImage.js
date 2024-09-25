import React from "react";
import PortableText from "../portableText";
import { Link } from "gatsby";
import Social from "../layout/social";
import builder from "../../../sanityClient.js";
import SanityImage from "gatsby-plugin-sanity-image"

function urlFor(source) {
  return builder.image(source);
}

const TwoColumnTextWithImage = ({ image, text, textTwo }) => {
  const x = image?.hotspot ? image?.hotspot?.x : "0.5";
  const y = image?.hotspot ? image?.hotspot?.y : "0.5";

  return (
    image,
    text, textTwo ? (
      <div className="flex flex-col lg:flex-row w-full twocolumntextwithimage">
        <div className="w-full" style={{'flex': '1 1 auto','maxWidth': '350px'}}>
          <figure className="gatsby-image-wrapper w-full">
            <picture className={"w-full"}>
              <SanityImage {...image}
                           width={1200} alt=""
              />
            </picture>
          </figure>
        </div>

        <div className="mx-auto mt-4 lg:mt-0 w-full flex max-w-6xl flex flex-col lg:flex-row px-8 white mb-4">
          {text ? (
            <div className="prose text-sm">
              {text.map((singleText) => (
                <PortableText blocks={singleText} />
              ))}
            </div>
          ) : null}
        </div>

        <div className="mx-auto w-full flex max-w-6xl flex flex-col lg:flex-row px-8 white mb-4">
          {textTwo ? (
            <div className="prose text-sm press w-full">
              {textTwo.map((singleText) => (
                <PortableText blocks={singleText} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    ) : null
  );
};

export default TwoColumnTextWithImage;
