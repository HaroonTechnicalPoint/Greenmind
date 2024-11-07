import React, { useContext, useState } from 'react'
import { Col, Input, Row, Typography, Form, Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth'


const { Title } = Typography



const Login = () => {

    const emailFormate = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const { setContextState } = useContext(AuthContext)

    let handleChange = e => { setState(s => ({ ...s, [e.target.name]: e.target.value })) }
    let [state, setState] = useState({ email: '', password: '' })

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()

        let { email, password } = state

        const user = { email, password }
        if (!emailFormate.test(email)) { return message.error('please Enter Valid Email') }

        console.log(user)
        console.log(state)
        setState(email)
        setContextState({ isAuth: true, user: { email } })
        navigate('/')
    }

    return (


        <main className='Auth p-2 p-md-4'>

            <div className="container rounded-3 card p-3 p-md-4">
                <Title level={1} className='text-primary fw-bold text-center outline-dark user-select-none'><span className='d-flex justify-content-start align-items-center '><Link to='/'><i class="bi bi-arrow-left-circle-fill text-primary fw-bold fs-3"></i></Link></span>Login</Title>
                <Form layout='vertical' >
                    <Row gutter={16} >
                        <Col xs={24} >
                            <Form.Item label='Email' required>
                                <Input placeholder='Enter Email' required type='email' name='email' size='large' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} >
                            <Form.Item label='Password' required>
                                <Input.Password placeholder='Enter Password' required name='password' type='text' size='large' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Button block type='primary' onClick={handleSubmit} htmlType='submit'  >Login</Button>
                    </Row>
                </Form>
            </div>

        </main>
    )
}

export default Login
