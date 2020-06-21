import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/app.css";
import { graphql } from "gatsby";
import Slideshow from "../components/pages/slideShow";
import HaveSeo from "../components/pages/seo";
import Layout from "../components/layout/layout";
import Text from "../components/pages/text";
import TextImage from "../components/pages/textImage";
import Gird from "../components/pages/gird";
import Video from "../components/pages/video";

export const query = graphql`
  query indexPageTemplateQuery {
    route: sanityPage(slug: { current: { eq: "home" } }) {
      id
      title
      _key
      _rawContent(resolveReferences: { maxDepth: 10 })
      slug {
        current
      }
    }
  }
`;

const Index = ({ data }) => {
  const page = data.sanityPage || data.route;
  const content = (page._rawContent || [])
    .filter((c) => !c.disabled)
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "slideshow":
          el = <Slideshow key={c._key} {...c} />;
          break;
        case "textContent":
          el = <Text key={c._key} {...c} />;
          break;
        case "textWithImage":
          el = <TextImage key={c._key} {...c} />;
          break;
        case "gallery":
          el = <Gird key={c._key} {...c} />;
          break;
        case "videoEmbed":
          el = <Video key={c._key} {...c} />;
          break;

        default:
          el = null;
      }
      return el;
    });

  return (
    <div className>
      <Layout>
        <HaveSeo />
        {content}
      </Layout>
    </div>
  );
};

export default Index;
