import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import bg2 from "./assets/bg2.jpg"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TicketRate from './Pages/TicketRate'
import Login from './Pages/Login'
import { ErrorPage } from './Pages/ErrorPage'
import Register from "./Pages/Register"
const myRouter = createBrowserRouter([
  {path:"*",Component:ErrorPage},
  {path:"/",Component:Home},
  {path:"/home",Component:Home},
  {path:"/movies",Component:Movies},
  {path:"/ticket-rate",Component:TicketRate},
  {path:"/login",Component:Login},
  {path:"/register",Component:Register}

])
const App = () => {
const [loading,setLoading]= useState(true)

useEffect(()=>{
  const timer = setTimeout(() => {
    return setLoading(false)
    
  }, 2000);

 return ()=> clearTimeout(timer)
},[])
;

if(loading){
 return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-2xl animate-pulse">Loading...</h1>
      </div>
    );
}
  
  return (
   <>
   <div className='min-h-screen bg-cover bg-center' style={{
      // backgroundImage: `url(${bg2})`
      backgroundColor:"black"
    }}>
   <RouterProvider router={myRouter}></RouterProvider>
   </div>
   </>
  )

 
}

export default App