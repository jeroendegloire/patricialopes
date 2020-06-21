import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

const Contact = ({ background, title, phone, vat, mail }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };
  return (
    <div className="flex flex-1 items-center justify-center relative p-10 w-full">
      <div className="absolute inset-0">
        <Img
          fixed={getFixedGatsbyImage(
            background.asset.id,
            { width: 1920, height: 810 },
            sanityConfig
          )}
        />
      </div>

      <div className="bg-white inline-block p-20 border-2 contact text-center z-10 border-black">
        <h1 className="uppercase mb-8 relative">{title}</h1>
        <div className="my-2">
          <b>Email: </b>
          {mail}
        </div>
        <div className="my-2">
          <b>Phone: </b>
          {phone}
        </div>
        <div className="my-2">
          <b>VAT number: </b>
          {vat}
        </div>
      </div>
    </div>
  );
};

export default Contact;
