import React, { Component } from "react";
import Slider from "react-slick";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import imageUrlBuilder from "@sanity/image-url";

const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "l2xxtj60",
  dataset: "production",
  useCdn: true,
  withCredentials: true,
});

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

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
        <Slider
          {...settings}
          className="slider-mobile"
          style={{
            backgroundImage: `url(${images[0].asset.metadata.lqip})`,
            backgroundSize: "cover",
          }}
        >
          {images.map((image, i) => (
            <img
              key={i}
              src={urlFor(image.asset.id)
                .width(1920)
                .height(800)
                .quality(100)
                .format("jpg")
                .url()}
              alt={image.alt}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
