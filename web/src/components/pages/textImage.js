import React from "react";
import PortableText from "../portableText";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../layout/footer";

const TextImage = ({ image, text }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div className="mx-auto flex-1 flex items-center flex-wrap">
      <div className="w-full">
        <Img
          fluid={getFluidGatsbyImage(
            image.asset.id,
            { maxWidth: 2000, maxHeight: 550 },
            sanityConfig
          )}
          alt={image.alt}
        />
      </div>

      <div className="mx-auto w-full flex max-w-6xl flex">
        <div className="w-2/3">
          {text.map((singleText) => (
            <PortableText blocks={singleText} />
          ))}
        </div>
        <div className="flex flex-end w-1/3">
          <Footer className="block self-end" />
          <Link to="/contact" className="btn block self-end">
            Contact me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
