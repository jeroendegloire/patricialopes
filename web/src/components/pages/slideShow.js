import React, { useEffect } from "react";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper/swiper.esm";
import { Picture } from "react-responsive-picture";
import builder from "../../../sanityClient.js";
import fallbackImage from "../../images/fallback.png";
import effectFade from "swiper/esm/components/effect-fade/effect-fade";
import autoplay from "swiper/esm/components/autoplay/autoplay";
import a11y from "swiper/esm/components/a11y/a11y";
import keyboard from "swiper/esm/components/keyboard/keyboard";

function urlFor(source) {
  return builder.image(source);
}

const Slideshow = ({ images }) => {
  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [Navigation, Pagination, autoplay, a11y, effectFade, keyboard],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    direction: "vertical",
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    a11y: {
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      768: {
        direction: "horizontal",
      },
    },
  };

  return (
    <div className="flex self-start w-full">
      <ReactIdSwiperCustom {...params} useEffect="fade">
        {images.map((image, i) => (
          <div className="w-full" key={i}>
            <Picture
              sources={[
                {
                  srcSet: urlFor(image.asset.id)
                    .width(1080)
                    .height(450)
                    .quality(100)
                    .auto("format")
                    .url(),
                  media: "(max-width: 420px)",
                  width: "800",
                  height: "333.33",
                },
                {
                  srcSet: urlFor(image.asset.id)
                    .width(1920)
                    .height(800)
                    .quality(100)
                    .auto("format")
                    .url(),
                  width: "1920",
                  height: "800",
                },
              ]}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </ReactIdSwiperCustom>
    </div>
  );
};

export default Slideshow;
