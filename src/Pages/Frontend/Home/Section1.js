import React from 'react'
import hero from '../../../assets/images/hero-img.png'

const Section1 = () => {
  return (
    <main className=' container '>
      <div className=' section-1 mt-2 hero'>
        <div className="row ">
          <div className="col-12 col-lg-6 " >
            <h1 className=' ms-md-3 mt-md-2 display-3 fw-bolder text-center text-lg-start text-black'>Buy your <br /> dream plants</h1>
            <div className="row mt-3">
              <div className="col ms-md-3 text-center text-lg-start">
                <h3>50+ <br /> <span className=' fs-6 '>Plant Species</span></h3>
              </div>
              <div className="col text-center text-lg-start">
                <h3>100+ <br /> <span className=' fs-6 '>Customers</span></h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12  ms-md-3 mt-3 d-flex justify-content-center justify-content-lg-start align-items-center">
                <div class=" mb-3 w-75  input-group">
                  <input type="text" class="form-control py-3 " placeholder="What are you looking for?" />
                  <button class="btn btn-light " type="button" id="button-addon2"><i class="bi bi-search bg-primary p-2 rounded-3 "></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mt-3 mt-lg-3  d-flex justify-content-center justify-content-lg-start align-items-center">
            <img className='img-fluid ' src={hero} alt="Flower" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Section1
