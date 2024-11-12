import React, { useState } from 'react';
import { auth, app } from '../../Config/afirebase'
import { Col, Input, Row, Typography, Form, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const { Title } = Typography;

const Register = () => {


    let initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

    let [state, setState] = useState(initialState);

    const [isProcessing, setIsProcessing] = useState(false);

    let handleChange = e => { setState(s => ({ ...s, [e.target.name]: e.target.value })) };


    const handleSubmit = e => {
        e.preventDefault()

        let { firstName, lastName, email, password, confirmPassword } = state
        firstName = firstName?.trim()

        const user = { firstName, lastName, email, password, confirmPassword }

        if (!firstName) { return message.error('Enter Fist Name') }
        if (!lastName) { message.error('Enter last Name') }
        if (!window.emailFormate.test(email)) { return message.error('please Enter Valid Email') }
        if (password.length < 6) { return message.error('Enter passwrod atleast 6 digits') }
        if (confirmPassword !== password) { return message.error('Password Must Be same in Both Fileds') }


        setIsProcessing(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // createdocument({ ...user, uid: user.uid })
                message.success('Account created successfully')
            })
            .catch((error) => {
                console.error(error)
            }).finally(() => {
                setIsProcessing(false)

            })

        console.log(user)
    }

    const createdocument = user => {
        console.log(user)
        setTimeout(() => { }, 1000)

    }
    return (
        <main className='Auth p-2 p-md-4'>
            <Fade>

                <div className="container rounded-3 card p-3 p-md-4">
                    <Title level={1} className='text-dark fw-bold text-center outline-dark user-select-none'>  <span className='d-flex justify-content-start align-items-center '><Link to='/'><i class="bi bi-arrow-left-circle-fill text-dark fw-bold fs-3"></i></Link></span>Register</Title>
                    <Form layout='vertical' >
                        <Row gutter={16} >
                            <Col xs={24} md={12}>
                                <Form.Item label='First Name' required>
                                    <Input placeholder='Enter First Name' required type='text' name='firstName' size='large' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Col xs={24} md={12}>
                                <Form.Item label='Last Name' required>
                                    <Input placeholder='Enter Last Name' type='text' name='lastName' size='large' onChange={handleChange} />
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
                                    <Input.Password placeholder='Enter Password Again' required type='text' name='confirmPassword' size='large' onChange={handleChange} />
                                </Form.Item>
                            </Col>
                            <Button block color='default' variant='solid' onClick={handleSubmit} htmlType='submit' loading={isProcessing}>Register</Button>
                        </Row>
                    </Form>
                </div>
            </Fade>
        </main>
    )
}

export default Register
