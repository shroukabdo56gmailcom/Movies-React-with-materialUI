// import { useContext } from 'react';
import { Link } from "react-router-dom";
import { getMovies } from "../redux/movieSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MultiActionAreaCard from "./card";
import { Container, Grid, Stack } from "@mui/material";
// import { mediaContext } from '../../context/context';
export default function Home() {
  let dispatch = useDispatch();
  let { movies } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(getMovies());
  }, []);
  // let {movies}=useContext(mediaContext)
  if (!movies) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  let imgsrc = "https://image.tmdb.org/t/p/original/";
  return (
    <Container sx={{paddingTop:10}} >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies?.map((movie) => (
          <Grid item xs={2} sm={4} md={4}>
            <MultiActionAreaCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Container>
    // <div className="container">
    //   <div className="row g-3">
    //     {movies?.map((movie) => (
    //       <div className="card col-3 ">
    //         <img
    //           src={imgsrc + movie.poster_path}
    //           className="card-img-top"
    //           alt="..."
    //         />
    //         <div className="card-body">
    //           <h5 className="card-title">{movie.title}</h5>
    //           <p className="card-text">
    //             Some quick example text to build on the card title and make up
    //             the bulk of the card's content.
    //           </p>
    //           <Link to={`/${movie.id}`} className="btn btn-primary ">
    //             Details
    //           </Link>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
}
