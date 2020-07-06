import React from "react";
import ReactPlayer from "react-player/lazy";
import { FaPlay } from "react-icons/fa";

const Video = ({ url, posterImage }) => {
  return (
    <div className="flex video w-full relative">
      <ReactPlayer
        url={url}
        width="100%"
        height="auto"
        playing
        controls
        playIcon={
          <button>
            <span className="sr-only">Play</span>
            <FaPlay size="45" color="white" />
          </button>
        }
        light={posterImage.asset.url + "?h=810"}
        config={{
          vimeo: {
            playerVars: { width: 1920, height: 800 },
          },
        }}
      />
    </div>
  );
};

export default Video;
