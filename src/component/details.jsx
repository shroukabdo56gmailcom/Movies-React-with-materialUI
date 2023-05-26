import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecipeReviewCard from "./movieDetails";
export default function Details() {
  let [movie, setmovie] = useState({});
  let { id } = useParams();
  const getMovie = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=7318267e0930fb1578053cb357c3b2cd`
    );
    setmovie(data);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      <div className="m-auto"><RecipeReviewCard movie={movie}/></div>
    </div>
  );
}
