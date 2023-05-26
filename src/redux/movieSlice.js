import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useParams } from "react-router-dom";
export let getMovies = createAsyncThunk("movie/getMovies", async () => {
  let { data } = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=7318267e0930fb1578053cb357c3b2cd"
  );
  return data.results;
});
// export let getMovie = createAsyncThunk("movie/getMovie", async () => {
//   let {id}= useParams()

//   let { data } = await axios.get(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=7318267e0930fb1578053cb357c3b2cd`
//   );
//   return data;
// });

let initialState = { movies:[], loading: false };
// let initialStateMovie = { movie:{}, loading: false };
let movieSlice = createSlice({
  name: "movies",
  initialState:initialState,
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getMovies.pending,(state,action)=>{console.log('Loading...')
  console.log(action.payload);})
    builder.addCase(getMovies.rejected,()=>console.log('rejected'))
  },
});
  let movieReducer=movieSlice.reducer
  export default movieReducer