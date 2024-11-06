import { Input } from 'antd'
import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="conatiner w-50 ">
                <div className="row">
                    <div className="col">
                        <input type="email" placeholder='Enter Email' />
                    </div>
                    <div className="col">
                        <Input.Password />
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>

        </div>
    )
}

export default Login
