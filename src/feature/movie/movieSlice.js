  import { createSlice } from "@reduxjs/toolkit";

  const initialState = {
    selectMovie: null,
    filterMovies: [],
    selectDate: "",
    movies: [],
    selectedTime :null
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
        if (Array.isArray(state.movies)) {
    state.filterMovies = state.movies.filter(
      (m) => m.showDate === action.payload
    );
  } else {
    state.filterMovies = [];
  }
      },
      setMovies: (state, action) => {
        state.movies = action.payload;
      },
      setFilterMovies: (state, action) => {
        state.filterMovies = action.payload;
      },
      setSelectedTime:(state,action)=>{
        state.selectedTime=action.payload
      }
    },
  });

  export const { setSelectMovie, setSelectDate, setMovies, setFilterMovies,setSelectedTime   } =
    movieSlice.actions;
  export default movieSlice.reducer;
