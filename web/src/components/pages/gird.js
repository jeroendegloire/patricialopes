import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import LightBox from "./lightbox";
import PropTypes from "prop-types";
import Isotope from "isotope-layout/js/isotope";
import LazyLoad from "vanilla-lazyload";
import fallbackImage from "../../images/fallback.png";

import imageUrlBuilder from "@sanity/image-url";

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

const Gird = ({ items }) => {
  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

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

  useEffect(() => {
    var elem = document.querySelector(".grid");
    var iso = new Isotope(elem, {
      layoutMode: "masonry",
      percentPosition: true,
    });
  }, []);

  useEffect(() => {
    let lazy = new LazyLoad({
      elements_selector: ".lazy",
      class_loaded: "is-loaded",
    });

    return () => {
      lazy.destroy();
    };
  }, []);

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
        e.stopPropagation();
      }
    });
  });

  return (
    <div className="flex items-center flex-wrap flex-1 -mb-4 masonry-wrapper">
      <div className="flex flex-1 grid">
        {items.map((item, i) => (
          <div
            onClick={handleOpen(i)}
            className={"item-grid " + item.ratio}
            key={i}
          >
            {item.ratio == "landscape" && (
              <figure className={"gatsby-image-wrapper"}>
                <picture className={"w-full"}>
                  <div
                    aria-hidden="true"
                    style={{
                      paddingTop: `calc(100% / 2 * 1)`,
                      backgroundImage: `url(${item?.image?.asset?.metadata?.lqip})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <source
                    type="image/webp"
                    data-srcset={[
                      urlFor(item?.image?.asset?.id)
                        .size(800, 400)
                        .fit("crop")
                        .crop("focalpoint")
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .quality(100)
                        .format("webp")
                        .url() + " 768w,",
                      urlFor(item?.image?.asset?.id)
                        .size(1200, 600)
                        .quality(100)
                        .crop("focalpoint")
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .fit("crop")
                        .format("webp")
                        .url() + " 1536w,",
                    ]}
                    data-sizes="(min-width: 1536px) 100vw, 
                  (min-width: 1366px) 100vw,
                  100vw"
                    loading="lazy"
                  />
                  <img
                    src={fallbackImage}
                    data-srcset={[
                      urlFor(item?.image?.asset?.id)
                        .size(800, 400)
                        .quality(100)
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .crop("focalpoint")
                        .fit("crop")
                        .format("jpg")
                        .url() + " 768w,",
                      urlFor(item?.image?.asset?.id)
                        .size(1200, 600)
                        .quality(100)
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .crop("focalpoint")
                        .fit("crop")
                        .format("jpg")
                        .url() + " 1536w,",
                    ]}
                    alt={item?.image?.alt}
                    className="lazy absolute inset-0"
                    loading="lazy"
                  />
                </picture>
              </figure>
            )}
            {item.ratio == "square" && (
              <figure className={"gatsby-image-wrapper"} style={{}}>
                <picture className={"w-full"}>
                  <div
                    aria-hidden="true"
                    style={{
                      paddingTop: `100%`,
                      backgroundImage: `url(${item?.image?.asset?.metadata?.lqip})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <source
                    type="image/webp"
                    data-srcset={[
                      urlFor(item?.image?.asset?.id)
                        .size(800, 800)
                        .fit("crop")
                        .crop("focalpoint")
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .quality(100)
                        .format("webp")
                        .url() + " 768w,",
                      urlFor(item?.image?.asset?.id)
                        .size(1000, 1000)
                        .quality(100)
                        .crop("focalpoint")
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .fit("crop")
                        .format("webp")
                        .url() + " 1536w,",
                    ]}
                    data-sizes="(min-width: 1536px) 100vw, 
                  (min-width: 1366px) 100vw,
                  100vw"
                    loading="lazy"
                  />
                  <img
                    src={item?.image?.asset?.metadata?.lqip}
                    data-srcset={[
                      urlFor(item?.image?.asset?.id)
                        .size(800, 800)
                        .quality(100)
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .crop("focalpoint")
                        .fit("crop")
                        .format("jpg")
                        .url() + " 768w,",
                      urlFor(item?.image?.asset?.id)
                        .size(1000, 1000)
                        .quality(100)
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .crop("focalpoint")
                        .fit("crop")
                        .format("jpg")
                        .url() + " 1536w,",
                    ]}
                    alt={item?.image?.alt}
                    className="lazy absolute inset-0"
                    loading="lazy"
                  />
                </picture>
              </figure>
            )}
            {item.ratio == "portrait" && (
              <figure className={"gatsby-image-wrapper"} style={{}}>
                <picture className={"w-full"}>
                  <div
                    aria-hidden="true"
                    style={{
                      paddingTop: `200%`,
                      backgroundImage: `url(${item?.image?.asset?.metadata?.lqip})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <source
                    type="image/webp"
                    data-srcset={[
                      urlFor(item?.image?.asset?.id)
                        .size(400, 800)
                        .fit("crop")
                        .crop("focalpoint")
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .quality(100)
                        .format("webp")
                        .url() + " 768w,",
                      urlFor(item?.image?.asset?.id)
                        .size(500, 1000)
                        .quality(100)
                        .crop("focalpoint")
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .fit("crop")
                        .format("webp")
                        .url() + " 1536w,",
                    ]}
                    data-sizes="(min-width: 1536px) 100vw, 
                  (min-width: 1366px) 100vw,
                  100vw"
                    loading="lazy"
                  />
                  <img
                    src={item?.image?.asset?.metadata?.lqip}
                    data-srcset={[
                      urlFor(item?.image?.asset?.id)
                        .size(400, 800)
                        .quality(100)
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .crop("focalpoint")
                        .fit("crop")
                        .format("jpg")
                        .url() + " 768w,",
                      urlFor(item?.image?.asset?.id)
                        .size(500, 800)
                        .quality(100)
                        .focalPoint(
                          item?.image?.hotspot?.x,
                          item?.image?.hotspot?.y
                        )
                        .crop("focalpoint")
                        .fit("crop")
                        .format("jpg")
                        .url() + " 1536w,",
                    ]}
                    alt={item?.image?.alt}
                    className="lazy absolute inset-0"
                    loading="lazy"
                  />
                </picture>
              </figure>
            )}
          </div>
        ))}
      </div>
      {showLightbox && selectedImage !== null && (
        <LightBox
          images={items}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

Gird.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array,
};

export default Gird;
