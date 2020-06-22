import React from "react";
import { graphql } from "gatsby";
import Slideshow from "../components/pages/slideShow";
import HaveSeo from "../components/pages/seo";
import Layout from "../components/layout/layout";
import Contact from "../components/pages/contact";
import Text from "../components/pages/text";
import TextImage from "../components/pages/textImage";
import Gird from "../components/pages/gird";
import Video from "../components/pages/video";
import SEO from "../components/seo";

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityPage(id: { eq: $id }) {
      id
      title
      _key
      _rawContent(resolveReferences: { maxDepth: 10 })
      slug {
        current
      }

      seo {
        focus_keyword
        seo_title
        meta_description
        focus_synonyms
      }
    }
  }
`;

const PagesTemplate = ({ data }) => {
  const page = data.sanityPage || data.route;
  const slug = page.slug.current;
  const seo = page.seo;

  const theme = slug == "showreel" ? "dark-theme" : "light-theme";

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
        case "contact":
          el = <Contact key={c._key} {...c} />;
          break;

        default:
          el = null;
      }
      return el;
    });

  return (
    <div className={theme}>
      <Layout>
        <SEO
          keywords={seo.focus_keyword}
          synonyms={seo.focus_synonyms}
          //          image={page.image.asset.url}
          title={seo.seo_title}
          description={seo.meta_description}
        />
        <div className="w-full flex-1 flex">{content}</div>
      </Layout>
    </div>
  );
};

export default PagesTemplate;
