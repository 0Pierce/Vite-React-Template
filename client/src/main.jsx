import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from "/src/pages/Homepage.jsx"
import Examplepage from "/src/pages/Examplepage.jsx"





const mainRouter = createBrowserRouter([

  
  {
    path: "/",
    element: <Homepage/>
  },

  {
    path: "example",
    element: <Examplepage/>
  }




])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={mainRouter}/>
  </StrictMode>,
)
