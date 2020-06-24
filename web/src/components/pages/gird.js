import React, { useState, useEffect } from "react";
import Img from "gatsby-image";
import { getFluidGatsbyImage, getFixedGatsbyImage } from "gatsby-source-sanity";
import LightBox from "./lightbox";
import PropTypes from "prop-types";
import Isotope from "isotope-layout/js/isotope";

// const Gird = ({ items }) => {
//   const sanityConfig = { projectId: "l2xxtj60", dataset: "production" };

//   return (
//     <div className="mx-auto flex items-center flex-wrap rounded">
//       <div class="">
//         {items.map((item) => (
//           <div class="">
//             <Img
//               fluid={getFluidGatsbyImage(
//                 item.asset.id,
//                 { maxWidth: 1000, maxHeight: 1000 },
//                 sanityConfig
//               )}
//               alt={item.alt}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gird;

//import React, { useState } from "react";
//import Masonry from "react-masonry-css";

const Gird = ({ items }) => {
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

  useEffect(() => {
    var elem = document.querySelector(".grid");
    var iso = new Isotope(elem, {
      layoutMode: "masonry",
    });
  }, []);

  console.log(items);

  return (
    <div className="flex items-center flex-wrap flex-1 -mb-4 masonry-wrapper">
      <div className="flex flex-1 grid">
        {items.map((item, i) => (
          <div onClick={handleOpen(i)} className={"item-grid " + item.ratio}>
            <Img
              fluid={getFluidGatsbyImage(
                item.image.asset.id,
                { maxWidth: 800 },
                sanityConfig
              )}
              key={i}
              alt={item.image.alt}
            />
          </div>
        ))}
      </div>
      {showLightbox && selectedImage !== null && (
        <LightBox
          images={items}
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
  items: PropTypes.array,
};

export default Gird;
