import React from "react";
import PortableText from "../portableText";
import { Link } from "gatsby";
import Footer from "../layout/footer";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  //token: "myToken",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

const TextImage = ({ image, text }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  const x = image.hotspot ? image.hotspot.x : "0.5";
  const y = image.hotspot ? image.hotspot.y : "0.5";

  return (
    <div className="flex flex-wrap flex-col w-full">
      <div className="w-full">
        <figure className="gatsby-image-wrapper">
          <div
            aria-hidden="true"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(${image.asset.metadata.lqip})`,
              paddingTop: `31.25%`,
            }}
          ></div>
          <img
            src={urlFor(image.asset.id)
              .size(1920, 600)
              .fit("crop")
              .crop("focalpoint")
              .focalPoint(x, y)
              .format("webp")
              .quality(100)
              .url()}
            className={"absolute inset-0"}
            loading="lazy"
          />
        </figure>
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
