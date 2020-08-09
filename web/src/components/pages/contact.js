import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import { Link } from "gatsby";
import Footer from "../layout/footer";

import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaImdb,
  FaLinkedin,
  FaVimeoV,
} from "react-icons/fa";

const Contact = ({
  background,
  title,
  phone,
  vat,
  mail,
  instagram,
  imdb,
  vimeo,
  facebook,
  linkedin,
  twitter,
}) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };
  return (
    <div className="contact flex flex-1 lg:flex-initial items-center justify-center relative p-5 md:p-0 w-full contact-wrapper">
      <div>
        <div className="absolute inset-0">
          <Img
            fluid={getFluidGatsbyImage(
              background.asset.id,
              { width: 1920, height: 810 },
              sanityConfig
            )}
          />
        </div>

        <div className="bg-white inline-block p-10 md:p-20 border contact text-center z-10 border-black md:px-32 relative">
          <div className="mb-10 -mt-10">
            <Footer />
          </div>
          <h1 className="uppercase mb-8 relative">{title}</h1>
          <div className="my-2">
            <b>Email: </b>
            <a href="mailto:hello@patricialopes.be" title="Send me">
              {mail}
            </a>
          </div>
          <div className="my-2">
            <b>Phone: </b>
            <a href="tel:0032491204171" title="Call me">
              {phone}
            </a>
          </div>
          <div className="my-2">
            <b>VAT number: </b>
            {vat}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
