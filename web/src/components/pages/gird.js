import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

const Gird = ({ images }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div className="mx-auto flex items-center flex-wrap rounded">
      <div class="">
        {images.map((image) => (
          <div class="">
            <Img
              fluid={getFluidGatsbyImage(
                image.asset.id,
                { maxWidth: 1000, maxHeight: 1000 },
                sanityConfig
              )}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gird;
