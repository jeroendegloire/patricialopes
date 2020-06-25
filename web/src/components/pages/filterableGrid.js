import React, { useEffect } from "react";
import Cineitem from "../cinematography/cineitem";
import Isotope from "isotope-layout/js/isotope";

const filterableGrid = ({ items }) => {
  console.log(items);

  useEffect(() => {
    var elem = document.querySelector(".item");
    var iso = new Isotope(elem, {
      itemSelector: ".item__grid",
      layoutMode: "fitRows",
    });
  }, []);
  return (
    <div className="mx-auto w-full max-w-6xl pt-10 px-10 xl:px-0 item">
      {items.map((item) => (
        <Cineitem
          title={item.title}
          featuredImage={item.featuredImage.asset.id}
          altImage={item.featuredImage.alt}
          category={item.category}
          url={item.slug.current}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default filterableGrid;
