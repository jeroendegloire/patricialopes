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
    <div className="mx-auto flex items-center flex-wrap">
      <div className="lg:w-1/2">
        <Img
          fixed={getFixedGatsbyImage(
            image.asset.id,
            { width: 1000, height: 810 },
            sanityConfig
          )}
          alt={image.alt}
          className="max-w-full -mb-4"
        />
      </div>
      <div className="lg:w-1/2 p-6 lg:px-20 md:py-10 lg:pr-0">
        <div className="overflow-y-scroll mh-80 relative pr-20">
          <h1 className="uppercase">I'm Patricia Lopes,</h1>
          {text.map((singleText) => (
            <PortableText blocks={singleText} />
          ))}
          {/* <Link
            to="#end"
            className="inline-block float-right scroll-button absolute"
          >
            <FaAngleDown size={30} />
          </Link>
          <span id="end hidden"></span> */}
        </div>
        <div className="mt-8 flex justify-between pr-20">
          <Link to="/contact" className="btn inline-block">
            Contact me
          </Link>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default TextImage;
