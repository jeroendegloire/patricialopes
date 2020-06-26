import React from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

const Video = ({ url, posterImage }) => {
  return (
    <div className="video w-full flex items-center relative">
      <ReactPlayer
        url={url}
        width="100%"
        height="auto"
        playing
        playIcon={
          <button>
            <span className="sr-only">Play</span>
            <FaPlay size="60" color="white" />
          </button>
        }
        light={posterImage.asset.url + "?h=810"}
      />
    </div>
  );
};

export default Video;
