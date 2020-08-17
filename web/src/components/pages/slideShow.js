import React from "react";
import Slider from "react-slick";
import builder from "../../../sanityClient.js";
import fallbackImage from "../../images/fallback.png";

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
    lazyLoad: true,
    mobileFirst: true,
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
              width="800"
              height="333"
              alt={image.alt}
            />
          ))}
        </div>
        <Slider {...settings} className="slider-desktop">
          {images.map((image, i) => (
            <img
              srcSet={
                urlFor(image.asset.id)
                  .width(1536)
                  .height(640)
                  .quality(100)
                  .auto("format")
                  .url() +
                ` 1536w,` +
                urlFor(image.asset.id)
                  .width(1920)
                  .height(800)
                  .quality(100)
                  .auto("format")
                  .url() +
                ` 1920w`
              }
              src={urlFor(image.asset.id)
                .width(800)
                .height(333.33)
                .quality(100)
                .auto("format")
                .url()}
              loading="lazy"
              width="800"
              height="333.33"
              alt={image.alt}
              alt={image.alt}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slideshow;
