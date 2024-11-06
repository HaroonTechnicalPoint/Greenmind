import React from 'react'
import call from '../../../assets/images/call.png'
import flower from '../../../assets/images/flower.png'
import box from '../../../assets/images/box.png'


const Section3 = () => {
    return (
        <main className='container section-3    '>
            <div className="row px-0">
                <div className="col-12 px-0">
                    <h4 className='text-center '>About Us</h4>
                    <p className='text-muted text-center'>Order now and appreciate the beauty of nature</p>
                </div>
                <div className="row mt-5 mx-0 px-5 Card-Cover">
                    <div className="col-12 col-md-6 col-lg-4 text-center user-select-none Card">
                        <img src={flower} className='img-fluid' alt="Flower" />
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h4 className=''>Large Assortment</h4>
                            <p className=' text-muted w-75'>we offer many different types of products with fewer variations in each category.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center  user-select-none Card">
                        <img src={box} className='img-fluid' alt="" />
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h4 className=''>Fast & Free Shipping</h4>
                            <p className=' text-muted w-75'>4-day or less delivery time, free shipping and an expedited delivery option.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 text-center  user-select-none Card">
                        <img src={call} className='img-fluid' alt="" />
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h4 className=''>24/7 Support</h4>
                            <p className=' text-muted w-75'>answers to any business related inquiry 24/7 and in real-time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Section3
