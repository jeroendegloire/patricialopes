import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import { FaAngleLeft } from "react-icons/fa";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

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
      client
      directors
      dops
      production
      imdb
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

  const HaveSeo = () => {
    if (seo) {
      return (
        <SEO
          keywords={seo.focus_keyword}
          synonyms={seo.focus_synonyms}
          image={image.asset.url}
          title={seo.seo_title}
          description={seo.meta_description}
        />
      );
    } else {
      return <SEO title={data.sanityCinematography.title} />;
    }
  };

  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <Layout>
      <HaveSeo />
      <section id="cinematography-templete" className="bg-white py-6">
        <div className="max-w-6xl mx-auto flex items-center flex-wrap relative">
          <Link
            to="/cinematography"
            className="xl:absolute xl:top-0 xl:-left-6 mb-4"
          >
            <FaAngleLeft size={30} className="inline-block" /> Back
          </Link>

          {images.map((image) => (
            <div className="mb-4 cinemato-image">
              <Img
                fluid={getFluidGatsbyImage(
                  image.asset.id,
                  { width: 1200, height: 600 },
                  sanityConfig
                )}
                alt={image.alt}
                key={image.asset.id}
              />
            </div>
          ))}
          <div className="font-thin px-4">
            <span className="font-medium">
              {data.sanityCinematography.title}
            </span>
            <br />
            <span>Director(s): </span>
            {directors.map((director) => (
              <span>{director}</span>
            ))}

            <br />
            <span>DOP's: </span>
            {dops.map((dop) => (
              <span> {dop}</span>
            ))}
            <br />
            <span>Production: </span>
            {productions.map((production) => (
              <span>{production}</span>
            ))}
            <br />
            <span>Client: </span>
            <span>{data.sanityCinematography.client}</span>
            <span>imdb</span>
            <br />
            <Link
              to={data.sanityCinematography.imdb}
              className="underline hover:no-underline"
            >
              more info
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
