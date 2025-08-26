import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../feature/auth/authSlice"
import movieReducer from "../feature/movie/movieSlice"
export const store = configureStore({

    reducer:{
        auth:authReducer,
        movies:movieReducer
    }
    

})