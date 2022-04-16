import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const nevigate = useNavigate()

    const handleForm = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email,password)
    }
 
    const nevigateRegister = event => {
        nevigate('/register')
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-primary'>Please Log In</h2>
        <Form onSubmit={handleForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>        

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
         <p>New to Genius Car ? <Link to='/register' className='text-danger pe-auto text-decoration-none' onClick={nevigateRegister}>Please Register</Link></p>
        </div>
    );
};

export default LogIn;