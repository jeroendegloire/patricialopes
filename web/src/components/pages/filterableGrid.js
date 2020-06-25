import React from "react";

const filterableGrid = ({ items }) => {
  return (
    <div className="item mx-auto flex items-center flex-wrap -mt-1 -mx-1">
      {items.map(({ node: item }) => (
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
