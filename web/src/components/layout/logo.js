import React from "react";
import { Link, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

function Logo() {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };
  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
          sanitySiteSettings {
            logo {
              alt
              asset {
                id
              }
            }
          }
        }
      `}
      render={(data) => {
        const { logo } = data.sanitySiteSettings;
        return (
          <Link className="sm:pt-3 sm:pl-3 md:pt-0 md:pl-0 logo" to="/">
            <Img
              fluid={getFluidGatsbyImage(logo.asset.id, {}, sanityConfig)}
              alt={logo.alt}
            />
          </Link>
        );
      }}
    />
  );
}

export default Logo;
