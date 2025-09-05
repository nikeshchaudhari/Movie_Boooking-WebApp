import axios from 'axios';
import Navbar from "../components/Navbar"
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
    const {id}= useParams();
    const[movie,setMovie] = useState(null)
    const [loading,setLoading]= useState(true)
    useEffect(()=>{
        const dataFetch =async()=>{
           try{
 const res = await axios.get(`http://localhost:3000/movies/${id}`);
            setMovie(res.data);
            setLoading(false)
            console.log(res.data);
            
           }
           catch(err){

           }
        }
    dataFetch();
    },[id])
  return (
    <>
    <Navbar/>
    <div>
        <h1>{movie?.title}</h1>
      

    </div>
    </>
  )
}

export default MovieDetail