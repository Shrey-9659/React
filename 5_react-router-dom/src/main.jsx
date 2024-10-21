import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from "./Layout"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Services from './Components/Services/Services'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='services' element={<Services />}></Route>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)