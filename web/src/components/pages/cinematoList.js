import React, { useEffect } from "react";
import Cineitem from "../cinematography/cineitem";
import Isotope from "isotope-layout/js/isotope";

const CinematoList = ({ list }) => {
  useEffect(() => {
    var elem = document.querySelector(".cinematoGrid");
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
    filtersElem.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        var filterValue = event.target.getAttribute("data-filter");
        filterValue = filterValue;
        iso.arrange({ filter: filterValue });
      }
    });

    // change is-checked class on buttons
    var buttonGroups = document.querySelectorAll(".button-group");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }

    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (event.target.tagName == "LI") {
          buttonGroup
            .querySelector(".is-checked")
            .classList.remove("is-checked");
          event.target.classList.add("is-checked");
        }
      });
    }
  }, []);

  return (
    <section id="cinematography" className="flex-1 flex flex-col">
      <div className="mx-auto">
        <div className="flex justify-center m-8">
          <ul className="flex flex-wrap list-none button-group filters-button-group">
            <li
              className="cursor-pointer is-checked"
              data-filter="*"
              tabIndex="0"
            >
              All
            </li>
            <li className="cursor-pointer" data-filter=".fiction" tabIndex="0">
              Narrative
            </li>
            <li
              className="cursor-pointer"
              data-filter=".commercials"
              tabIndex="0"
            >
              Commercial
            </li>
            <li
              className="cursor-pointer"
              data-filter=".music_video"
              tabIndex="0"
            >
              Music Video
            </li>
            <li
              className="cursor-pointer"
              data-filter=".documentary"
              tabIndex="0"
            >
              Documentary
            </li>
          </ul>
        </div>
      </div>
      <div className="cinematoGrid mx-auto flex items-center flex-wrap -mt-1 -mx-1">
        {list.map((item, i) => (
          <Cineitem
            title={item.cinematoReference.title}
            featuredImage={item?.featuredImage}
            altImage={item?.featuredImage?.alt}
            category={item.cinematoReference.category}
            url={item.cinematoReference.slug.current}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default CinematoList;
