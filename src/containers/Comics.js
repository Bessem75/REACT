import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import ComicCard from "../components/ComicCard";

import Search from "../components/Search";
import SearchResults from "../components/SearchResults";

const Comics = ({ search, setSearch, addFav, handleSubmit, searchData }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://lereacteur-marvel.herokuapp.com/comics?offset=${offset}`
      );
      // console.log(response.data);
      setData(response.data.data);
      setIsLoading(false);
    };

    fetchData();
  }, [offset]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="com-cont-butt">
      <Search
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <div className="comics-container">
        {searchData.data && searchData.data.results.length > 0 ? (
          <SearchResults category="comics" data={searchData} />
        ) : (
          data.results.map((comic, index) => {
            return <ComicCard heart addFav={addFav} key={index} data={comic} />;
          })
        )}
      </div>
      <div className="button-div">
        {data.offset !== 0 && (
          <button onClick={() => setOffset(offset - 100)}>
            Page précédente
          </button>
        )}
        {data.offset + 100 < data.total && (
          <button onClick={() => setOffset(offset + 100)}>Page suivante</button>
        )}
      </div>
    </div>
  );
};

export default Comics; 
