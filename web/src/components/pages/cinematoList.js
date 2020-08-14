import React, { useEffect } from "react";
import Cineitem from "../cinematography/cineitem";
import Isotope from "isotope-layout/js/isotope";
import LazyLoad from "vanilla-lazyload";

const CinematoList = ({ list }) => {
  useEffect(() => {
    var elem = document.querySelector(".item");
    var iso = new Isotope(elem, {
      itemSelector: ".item__grid",
      layoutMode: "fitRows",
      percentPosition: true,
    });
    var filtersElem = document.querySelector(".filters-button-group");
    filtersElem.addEventListener("click", function (event) {
      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue;
      iso.arrange({ filter: filterValue });
    });

    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll(".button-group");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        buttonGroup.querySelector(".is-checked").classList.remove("is-checked");
        event.target.classList.add("is-checked");
      });
    }
  }, []);

  useEffect(() => {
    let lazy = new LazyLoad({
      elements_selector: ".lazy",
      threshold: -100,
      class_loaded: "is-loaded",
    });

    return () => {
      lazy.destroy();
    };
  }, []);

  return (
    <section id="cinematography" className="flex-1 flex flex-col">
      <div className="mx-auto">
        <div className="flex justify-center">
          <ul className="list-none button-group filters-button-group p-6">
            <li className="mx-3 cursor-pointer is-checked" data-filter="*">
              All
            </li>
            <li className="mx-3 cursor-pointer" data-filter=".fiction">
              Narrative
            </li>
            <li className="mx-3 cursor-pointer" data-filter=".commercials">
              Commercial
            </li>
            <li className="mx-3 cursor-pointer" data-filter=".music_video">
              Music Video
            </li>
            <li className="mx-3 cursor-pointer" data-filter=".documentary">
              Documentary
            </li>
          </ul>
        </div>
      </div>
      <div className="item mx-auto flex items-center flex-wrap -mt-1 -mx-1">
        {list.map((test, i) => (
          <Cineitem
            title={test.cinematoReference.title}
            featuredImage={test?.featuredImage}
            altImage={test?.featuredImage?.alt}
            category={test.cinematoReference.category}
            url={test.cinematoReference.slug.current}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default CinematoList;
