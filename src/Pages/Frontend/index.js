import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Home from './Home';
import Products from './Products/';



const index = () => {
    return (
        <>
           <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='products' element={<Products/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default index
