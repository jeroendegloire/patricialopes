import React, { useState, useRef } from "react";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import { FaPlay } from "react-icons/fa";

const Video = ({ localVideo, url, posterImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  if (typeof window !== 'undefined') {
    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  }

  return url && posterImage ? (
    <div className="w-full relative mx-auto cursor-pointer" style={{ maxWidth: "1800px" }} onClick={handlePlay}>
      <Player
        ref={playerRef}
        src={localVideo?.asset.url}
        poster={posterImage?.asset.url}
        className="w-full h-auto"
        autoPlay={false}
        controls
      />

      {!isPlaying && (
        <div className={'absolute bottom-4 md:bottom-8 z-9 inset-0 flex justify-center'} style={{'maxHeight': '810px'}}>
          <button title='Play' className="bg-transparent border-none outline-none" onClick={handlePlay}>
            <FaPlay size="45" color="white" />
          </button>
        </div>
      )}
    </div>
  ) : null;
};

export default Video;
