import React from "react";
import PortableText from "../portableText";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import { FaAngleDown } from "react-icons/fa";
import Footer from "../layout/footer";
import { serializers } from "@sanity/block-content-to-react/lib/targets/dom";

const TextImage = ({ image, text }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div className="flex flex-wrap flex-col w-full">
      <div className="w-full">
        <Img
          fluid={getFluidGatsbyImage(
            image.asset.id,
            { maxWidth: 2000, maxHeight: 600 },
            sanityConfig
          )}
          alt={image.alt}
        />
      </div>

      <div className="mx-auto w-full flex max-w-6xl flex flex-col md:flex-row pt-10 px-10 xl:px-0">
        <div className="md:w-2/3">
          {text.map((singleText) => (
            <PortableText blocks={singleText} />
          ))}
        </div>
        <div className="flex flex-col self-end md:w-1/3 mb-5">
          <Link to="/contact" className="btn block self-end">
            Contact me
          </Link>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
