import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectMovie: null,
  filterMovies: [],
  selectDate: "",
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSelectMovie: (state, action) => {
      state.selectMovie = action.payload;
    },
    setSelectDate: (state, action) => {
      state.selectDate = action.payload;
      state.filterMovies = state.movies.filter((m) => {
          // console.log("Movie:", m.title, "ShowDate:", m.showDate);

        return m.showDate === action.payload;
      });
      // console.log("Filtered movies:", state.filterMovies);
    },
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFilterMovies: (state, action) => {
      state.filterMovies = action.payload;
    },
  },
});

export const { setSelectMovie, setSelectDate, setMovies, setFilterMovies } =
  movieSlice.actions;
export default movieSlice.reducer;
