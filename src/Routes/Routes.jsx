import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../containers/home';
import Store from '../containers/store';
import StoreItems from '../components/storeItems';
import Cart from '../containers/Cart';
import SingleItem from '../components/singleItem';



function OuterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} >
        <Route path=':itemCategory' element={<StoreItems />} />
      </Route>
      <Route path='items/:itemCategory/:itemId' element={<SingleItem />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default OuterRoutes