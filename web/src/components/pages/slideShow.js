import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";

const Slideshow = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: false,
    accessibility: true,
  };

  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  return (
    <div className="flex flex-1 items-center w-full">
      <div className="w-full self-start">
        <Slider {...settings} className="slider-mobile">
          {images.map((image, i) => (
            <Img
              key={i}
              fluid={getFluidGatsbyImage(
                image.asset.id,
                { maxWidth: 1920, maxHeight: 800 },
                sanityConfig
              )}
              alt={image.alt}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
