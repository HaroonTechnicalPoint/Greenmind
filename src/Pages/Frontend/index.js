import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Home from './Home';



const index = () => {
    return (
        <>
           <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
            <Footer/>
        </>
    )
}

export default index
