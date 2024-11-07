import React, { useState } from 'react'
import { Col, Input, Row, Typography, Form, Button } from 'antd'
import { Link } from 'react-router-dom'
const { Title } = Typography
const Register = () => {

    let initialState = { firstName: '', lastName: '', email: '', password: '' }

    let [state, setState] = useState(initialState)

    let handleChange = e => { setState(s => ({ ...s, [e.target.name]: e.target.value })) }

    const handleSubmit = e => {
        e.preventDefault()

        let { fullName, lastName, email, password } = state

        const user = { fullName, lastName, email, password }
        console.log(user)
    }

    return (
        <main className='Auth p-2 p-md-4'>
            <div className="container rounded-3 card p-3 p-md-4">
               <Title level={1} className='text-primary fw-bold text-center outline-dark user-select-none'>  <span className='d-flex justify-content-start align-items-center '><Link to='/'><i class="bi bi-arrow-left-circle-fill text-primary fw-bold fs-3"></i></Link></span>Register</Title>
                <Form layout='vertical' >
                    <Row gutter={16} >
                        <Col xs={24} md={12}>
                            <Form.Item label='First Name' required>
                                <Input placeholder='Enter First Name' required type='text' name='firstName' size='large' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={12}>
                            <Form.Item label='Last Name' required>
                                <Input placeholder='Enter Last Name' required type='text' name='lastName' size='large' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} >
                            <Form.Item label='Email' required>
                                <Input placeholder='Enter Email' required type='text' size='large' name='email' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} >
                            <Form.Item label='Password' required>
                                <Input.Password placeholder='Enter Password' required type='text' name='password' size='large' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col xs={24} >
                            <Form.Item label='Confirm Password' required>
                                <Input.Password placeholder='Enter Password Again' required type='text' size='large' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Button block type='primary' onClick={handleSubmit} htmlType='submit'>Register</Button>
                    </Row>
                </Form>
            </div>
        </main>
    )
}

export default Register
