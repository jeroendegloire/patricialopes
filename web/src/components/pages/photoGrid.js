import React, { useState, useEffect } from "react";
import Isotope from "isotope-layout/js/isotope";
import Item from "./photoGridItem";
import LightBox from "./lightbox";

const photoGrid = ({ items }) => {
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
    var elem = document.querySelector(".item");
    var iso = new Isotope(elem, {
      itemSelector: ".item--grid",
      layoutMode: "fitRows",
    });
  }, []);

  console.log(items);
  return (
    <div className="mx-auto w-full max-w-6xl pt-10 mx-10 xl:px-0 item mb-20 flex flex-col">
      {items.map((item, i) => (
        <div onClick={handleOpen(i)}>
          <Item key={i} mainImage={item.asset} altImage={item.alt} />
        </div>
      ))}
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

export default photoGrid;
