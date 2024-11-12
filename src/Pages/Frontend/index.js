import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Home from './Home';
import Products from './Products/';
import Product_Details from '../Products_Details/Product_Details1';




const index = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/NaturalPlants' element={<Product_Details />} />
            </Routes>
            <Footer />
        </>
    )
}

export default index
