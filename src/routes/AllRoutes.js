import React from 'react'

import {Routes,Route} from 'react-router-dom';
import {Home} from '../pages/Home';
import {Cart} from '../pages/Cart';

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>

    </Routes>
    </>
  )
}
