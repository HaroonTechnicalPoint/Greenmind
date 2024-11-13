import React, { useContext, useState } from 'react'
import { Col, Input, Row, Typography, Form, Button, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/Auth'
import { Fade } from 'react-awesome-reveal'
import { auth } from '../../Config/afirebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import natural_Plants_5 from '../../assets/images/plant2.jpg'

const { Title } = Typography



const Login = () => {


    const { setContextState } = useContext(AuthContext)

    let handleChange = e => { setState(s => ({ ...s, [e.target.name]: e.target.value })) }
    let [state, setState] = useState({ email: '', password: '' })

    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false);
    const handleSubmit = e => {
        e.preventDefault()

        let { email, password } = state

        const user = { email, password }
        if (!window.emailFormate.test(email)) { return message.error('please Enter Valid Email') }
        if (password < 6) { return message.error('Enter passwrod atleast 6 digits') }


        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
                setIsProcessing(true)
                if (result.user) {
                    setContextState({ isAuth: true, user: { email } })
                    navigate('/')
                    window.notify('Successfully Login', 'success')

                }
            }).catch((err) => {
                console.log(err)
                message.error(err.message)
            }).finally(() => {
                setIsProcessing(false)
            })



    }

    return (


        <main className='Auth p-2 p-md-4'>
            <Fade cascade damping={0.1}>
                <div className="container rounded-3 card p-3 p-md-4">
                    <Title level={1} className='text-dark fw-bold text-center outline-dark user-select-none'><span className='d-flex justify-content-start align-items-center '><Link to='/'><i class="bi bi-arrow-left-circle-fill text-dark fw-bold fs-3"></i></Link></span>Login</Title>
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
                            <Button block color="default" variant="solid" onClick={handleSubmit} htmlType='submit' loading={isProcessing} >Login</Button>
                        </Row>
                    </Form>
                </div>
            </Fade>
        </main>
    )
}

export default Login
