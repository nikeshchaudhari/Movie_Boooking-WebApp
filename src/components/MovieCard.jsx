import React from 'react'

const MovieCard = ({movies}) => {
  return (
    <>
    <div className=' md:w-[300px]   '>
     <div className='flex flex-col '>
      <div className='rounded-lg'>
       <img src={movies.poster} alt={movies.title} className='h-[480px]'/>
     </div>
       </div>
      <div className=''>
      <h2 className="mt-2 font-semibold text-lg">{movies.title}</h2>
      <p className="text-sm">{movies.genre}</p>
      <p className="text-sm">🎬 {movies.date}</p>
      </div>
   
    </div>
    </>
  )
}

export default MovieCard