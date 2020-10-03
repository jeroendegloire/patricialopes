import React from "react";
import { graphql } from "gatsby";
const Slideshow = lazy(() => import("../components/pages/slideShow"))
const Layout = lazy(() => import("../components/layout/layout"))
const Accordion = lazy(() => import("../components/pages/accordion"))
const Contact = lazy(() => import("../components/pages/contact"))
const Text = lazy(() => import("../components/pages/text"))
const TextImage = lazy(() => import("../components/pages/textImage"))
const Grid = lazy(() => import("../components/pages/grid"))
const Video = lazy(() => import("../components/pages/video"))
const SEO = lazy(() => import("../components/seo"))
const FilterableGrid = lazy(() => import("../components/pages/photoGrid"))
const CinematoList = lazy(() => import("../components/pages/cinematoList"))

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityPage(id: { eq: $id }) {
      id
      title
      _key
      _rawContent(resolveReferences: { maxDepth: 10 })
      image {
        alt
        asset {
          id
          url
        }
      }
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
  const title = page.title;

  const theme = slug == "showreel" ? "dark-theme" : "light-theme";
  const fixed = slug == "contact" ? "fixed" : "";

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
          el = <Grid key={c._key} {...c} />;
          break;
        case "videoEmbed":
          el = <Video key={c._key} {...c} />;
          break;
        case "contact":
          el = <Contact key={c._key} {...c} />;
          break;
        case "accordion":
          el = <Accordion key={c._key} {...c} />;
          break;
        case "photoGrid":
          el = <FilterableGrid key={c._key} {...c} />;
          break;
        case "cinematoList":
          el = <CinematoList key={c._key} {...c} />;
          break;

        default:
          el = null;
      }
      return el;
    });

  return (
    <div className={"w-full " + theme + " " + fixed}>
      <Layout>
        <SEO
          keywords={seo?.focus_keyword}
          synonyms={seo?.focus_synonyms}
          image={page?.image?.asset?.url}
          description={seo?.meta_description}
          title={seo?.seo_title}
        />

        <article className="flex-1 flex ">
          <h1 className="sr-only">{title}</h1>
          <div className="flex-1 flex flex-col">{content}</div>
        </article>
      </Layout>
    </div>
  );
};

export default PagesTemplate;
