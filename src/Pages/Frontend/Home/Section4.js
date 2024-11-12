import React from 'react'
import natural_Plants_3 from '../../../assets/images/Frame 37.png'
import natural_Plants_1 from '../../../assets/images/Frame 39.png'
import natural_Plants_2 from '../../../assets/images/Frame 38.png'
import { Image } from 'antd'
import { Fade } from 'react-awesome-reveal'

const Section4 = () => {
    return (
        <main className='mt-5 '>
            <Fade>

                <div className=' mt-5 container pb-3'>
                    <div >
                        <div className="row ">
                            <div className="col text-center">
                                <h4>Categories</h4>
                                <p className='text-muted'>Find what you are looking for</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid bg-primary'>
                    <div className="container py-3  ">

                        <div className="row mt-5 ">
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mb-4 mb-sm-0">
                                <Image src={natural_Plants_1} className='img-fluid ' alt="Natural Flowers" />
                                <h5 className='text-center fw-bold py-2'>Natural Plants</h5>
                            </div>

                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
                                <Image src={natural_Plants_2} className='img-fluid mt-lg-5 my-2' alt="Natural Flowers" />
                                <h5 className='text-center fw-bold py-2'>Plant Accessories</h5>
                            </div>
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column mb-4 mb-md-0">
                                <Image src={natural_Plants_3} className='img-fluid ' alt="Natural Flowers" />
                                <h5 className='text-center fw-bold py-2'>Artificial Plants</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center mt-2 d-flex justify-content-center align-items-center flex-column">
                                <p className='text-muted w-75 w-md-25 '>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button className='btn btn-light '>Explore<i class="bi ms-2 bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </main>
    )
}

export default Section4
