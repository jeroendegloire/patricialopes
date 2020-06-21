import React from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

const Video = ({ url, posterImage }) => {
  return (
    <div className="mx-auto flex-1 flex items-center flex-wrap">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        playing
        playIcon={
          <button>
            <span className="sr-only">Play</span>
            <FaPlay size="60" color="white" />
          </button>
        }
        light={posterImage.asset.url + "?h=810"}
        config={{
          vimeo: {
            playerVars: { width: 1920 },
          },
        }}
      />
    </div>
  );
};

export default Video;
