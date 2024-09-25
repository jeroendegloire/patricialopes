import React from "react";
import ReactIdSwiperCustom from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation } from "swiper/swiper.esm";
import builder from "../../../sanityClient.js";
import effectFade from "swiper/esm/components/effect-fade/effect-fade";
import autoplay from "swiper/esm/components/autoplay/autoplay";
import a11y from "swiper/esm/components/a11y/a11y";
import keyboard from "swiper/esm/components/keyboard/keyboard";
import lazy from "swiper/esm/components/lazy/lazy";
import "swiper/swiper-bundle.css";
import fallbackImage from "../../images/fallback.png";

function urlFor(source) {
  return builder.image(source);
}

const Slideshow = ({ images }) => {
  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [Navigation, autoplay, a11y, effectFade, keyboard, lazy],
    direction: "vertical",
    allowTouchMove: false,
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
      loadPrevNextAmount: 25,
    },
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
        lazy: {
          loadPrevNext: true,
          loadPrevNextAmount: 3,
        },
        allowTouchMove: true,
      },
    },
  };

  return images ? (
    <div className="flex self-start w-full">
      <ReactIdSwiperCustom {...params}>
        {images.map((image, i) => (
          <div className="w-full" key={i}>
            {image._type === 'localVideo' && <Player src={image.asset.url} autoPlay muted loop><ControlBar disableCompletely={true} /></Player>}
            {image._type === 'mainImage' && (<><img
              src={fallbackImage}
              data-srcset={[
                urlFor(image?.asset?.id)
                  .width(324)
                  .height(133)
                  .quality(85)
                  .auto("format")
                  .crop("focalpoint")
                  .fit('crop')
                  .focalPoint(image?.hotspot?.x ? image?.hotspot?.x : '0.5', image?.hotspot?.y ? image?.hotspot?.y : '0.5')
                  .url() + " 324w",
                urlFor(image?.asset?.id)
                  .width(648)
                  .height(270)
                  .quality(85)
                  .auto("format")
                  .crop("focalpoint")
                  .fit('crop')
                  .focalPoint(image?.hotspot?.x ? image?.hotspot?.x : '0.5', image?.hotspot?.y ? image?.hotspot?.y : '0.5')
                  .url() + " 648w",
                urlFor(image?.asset?.id)
                  .width(1020)
                  .height(425)
                  .quality(85)
                  .auto("format")
                  .crop("focalpoint")
                  .fit('crop')
                  .focalPoint(image?.hotspot?.x ? image?.hotspot?.x : '0.5', image?.hotspot?.y ? image?.hotspot?.y : '0.5')
                  .url() + " 1020w",
                urlFor(image?.asset?.id)
                  .width(1920)
                  .height(800)
                  .quality(85)
                  .auto("format")
                  .crop("focalpoint")
                  .fit('crop')
                  .focalPoint(image?.hotspot?.x ? image?.hotspot?.x : '0.5', image?.hotspot?.y ? image?.hotspot?.y : '0.5')
                  .url() + " 1920w",
              ]}
              className="swiper-lazy"
              alt={image?.alt}
              loading="lazy"
              sizes="100vw"
              width="1920"
              height="800"
            />
            <div className={'absolute bottom-0 left-0 right-0 text-white px-16 pb-8 lg:pb-16 hidden lg:block lg:pb-24 slide__inner mx-auto'}>
              <span className={''}>{image?.category}</span>
              <h2>{image.title}</h2>
              <h3 className={'m-0'}>{image.subtitle}</h3>
            </div>

              <a href={`cinematography/${image?.cinematoReference?.slug?.current}`} className={'absolute inset-0 z-1'}>
                <span className="sr-only">Go to {image?.cinematoReference?.title}</span>
              </a>
            </>)}
          </div>
        ))}
      </ReactIdSwiperCustom>
    </div>
  ) : null;
};

export default Slideshow;
