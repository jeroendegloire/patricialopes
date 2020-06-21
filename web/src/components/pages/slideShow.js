import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

const Slideshow = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    accessibility: true,
  };

  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div className="">
      <Slider {...settings} className="slider-desktop">
        {images.map((image, i) => (
          <Img
            key={i}
            fixed={getFixedGatsbyImage(
              image.asset.id,
              { width: 1900, height: 800 },
              sanityConfig
            )}
            alt={image.alt}
          />
        ))}
      </Slider>

      <Slider {...settings} className="slider-mobile">
        {images.map((image, i) => (
          <Img
            key={i}
            fluid={getFluidGatsbyImage(
              image.asset.id,
              { maxWidth: 1900, maxHeight: 800 },
              sanityConfig
            )}
            alt={image.alt}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
