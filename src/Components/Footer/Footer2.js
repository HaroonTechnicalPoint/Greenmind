import React from 'react'

const Footer2 = () => {
    const year = new Date().getFullYear()
    return (
        <div className='bg-primary'>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-3 mt-5">
                        <p className='text-muted'>{year } all Right Reserved Term of use <span className='fw-bold '>GREENMIND</span></p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer2
