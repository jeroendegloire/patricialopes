import React from "react";
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
    mobileFirst: true,
    infinite: true,
    speed: 500,
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
          speed: 500,
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
          mobileFirst: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-1 items-center w-full">
      <div className="w-full self-start">
        <div className="slider-mobile">
          {images.map((image, i) => (
            <img
              src={urlFor(image.asset.id)
                .width(800)
                .height(333)
                .quality(100)
                .auto("format")
                .url()}
              loading="lazy"
              alt={image.alt}
            />
          ))}
        </div>
        <Slider {...settings} className="slider-desktop">
          {images.map((image, i) => (
            <picture className={"w-full"} key={i}>
              <div
                aria-hidden="true"
                style={{
                  paddingTop: `calc(100% / ${image.asset.metadata.dimensions.aspectRatio})`,
                }}
              ></div>
              <source
                srcSet={urlFor(image.asset.id)
                  .width(1536)
                  .height(640)
                  .quality(100)
                  .auto("format")
                  .url()}
                media="(min-width:768px)"
              />
              <source
                srcSet={urlFor(image.asset.id)
                  .width(1920)
                  .height(800)
                  .quality(100)
                  .auto("format")
                  .url()}
                media="(min-width:1536px)"
              />
              <img
                src={fallbackImage}
                className="absolute inset-0"
                loading="eager"
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
