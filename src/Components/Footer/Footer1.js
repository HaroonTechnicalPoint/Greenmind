import React from 'react'

const Footer1 = () => {
    return (
        <div className='bg-primary py-5 mt-5'>
            <div className="container">
                <div className="row py-3">
                    <div className="col-12 col-md-6 d-flex justify-content-center align-items-center justify-content-md-top align-items-md-start   flex-column">
                        <h4 className='fw-bold text-black my-3 '>GREENMIND</h4>
                        <p className='text-muted w-75 w-md-25 text-center text-md-start'>We help you find your dream plant</p>
                        <div className='mb-5 mb-md-0'>
                            <i class="bi bi-facebook text-muted fs-2"></i>
                            <i class="bi bi-instagram text-muted fs-2 mx-4"></i>
                            <i class="bi bi-twitter text-muted fs-2"></i>
                        </div>

                    </div>
                    <div className="col-12 col-md-6  d-flex justify-content-center align-items-center">
                        <div className="row ">
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
                                <p className='text-black fw-bold'>Information</p>
                                <p className='text-muted '>About</p>
                                <p className='text-muted '>Product</p>
                                <p className='text-muted '>Blog</p>

                            </div>
                            <hr className='d-sm-block d-md-none ' />
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
                                <p className='text-black fw-bold'>Company</p>
                                <p className='text-muted '>Community</p>
                                <p className='text-muted '>Career</p>
                                <p className='text-muted '>Our story</p>
                            </div>
                            <hr className='d-sm-block d-md-none' />
                            <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
                                <p className='text-black fw-bold'>Contact</p>
                                <p className='text-muted '>Getting </p>
                                <p className='text-muted '>Pricing</p>
                                <p className='text-muted '>Resources</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer1
