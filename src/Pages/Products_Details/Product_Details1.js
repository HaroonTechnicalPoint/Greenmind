import React from 'react'
import { Image } from 'antd';
import alovara_plants from '../../assets/images/Frame 9.png';

const Product_Details1 = () => {
  return (
    <main>
      <div className="comtainer p-5 ">
        <div className="row">
          <div className="text-center text-black fw-bold user-select-none">PRODUCTS</div>
          <div className="col">
            <Image src={alovara_plants} className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product_Details1
