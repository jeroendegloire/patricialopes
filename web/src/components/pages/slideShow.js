import React from "react";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper/swiper.esm";
import builder from "../../../sanityClient.js";
import effectFade from "swiper/esm/components/effect-fade/effect-fade";
import autoplay from "swiper/esm/components/autoplay/autoplay";
import a11y from "swiper/esm/components/a11y/a11y";
import keyboard from "swiper/esm/components/keyboard/keyboard";
import lazy from "swiper/esm/components/lazy/lazy";

function urlFor(source) {
  return builder.image(source);
}

const Slideshow = ({ images }) => {
  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [lazy],
    direction: "vertical",
    allowTouchMove: false,
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 25,
    },
    breakpoints: {
      768: {
        // Add modules you need
        modules: [
          Navigation,
          Pagination,
          autoplay,
          a11y,
          effectFade,
          keyboard,
          lazy,
        ],
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        speed: 1000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        direction: "horizontal",
        a11y: {
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 3,
        },
        allowTouchMove: true,
      },
    },
  };

  return (
    <div className="flex self-start w-full">
      <ReactIdSwiperCustom {...params} useEffect="fade">
        {images.map((image, i) => (
          <div className="w-full" key={i}>
            <img
              src={image.asset.metadata.lqip}
              data-src={image.asset.metadata.lqip}
              data-srcset={[
                urlFor(image.asset.id)
                  .width(800)
                  .height(334)
                  .quality(85)
                  .auto("format")
                  .url() + "  360w",
                urlFor(image.asset.id)
                  .width(1080)
                  .height(450)
                  .quality(85)
                  .auto("format")
                  .url() + " 1080w",
                urlFor(image.asset.id)
                  .width(2560)
                  .height(1067)
                  .quality(85)
                  .auto("format")
                  .url() + " 2560w",
              ]}
              className="swiper-lazy"
              alt={image.alt}
              loading="lazy"
              width="1920"
              height="800"
            />
          </div>
        ))}
      </ReactIdSwiperCustom>
    </div>
  );
};

export default Slideshow;
