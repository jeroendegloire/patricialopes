import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

const photoGridItem = (props) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div
      className={
        "w-full md:w-1/2 lg:w-1/3 pr-1 mb-1 flex flex-col relative item--grid"
      }
    >
      <Img
        className="hover:smaller"
        fluid={getFluidGatsbyImage(
          props.mainImage,
          { maxWidth: 600, maxHeight: 300 },
          sanityConfig
        )}
        alt={props.altImage}
      />
    </div>
  );
};

export default photoGridItem;
