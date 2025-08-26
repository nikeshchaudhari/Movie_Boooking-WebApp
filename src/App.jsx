import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TicketRate from './Pages/TicketRate'

const myRouter = createBrowserRouter([
  {path:"/",Component:Home},
  {path:"/home",Component:Home},
  {path:"/movies",Component:Movies},
  {path:"ticket-rate",Component:TicketRate}

])
const App = () => {
  return (
   <>
   <RouterProvider router={myRouter}></RouterProvider>
   </>
  )
}

export default App