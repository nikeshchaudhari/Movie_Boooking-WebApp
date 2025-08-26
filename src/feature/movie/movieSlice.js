import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    selectMovie :null,
    filterMovies:[],
};


const movieSlice =createSlice({
    name:"movies",
    initialState,
    reducers:{
        setSelectMovie:(state,action)=>{
            state.selectMovie = action.payload;
        },
        setFilterMovies:(state,action)=>{
            state.filterMovies = action.payload;
        }
    }
})

export const{setSelectMovie,setFilterMovies}=movieSlice.actions
export default movieSlice.reducer;