import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

const Cineitem = (props) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div
      className={
        "w-full md:w-1/2 lg:w-1/3 pr-1 mb-1 flex flex-col item__grid relative " +
        props.category
      }
    >
      <div className="relative">
        <Link to={props.url} className="absolute inset-0 z-10" />
        <Img
          className="hover:smaller"
          fluid={getFluidGatsbyImage(
            props.featuredImage,
            { maxWidth: 600, maxHeight: 300 },
            sanityConfig
          )}
          alt={props.altImage}
        />
        <div className="hover absolute flex items-center justify-center inset-0">
          <h2 className="uppercase font-semibold">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cineitem;
