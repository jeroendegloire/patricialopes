import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import { FaAngleLeft } from "react-icons/fa";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import PortableText from "../components/portableText";
import imageUrlBuilder from "@sanity/image-url";
import LightBox from "../components/pages/lightbox";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  useCdn: false,
  withCredentials: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

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
        hotspot {
          x
          y
        }
      }
      fragments {
        asset {
          id
          metadata {
            lqip
            dimensions {
              aspectRatio
            }
          }
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
        alt
      }
      category
      subcategory
      directors
      dops
      production
      linkUrl
      linkText
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
        hotspot {
          x
          y
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

  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (i) => (e) => {
    setShowLightbox(true);
    setSelectedImage(i);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };

  return (
    <Layout>
      <SEO
        keywords={seo?.focus_keyword}
        synonyms={seo?.focus_synonyms}
        image={image?.asset?.url}
        description={seo?.meta_description}
        title={seo?.seo_title}
      />
      <section
        id="cinematography-templete"
        className="bg-white py-6 md:p-10 flex-1"
      >
        <div className="max-w-6xl mx-auto flex items-center flex-wrap relative">
          <Link
            to="/cinematography"
            className="m-0 absolute bottom-0 inline-block left-auto right-2 xl:top-0 xl:-left-6 xl:right-auto"
          >
            <FaAngleLeft size={30} className="inline-block" /> Back
          </Link>

          {images.map((image, i) => (
            <div
              className="mb-4 cinemato-image relative cursor-pointer"
              onClick={handleOpen(i)}
              key={i}
            >
              <div
                aria-hidden="true"
                style={{
                  backgroundImage: `url(${image.asset.metadata.lqip})`,
                  backgroundSize: "cover",
                  paddingTop: `calc(100% / ${image.asset.metadata.dimensions.aspectRatio})`,
                }}
              ></div>
              <img
                src={urlFor(image.asset.id)
                  .width(2400)
                  .quality(100)
                  .format("jpg")
                  .url()}
                alt={image.alt}
                className="absolute inset-0"
              />
            </div>
          ))}
          <div className="font-thin px-6 lg:px-0">
            {data.sanityCinematography.title ? (
              <h1 className="font-normal text-xl uppercase text-base mb-4">
                {data.sanityCinematography.title}
              </h1>
            ) : null}
            {data.sanityCinematography.subcategory == "short_film" ? (
              <div className="uppercase mb-4 underline">Short film</div>
            ) : null}

            {data.sanityCinematography.subcategory == "feature_film" ? (
              <div className="uppercase mb-4 underline">Feature film</div>
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
            {data.sanityCinematography.linkUrl ? (
              <div>
                <Link
                  to={data.sanityCinematography.linkUrl}
                  className="underline hover:no-underline"
                >
                  {data.sanityCinematography.linkText}
                </Link>
                <br />
              </div>
            ) : null}

            {data.sanityCinematography.text ? (
              <div className="mt-4">
                <PortableText blocks={data.sanityCinematography.text[0]} />
              </div>
            ) : null}

            {showLightbox && selectedImage !== null && (
              <LightBox
                images={images}
                handleClose={handleClose}
                handleNextRequest={handleNextRequest}
                handlePrevRequest={handlePrevRequest}
                selectedImage={selectedImage}
              />
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
