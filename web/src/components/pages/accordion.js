import React, { useState, useRef } from "react";
import PortableText from "../portableText";

const Accordion = ({ title, text }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  const content = useRef(null);

  return (
    <section className={`mx-auto w-full max-w-6xl pt-10 px-10 xl:px-0`}>
      <button
        className={`accordion text-left inline-block ${setActive}`}
        onClick={toggleAccordion}
      >
        <h2 className="accordion__title inline-block">{title}</h2>
      </button>
      <div
        className="accordion__content"
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        {text.map((singleText) => (
          <PortableText blocks={singleText} />
        ))}
      </div>
    </section>
  );
};

export default Accordion;
