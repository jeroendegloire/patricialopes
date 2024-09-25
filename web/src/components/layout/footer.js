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
          <footer className={'flex flex-wrap justify-between px-8 py-4 mx-auto w-full'}>
            <div className={'mt-auto'}>© 2024 Patricia Lopes</div>
            <nav className="self-end mt-4" aria-label="Social media menu">
              <ul className="flex justify-center -mx-2">
                <li className="px-2 hover:grow">
                  <a
                    href={instagram}
                    title="Instagram profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram size={20} />
                  </a>
                </li>
                <li className="px-2 hover:grow">
                  <a
                    href={imdb}
                    title="IMDB profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaImdb size={20} />
                  </a>
                </li>
                <li className="px-2 hover:grow">
                  <a
                    href={vimeo}
                    title="Vimeo profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaVimeoV size={20} />
                  </a>
                </li>
                {/* <li className="px-2 hover:grow">
                <Link to={twitter}>
                  <FaTwitter size={20} />
                </Link>
              </li> */}
                <li className="px-2 hover:grow">
                  <a
                    href={linkedin}
                    title="LinkedIn profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin size={20} />
                  </a>
                </li>
                <li className="px-2 hover:grow">
                  <a
                    href={facebook}
                    title="Facebook profile"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookSquare size={20} />
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        );
      }}
    />
  );
}

export default Footer;
