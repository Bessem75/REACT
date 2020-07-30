import React, { useState, useEffect } from "react";
import axios from "axios";

import Loader from "../components/Loader";
import Card from "../components/Card";
import SearchResults from "../components/SearchResults";
import Search from "../components/Search";

const Characters = ({
  search,
  setSearch,
  searchData,
  addFav,
  handleSubmit,
}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await axios.get(
        `https://lereacteur-marvel.herokuapp.com/characters?offset=${offset}`
      );
      // console.log(response.data);
      setData(response.data.data);
      setIsLoading(false);
    };

    fetchData();
  }, [offset]);

  return isLoading ? (
    <>
      <Loader />
    </>
  ) : (
    <div className="char-cont-butt">
      <Search
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      <div className="char-container">
        {searchData.data && searchData.data.results.length > 0 ? (
          <SearchResults data={searchData} />
        ) : (
          data.results.map((char, index) => {
            return (
              <Card
                addFav={addFav}
                key={index}
                index={index}
                data={char}
                heart
              />
            );
          })
        )}
      </div>
      {searchData.length === 0 && (
        <div className="button-div">
          {data.offset !== 0 && (
            <button onClick={() => setOffset(offset - 100)}>
              Page précédente
            </button>
          )}
          {data.offset + 100 < data.total && (
            <button onClick={() => setOffset(offset + 100)}>
              Page suivante
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Characters;
