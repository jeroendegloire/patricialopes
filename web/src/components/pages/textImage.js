import React from "react";
import PortableText from "../portableText";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

const TextImage = ({ image, text }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div className="mx-auto flex items-center flex-wrap rounded">
      <div className="md:w-1/2">
        <Img
          fixed={getFixedGatsbyImage(
            image.asset.id,
            { width: 1000, height: 1000 },
            sanityConfig
          )}
          alt={image.alt}
          className="max-w-full -mb-2"
        />
      </div>
      <div className="md:w-1/2">
        {text.map((singleText) => (
          <PortableText blocks={singleText} />
        ))}
      </div>
    </div>
  );
};

export default TextImage;
