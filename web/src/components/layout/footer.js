import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaImdb,
  FaLinkedin,
  FaVimeoV,
} from "react-icons/fa";

function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query FooterQuery {
          sanitySiteSettings {
            twitter
            instagram
            facebook
            linkedin
            imdb
            vimeo
          }
        }
      `}
      render={(data) => {
        const {
          instagram,
          linkedin,
          imdb,
          facebook,
          vimeo,
          twitter,
        } = data.sanitySiteSettings;
        return (
          <nav className="self-end mt-10">
            <ul className="flex justify-center">
              <li className="px-2 hover:grow">
                <a href={instagram} target="_blank">
                  <FaInstagram size={20} />
                </a>
              </li>
              <li className="px-2 hover:grow">
                <a href={imdb} target="_blank">
                  <FaImdb size={20} />
                </a>
              </li>
              <li className="px-2 hover:grow">
                <a href={vimeo} target="_blank">
                  <FaVimeoV size={20} />
                </a>
              </li>
              {/* <li className="px-2 hover:grow">
                <Link to={twitter}>
                  <FaTwitter size={20} />
                </Link>
              </li> */}
              <li className="px-2 hover:grow">
                <a href={linkedin} target="_blank">
                  <FaLinkedin size={20} />
                </a>
              </li>
              <li className="px-2 hover:grow">
                <a href={facebook} target="_blank">
                  <FaFacebookSquare size={20} />
                </a>
              </li>
            </ul>
          </nav>
        );
      }}
    />
  );
}

export default Footer;
