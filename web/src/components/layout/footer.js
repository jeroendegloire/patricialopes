import React from "react";
import { Link, StaticQuery } from "gatsby";
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
          }
        }
      `}
      render={(data) => {
        const {
          twitter,
          instagram,
          linkedin,
          imdb,
          facebook,
        } = data.sanitySiteSettings;
        return (
          <nav className="inline-block self-end">
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
                <Link to={facebook}>
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
        );
      }}
    />
  );
}

export default Footer;
