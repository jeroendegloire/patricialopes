import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import SvgComponent from "../logo";

function Logo() {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };
  return (
    <StaticQuery
      query={graphql`
        query LogoQuery {
          sanitySiteSettings {
            id
          }
        }
      `}
      render={(data) => {
        return (
          <Link className="logo" to="/" title="Home">
            <SvgComponent />
          </Link>
        );
      }}
    />
  );
}

export default Logo;
