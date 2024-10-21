import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "./Layout"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "about",
        element : <About />
      },
      {
        path : "services",
        element : <Services />
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)