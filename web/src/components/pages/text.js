import React from "react";
import PortableText from "../portableText";

const Text = ({ text }) => {
  return text ? (
    <div className="container max-w-5xl mx-auto flex items-center flex-wrap rounded">
      {text.map((singleText) => (
        <PortableText blocks={singleText} />
      ))}
    </div>
  ) : null;
};

export default Text;
