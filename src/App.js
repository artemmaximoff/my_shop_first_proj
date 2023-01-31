import React from "react";
import { ProductPage } from './pages/productpage'
import { Navigation } from "./components/navigation";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/about";
import { ProductProfile } from './components/productProfile'
import { Login } from './components/login'
import { Navigate } from "react-router-dom";

import { PrivateRoutes } from './utils/private_router'

function App() {


  return (
    <>
      <Navigation />
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path='/' element={<Navigate to="/products" />} />
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path='products/product/:productId' element={<ProductProfile />} />

        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>


      </Routes>

    </>

  );
}

export default App;
