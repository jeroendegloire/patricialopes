import React from "react";
import Figure from "./Figure";
import Accordion from "./pages/accordion";
import Slideshow from "./pages/slideShow";

const serializers = {
  types: {
    authorReference: ({ node }) => <span>{node.author.name}</span>,
  },
};

export default serializers;
