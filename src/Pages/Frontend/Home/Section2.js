import React from 'react'
import alovara_plants from '../../../assets/images/Frame 9.png'
import hang_plants from '../../../assets/images/Frame 8.png'
import cactus_plants from '../../../assets/images/Frame 7.png'

const Section2 = () => {
    return (
        <main className='section-2 mt-5 container'>

            <div className="row">
                <div className="col-md-6 col-lg-3 d-flex justify-content-center  align-items-center flex-column">
                    <h3 className='fw-bold w-75 text-center text-md-start '>Best Selling Plants</h3>
                    <p className='text-muted w-50 text-center text-md-start'>Easiest way to healthy life by buying your favorite plants </p>
                    <button className='btn btn-primary text-center text-md-start'>Search<i class="bi ms-2 bi-arrow-right"></i></button>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                    <img src={alovara_plants} className='img-fluid' alt="" />
                    <div className='mt-1 text-center'>
                        <h5>Natural Plants</h5>
                        <p className='text-muted'>₱ 1,400.00</p>
                    </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                    <img src={hang_plants} className='img-fluid' alt="" />
                    <div className='mt-1 text-center'>
                        <h5>Natural Plants</h5>
                        <p className='text-muted'>₱ 1,400.00</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 d-flex justify-content-center align-items-center flex-column">
                    <img src={cactus_plants} className='img-fluid' alt="" />
                    <div className='mt-1 text-center'>
                        <h5>Natural Plants</h5>
                        <p className='text-muted'>₱ 1,400.00</p>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Section2
