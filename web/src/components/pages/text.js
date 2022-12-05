import React from "react";
import PortableText from "../portableText";

const Text = ({ text }) => {
  return text ? (
    <div className="container max-w-6xl mx-auto px-10 xl:px-0">
      {text.map((singleText) => (
        <PortableText blocks={singleText} />
      ))}
    </div>
  ) : null;
};

export default Text;
