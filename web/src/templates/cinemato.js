import React, {useState, useEffect} from "react";
import {Link, graphql} from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout/layout";
import {FaAngleLeft} from "react-icons/fa";
import fallbackImage from "../images/fallback.png";
import builder from "../../sanityClient.js";
import ReactPlayer from "react-player/lazy";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/splide.min.css"; // Importing Splide CSS
import {Player} from 'video-react';
import "video-react/dist/video-react.css"; // import css

function urlFor(source) {
  return builder.image(source);
}

export const query = graphql`
  query cinematoTemplateQuery($id: String!) {
    sanityCinematography(id: { eq: $id }) {
      id
      title
      fragments {
        asset {
          id
          metadata {
            lqip
            dimensions {
              aspectRatio
            }
          }
        }
        alt
      }
      video {
        asset {
          url
        }
      }
      awards
      category
      categoryTwo
      subcategory
      directors
      dops
      shoton
      grading
      production
      linkUrl
      linkUrlTwo
      linkTextTwo
      linkUrlThree
      linkTextThree
      seo {
        seo_title
        meta_description
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

const ProjectTemplate = ({data}) => {
  const {
    awards: awards,
    fragments: images,
    directors: directors,
    dops: dops,
    production: productions,
    shoton: shoton,
    grading: grading,
    seo: seo,
    image: image,
    title: title,
    video: video
  } = data.sanityCinematography;

  useEffect(() => {
    // Initialize Splide for the main slider
    const mainSplide = new Splide("#main-slider", {
      type: "fade",
      pagination: false,
      arrows: true,
      autoHeight: true,
      keyboard: 'global',
      cover: true
    }).mount();

    // Initialize Splide for the thumbnail slider
    const thumbSplide = new Splide("#thumbnail-slider", {
      autoHeight: true,
      fixedWidth: '50%',
      gap: 10,
      focus: "center",
      arrows: false,
      pagination: false,
      isNavigation: true,
      keyboard: 'global',
      cover: true
    }).mount();

    // Sync the two sliders
    mainSplide.sync(thumbSplide);
  }, []);

  return (
    <Layout>
      <SEO
        image={image?.asset?.url}
        description={seo?.meta_description}
        title={title}
      />
      <section id="cinematography-template" className="bg-white pb-6 flex-1">
        <div className={'xl:sticky top-0'}>
          <Link
            to="/cinematography"
            className="xl:absolute m-0 ml-4 relative flex  mr-8 py-4 items-center"
          >
            <FaAngleLeft size={30} className="inline-block"/> Back
          </Link>
        </div>
        <div className="flex max-w-5xl mx-auto flex-col md:flex-row">
          <div className="flex items-center flex-wrap relative">
            {data.sanityCinematography.linkUrl && <div className="w-full relative mb-4 video">
              <ReactPlayer
                url={data.sanityCinematography.linkUrl}
                width={"100%"}
                height={"auto"}
                playing={true}
                muted={true}
                controls
              />
            </div>}

            {data.sanityCinematography.video?.asset?.url &&
              <Player src={data.sanityCinematography.video.asset.url} className={'mb-4'} autoPlay muted/>}

            <div
              className={`font-thin px-6 lg:px-0 mb-4 text-sm ${!data.sanityCinematography.video?.asset?.url && !data.sanityCinematography.linkUrl ? 'order-2' : null}`}>
              {data.sanityCinematography.title ? (
                <h1 className="font-normal text-lg uppercase text-base mb-2">
                  {data.sanityCinematography.title}
                </h1>
              ) : null}

              {/*{data.sanityCinematography.subcategory == "documentary" ? (*/}
              {/*  <div className="uppercase mb-4 underline inline-block">Documentary</div>*/}
              {/*) : null}*/}
              {/*{data.sanityCinematography.subcategory == "commercial" ? (*/}
              {/*  <div className="uppercase mb-4 underline inline-block">Commercial</div>*/}
              {/*) : null}*/}
              {/*{data.sanityCinematography.subcategory == "music_video" ? (*/}
              {/*  <div className="uppercase mb-4 underline inline-block">Music video</div>*/}
              {/*) : null}*/}
              {/*{data.sanityCinematography.subcategory == "series" ? (*/}
              {/*  <div className="uppercase mb-4 underline inline-block">TV Series</div>*/}
              {/*) : null}*/}
              {/*{data.sanityCinematography.subcategory == "short_film" ? (*/}
              {/*  <div className="uppercase mb-4 underline inline-block">Short film</div>*/}
              {/*) : null}*/}
              {/*{data.sanityCinematography.subcategory == "feature_film" ? (*/}
              {/*  <div className="uppercase mb-4 underline inline-block">Feature film</div>*/}
              {/*) : null}*/}

              {directors[0] ? (
                <div>
                  <span className="font-normal">DIRECTED BY: </span>
                  {directors
                    .map((director, i) => (
                      <span key={i} className="inline-block">
                      {director}
                    </span>
                    ))
                    .map((director, index) => [index > 0 && ", ", director])}
                  <br/>
                </div>
              ) : null}

              {productions[0] ? (
                <div>
                  <span className="font-normal">PRODUCTION: </span>
                  {productions.map((production, i) => (
                    <span key={i} className="inline-block">
                      {production}
                      {i < productions.length - 1 && <span>,&nbsp;</span>}
                    </span>
                  ))}
                  <br/>
                </div>
              ) : null}

              {dops[0] ? (
                <div>
                  <span className="font-normal">CINEMATOGRAPHY: </span>
                  {dops
                    .map((dop, i) => (
                      <span key={i} className="inline-block">
                      {dop}
                    </span>
                    ))
                    .map((dop, index) => [index > 0 && ", ", dop])}
                  <br/>
                </div>
              ) : null}

              {grading[0] ? (
                <div>
                  <span className="font-normal">GRADING: </span>
                  {grading
                    .map((grading, i) => (
                      <span key={i} className="inline-block">
                      {grading}
                    </span>
                    ))
                    .map((grading, index) => [index > 0 && ", ", grading])}
                  <br/>
                </div>
              ) : null}

              {shoton[0] ? (
                <div>
                  <span className="font-normal">SHOT ON: </span>
                  {shoton
                    .map((shoton, i) => (
                      <span className={'inline-block'} key={i}>
                        {shoton}
                      </span>
                    ))
                    .map((shoton, index) => [index > 0 && ", ", shoton])}
                </div>
              ) : null}

              {awards[0] ? (
                <div>
                  <span className="font-normal">FESTIVALS &amp; AWARDS: </span>
                  {awards
                    .map((awards, i) => (
                      <div key={i}>
                        {awards}
                      </div>
                    ))
                    .map((awards, index) => [index > 0 && ", ", awards])}
                  <br/>
                </div>
              ) : null}

              {data.sanityCinematography.linkUrlTwo ? (
                <div className='mt-2'>
                  <Link
                    to={data.sanityCinematography.linkUrlTwo}
                    className="underline hover:no-underline"
                  >
                    {data.sanityCinematography.linkTextTwo}
                  </Link>
                  <br/>
                </div>
              ) : null}
              {/*{data.sanityCinematography.linkUrl ? (*/}
              {/*  <div className="mt-4">*/}
              {/*    <Link*/}
              {/*      to={data.sanityCinematography.linkUrl}*/}
              {/*      className="underline hover:no-underline"*/}
              {/*    >*/}
              {/*      {data.sanityCinematography.linkText}*/}
              {/*    </Link>*/}
              {/*    <br/>*/}
              {/*  </div>*/}
              {/*) : null}*/}
              {data.sanityCinematography.linkUrlThree ? (
                <div>
                  <Link
                    to={data.sanityCinematography.linkUrlThree}
                    className="underline hover:no-underline"
                  >
                    {data.sanityCinematography.linkTextThree}
                  </Link>
                  <br/>
                </div>
              ) : null}
            </div>

            {/* Main Splide Slider */}
            <div id="main-slider" className="splide w-full">
              <div className="splide__track">
                <ul className="splide__list">
                  {images.map((image, i) => (
                    <li className="splide__slide" key={i}>
                      <img
                        src={fallbackImage}
                        srcSet={[
                          urlFor(image?.asset?.id)
                            .width(1000)
                            .quality(100)
                            .auto("format")
                            .url() + " 768w,",
                          urlFor(image?.asset?.id)
                            .width(2000)
                            .quality(100)
                            .auto("format")
                            .url() + " 1536w,",
                        ]}
                        alt={image.alt}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Thumbnail Splide Slider */}
            <div id="thumbnail-slider" className="splide mt-4 w-full">
              <div className="splide__track">
                <ul className="splide__list">
                  {images.map((image, i) => (
                    <li className="splide__slide" key={i}>
                      <img
                        src={urlFor(image?.asset?.id)
                          .width(1000)
                          .quality(100)
                          .auto("format")
                          .url()}
                        className="thumbnail"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
