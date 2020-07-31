import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ComicCard from "../components/ComicCard";

const ComicsPerCharacter = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const id = params.characterId;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-marvel.herokuapp.com/comics/${id}`
      );
      // console.log(response.data.data.results);
      setData(response.data.data.results);
    };
    fetchData();
  }, [id]);

  return (
    <div className="comic-per-character-container">
      {data &&
        data.map((comic, index) => {
          return <ComicCard key={index} data={comic} />;
        })}
    </div>
  );
};

export default ComicsPerCharacter; 
