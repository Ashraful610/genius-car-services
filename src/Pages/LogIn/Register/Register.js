import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navaigateLogIN = event => {
        navigate('/login')
    }

    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value 
        const email = event.target.email.value 
         const password =event.target.password.value 

         console.log(name , email , password)
    }

    return (
        <div className='register-form'>
            <h2 className='text-primary m-2'>Please register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' className='m-2' placeholder='Your Name' required/>
                
                <input type="email" name="email" className='m-2' id="" placeholder='Enter Your Email' required/>
            
                <input type="password" name="password" className='m-2' placeholder='Enter Password' id="" required/>

                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navaigateLogIN}>Please Log In</Link></p>

        </div>
    );
};

export default Register;