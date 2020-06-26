import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import { Link } from "gatsby";
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
    <div className="contact flex flex-1 lg:flex-initial items-center justify-center relative p-5 lg:p-0 w-full contact-wrapper">
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
          <nav className="inline-block self-end mb-10">
            <ul className="flex justify-center">
              <li className="px-2 hover:grow">
                <Link to={instagram}>
                  <FaInstagram size={20} />
                </Link>
              </li>
              <li className="px-2 hover:grow">
                <Link to={imdb}>
                  <FaImdb size={20} />
                </Link>
              </li>
              <li className="px-2 hover:grow">
                <Link to={vimeo}>
                  <FaVimeoV size={20} />
                </Link>
              </li>
              <li className="px-2 hover:grow">
                <Link to={twitter}>
                  <FaTwitter size={20} />
                </Link>
              </li>
              <li className="px-2 hover:grow">
                <Link to={linkedin}>
                  <FaLinkedin size={20} />
                </Link>
              </li>
              <li className="px-2 hover:grow">
                <Link to={facebook}>
                  <FaFacebookSquare size={20} />
                </Link>
              </li>
            </ul>
          </nav>
          <h1 className="uppercase mb-8 relative">{title}</h1>
          <div className="my-2">
            <b>Email: </b>
            <a href="mailto:patriciahclopes@gmail.com" title="Send me">
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
