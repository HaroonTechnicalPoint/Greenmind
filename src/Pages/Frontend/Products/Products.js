import React from 'react'
import alovara_plants from '../../../assets/images/Frame 9.png'
import hang_plants from '../../../assets/images/Frame 8.png'
import cactus_plants from '../../../assets/images/Frame 7.png'
import natural_Plants_3 from '../../../assets/images/Frame 37.png'
import natural_Plants_1 from '../../../assets/images/Frame 39.png'
import natural_Plants_2 from '../../../assets/images/Frame 38.png'
import natural_Plants_4 from '../../../assets/images/pant1.jpg'
import natural_Plants_5 from '../../../assets/images/plant2.jpg'
import { Image } from 'antd';
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <main className='section-2 mt-5 container '>
            <Fade>
                <div className="row product-page">

                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <div className=' object-fit-fill rounded '> <Image src={alovara_plants} className='img-fluid' alt="" /></div>
                        <Link to='/NaturalPlants' className='mt-1 text-decoration-none  text-center'>
                            <h5 className='text-dark'>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </Link>
                    </div>

                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <Image
                            className='img-fluid'
                            src={hang_plants}
                        />
                        <div className='mt-1 text-center'>
                            <h5>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <Image src={cactus_plants} className='img-fluid' alt="" />
                        <div className='mt-1 text-center'>
                            <h5>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <Image src={natural_Plants_1} className='img-fluid' alt="" />
                        <div className='mt-1 text-center'>
                            <h5>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <Image src={natural_Plants_2} className='img-fluid' alt="" />
                        <div className='mt-1 text-center'>
                            <h5>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <Image src={natural_Plants_3} className='img-fluid' alt="" />
                        <div className='mt-1 text-center'>
                            <h5>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <Image src={natural_Plants_4} className='img-fluid' alt="" />
                        <div className='mt-1 text-center'>
                            <h5>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 products d-flex justify-content-center align-items-center flex-column mb-2 mb-md-0 product-card">
                        <Image src={natural_Plants_5} className='img-fluid' alt="" />
                        <div className='mt-1 text-center'>
                            <h5>Natural Plants</h5>
                            <p className='text-muted'>₱ 1,400.00</p>
                        </div>
                    </div>

                </div>
            </Fade>

        </main>
    )
}

export default Products
