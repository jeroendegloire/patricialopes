import React, {useEffect, useRef} from "react";
import {ControlBar, Player} from "video-react";
import "video-react/dist/video-react.css";
import builder from "../../../sanityClient.js";
import fallbackImage from "../../images/fallback.png";

function urlFor(source) {
  return builder.image(source);
}

const MediaGallery = ({ media }) => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      threshold: 0.8, // Trigger when 50% of the video is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play(); // Start playing when the video enters the viewport
        } else {
          video.pause(); // Pause when the video leaves the viewport
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each video element
    videoRefs.current.forEach((video) => {
      if (video) {
        observer.observe(video);
      }
    });

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [media]);

  return media ? (
    <></>
    // <div className="flex w-full md:hidden">
    //   <div className="w-full">
    //     {media.map((image, i) => (
    //       <div className="w-full relative" key={i}>
    //         {image._type === "localVideo" && (
    //           <div>
    //             <Player
    //               ref={(player) => {
    //                 if (player) {
    //                    // Access the <video> element directly
    //                   videoRefs.current[i] = player.video.video;
    //                 }
    //               }}
    //               src={image.asset.url}
    //               muted
    //               loop
    //             >
    //               <ControlBar disableCompletely={true} />
    //             </Player>
    //           </div>
    //         )}
    //         {image._type === "mainImage" && (
    //           <img
    //             src={fallbackImage}
    //             srcSet={[
    //               urlFor(image?.asset?.id)
    //                 .width(324)
    //                 .height(133)
    //                 .quality(85)
    //                 .auto("format")
    //                 .crop("focalpoint")
    //                 .fit("crop")
    //                 .focalPoint(
    //                   image?.hotspot?.x ? image?.hotspot?.x : "0.5",
    //                   image?.hotspot?.y ? image?.hotspot?.y : "0.5"
    //                 )
    //                 .url() + " 324w",
    //               urlFor(image?.asset?.id)
    //                 .width(648)
    //                 .height(270)
    //                 .quality(85)
    //                 .auto("format")
    //                 .crop("focalpoint")
    //                 .fit("crop")
    //                 .focalPoint(
    //                   image?.hotspot?.x ? image?.hotspot?.x : "0.5",
    //                   image?.hotspot?.y ? image?.hotspot?.y : "0.5"
    //                 )
    //                 .url() + " 648w",
    //               urlFor(image?.asset?.id)
    //                 .width(1020)
    //                 .height(425)
    //                 .quality(85)
    //                 .auto("format")
    //                 .crop("focalpoint")
    //                 .fit("crop")
    //                 .focalPoint(
    //                   image?.hotspot?.x ? image?.hotspot?.x : "0.5",
    //                   image?.hotspot?.y ? image?.hotspot?.y : "0.5"
    //                 )
    //                 .url() + " 1020w",
    //               urlFor(image?.asset?.id)
    //                 .width(1920)
    //                 .height(800)
    //                 .quality(85)
    //                 .auto("format")
    //                 .crop("focalpoint")
    //                 .fit("crop")
    //                 .focalPoint(
    //                   image?.hotspot?.x ? image?.hotspot?.x : "0.5",
    //                   image?.hotspot?.y ? image?.hotspot?.y : "0.5"
    //                 )
    //                 .url() + " 1920w",
    //             ]}
    //             alt={image?.alt}
    //             loading="lazy"
    //             sizes="100vw"
    //             width="1920"
    //             height="800"
    //           />
    //         )}
    //         <a href={`cinematography/${image?.cinematoReference?.slug?.current}`} className={'absolute inset-0 z-9'}><span className="sr-only">Go to {image?.cinematoReference?.title}</span></a>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  ) : null;
};

export default MediaGallery;
