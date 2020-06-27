import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import { FaAngleLeft } from "react-icons/fa";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import PortableText from "../components/portableText";

export const query = graphql`
  query cinematoTemplateQuery($id: String!) {
    sanityCinematography(id: { eq: $id }) {
      id
      title
      featuredImage {
        asset {
          url
        }
        alt
      }
      fragments {
        asset {
          id
        }
        alt
      }
      category
      directors
      dops
      production
      imdb
      text {
        _key
        _type
        style
        list
      }
      seo {
        seo_title
        meta_description
        focus_synonyms
        focus_keyword
      }
      image {
        asset {
          url
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const {
    fragments: images,
    directors: directors,
    dops: dops,
    production: productions,
    seo: seo,
    image: image,
  } = data.sanityCinematography;

  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };
  return (
    <Layout>
      <SEO
        keywords={seo.focus_keyword}
        synonyms={seo.focus_synonyms}
        //          image={page.image.asset.url}
        title={seo.seo_title}
        description={seo.meta_description}
      />
      <section id="cinematography-templete" className="bg-white py-6 flex-1">
        <div className="max-w-6xl mx-auto flex items-center flex-wrap relative">
          <Link
            to="/cinematography"
            className="m-0 absolute bottom-0 inline-block left-auto right-2 xl:top-0 xl:-left-6 xl:right-auto"
          >
            <FaAngleLeft size={30} className="inline-block" /> Back
          </Link>

          {images.map((image, i) => (
            <div className="mb-4 cinemato-image">
              <Img
                fluid={getFluidGatsbyImage(
                  image.asset.id,
                  { maxWidth: 2000 },
                  sanityConfig
                )}
                alt={image.alt}
                key={i}
              />
            </div>
          ))}
          <div className="font-thin px-6">
            {data.sanityCinematography.title ? (
              <div>
                <span className="font-medium uppercase">
                  {data.sanityCinematography.title}
                </span>
                <br />
              </div>
            ) : null}

            {directors[0] ? (
              <div>
                <span>DIRECTED BY </span>
                {directors.map((director) => (
                  <span>{director}</span>
                ))}
                <br />
              </div>
            ) : null}

            {productions[0] ? (
              <div>
                <span>PRODUCTION: </span>
                {productions.map((production) => (
                  <span>{production}</span>
                ))}
                <br />
              </div>
            ) : null}

            {dops[0] ? (
              <div>
                <span>DIRECTOR OF PHOTOGRAPHY: </span>
                {dops.map((dop) => (
                  <span> {dop}</span>
                ))}
                <br />
              </div>
            ) : null}
            {data.sanityCinematography.imdb ? (
              <div>
                <Link
                  to={data.sanityCinematography.imdb}
                  className="underline hover:no-underline"
                >
                  MORE INFO
                </Link>
                <br />
              </div>
            ) : null}

            {console.log(data.sanityCinematography.text)}
            {data.sanityCinematography.text ? (
              <div className="">
                {data.sanityCinematography.text.map((singleText) => (
                  <PortableText blocks={singleText} />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
