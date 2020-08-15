import React, { useEffect } from "react";
import Slider from "react-slick";
import imageUrlBuilder from "@sanity/image-url";
import fallbackImage from "../../images/fallback.png";
import { previewClient, productionClient } from "../../../sanityClient.js";

const builder =
  process.env.NODE_ENV == "development"
    ? imageUrlBuilder(previewClient)
    : imageUrlBuilder(productionClient);

function urlFor(source) {
  return builder.image(source);
}

const Slideshow = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: false,
    accessibility: true,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          infinite: true,
          speed: 1000,
          autoplaySpeed: 3000,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          autoplay: true,
          pauseOnFocus: false,
          pauseOnHover: false,
          dots: false,
          accessibility: true,
          lazyLoad: false,
        },
      },
    ],
  };

  return (
    <div className="flex flex-1 items-center w-full">
      <div className="w-full self-start">
        <Slider {...settings} className="slider-mobile">
          {images.map((image, i) => (
            <picture className={"w-full"} key={i}>
              <div
                aria-hidden="true"
                style={{
                  paddingTop: `calc(100% / ${image.asset.metadata.dimensions.aspectRatio})`,
                }}
              ></div>
              <source
                type="image/webp"
                srcSet={[
                  urlFor(image.asset.id)
                    .width(800)
                    .height(333)
                    .quality(100)
                    .format("webp")
                    .url() + " 768w,",
                  urlFor(image.asset.id)
                    .width(1536)
                    .height(640)
                    .quality(100)
                    .format("webp")
                    .url() + " 1536w,",
                  urlFor(image.asset.id)
                    .width(1920)
                    .height(800)
                    .quality(100)
                    .format("webp")
                    .url() + " 1633w",
                ]}
                sizes="(min-width: 1536px) 100vw, 
                  (min-width: 1366px) 100vw,
                  100vw"
              />
              <img
                src={fallbackImage}
                srcSet={[
                  urlFor(image.asset.id)
                    .width(800)
                    .height(333)
                    .quality(90)
                    .format("jpg")
                    .url() + " 768w,",
                  urlFor(image.asset.id)
                    .width(1536)
                    .height(640)
                    .quality(90)
                    .format("jpg")
                    .url() + " 1536w,",
                  urlFor(image.asset.id)
                    .width(1920)
                    .height(800)
                    .quality(90)
                    .format("jpg")
                    .url() + " 1633w",
                ]}
                className="absolute inset-0"
                loading="lazy"
                alt={image.alt}
              />
            </picture>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
