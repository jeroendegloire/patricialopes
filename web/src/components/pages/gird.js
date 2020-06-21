// import React from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import LightBox from "./lightbox";
import PropTypes from "prop-types";

// const Gird = ({ images }) => {
//   const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

//   return (
//     <div className="mx-auto flex items-center flex-wrap rounded">
//       <div class="">
//         {images.map((image) => (
//           <div class="">
//             <Img
//               fluid={getFluidGatsbyImage(
//                 image.asset.id,
//                 { maxWidth: 1000, maxHeight: 1000 },
//                 sanityConfig
//               )}
//               alt={image.alt}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gird;

import React, { useState } from "react";
import Masonry from "react-masonry-css";

const Gird = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (i) => (e) => {
    setShowLightbox(true);
    setSelectedImage(i);
  };
  const handleClose = () => {
    setShowLightbox(false);
    setSelectedImage(null);
  };
  const handlePrevRequest = (i, length) => (e) => {
    setSelectedImage((i - 1 + length) % length);
  };
  const handleNextRequest = (i, length) => (e) => {
    setSelectedImage((i + 1) % length);
  };

  console.log(
    "test" +
      getFluidGatsbyImage(images[0].asset.id, { maxWidth: 1000 }, sanityConfig)
  );

  return (
    <div className="flex items-center flex-wrap flex-1 -mb-4 masonry-wrapper">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, i) => (
          <div key={i} onClick={handleOpen(i)}>
            <Img
              fluid={getFluidGatsbyImage(
                image.asset.id,
                { maxWidth: 1000 },
                sanityConfig
              )}
              alt={image.alt}
            />
          </div>
        ))}
      </Masonry>
      {showLightbox && selectedImage !== null && (
        <LightBox
          images={images}
          handleClose={handleClose}
          handleNextRequest={handleNextRequest}
          handlePrevRequest={handlePrevRequest}
          selectedImage={selectedImage}
        />
      )}
    </div>
  );
};

Gird.propTypes = {
  classes: PropTypes.object,
  images: PropTypes.array,
};

export default Gird;
