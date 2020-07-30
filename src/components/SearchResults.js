import React from "react";

import Card from "./Card";
import ComicCard from "./ComicCard";

const SearchResults = ({ data, category }) => {
  return data.data.results.map((elem, index) => {
    return category === "comics" ? (
      <ComicCard key={index} data={elem} />
    ) : (
      <Card key={index} data={elem} />
    );
  });
};

export default SearchResults;