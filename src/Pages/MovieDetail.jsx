    import axios from "axios";
    import React, { useEffect, useState } from "react";
    import { useParams } from "react-router-dom";

    const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const dataFetch = async () => {
        try {
            
            const res = await axios.get(`http://localhost:3000/movies/${id}`);
            console.log(res.data);
            
            const movieData = res.data.find((m)=>m.id===parseInt(id))
            setMovie(movieData);
            setLoading(false);
            console.log(movieData);
        } catch (err) {
            console.log("Axios error:", err);
        }
        };
        dataFetch();
    }, [id]);

    if(loading){
        return <div className="text-center text-red-700">Loading....</div>
    }
    if(!movie){
        return <div>Movies Not Found</div>
    }

    return <>
    
    </>;
    };

    export default MovieDetail;
