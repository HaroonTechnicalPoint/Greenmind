import React from 'react'
import { Route, Routes } from 'react-router-dom';

import Frontend from './Frontend';
import Auth from './Auth';
const index = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='Auth/*' element={<Auth/>} />
      </Routes>
    </>
  )
}

export default index
