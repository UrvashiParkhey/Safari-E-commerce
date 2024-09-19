import React from 'react'
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import ProductDetail1 from './pages/ProductDetail1'
import TrollyBag from './pages/TrollyBag'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/product-detail' element={<ProductDetail/>}> </Route>
        <Route path='/product-detail1' element={<ProductDetail1/>}> </Route>
        <Route path='/trollybag' element={< TrollyBag/>}> </Route>

   
      </Routes>
    </BrowserRouter>
  )
}
export default App