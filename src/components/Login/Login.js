import './Login.css'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { loginWithEmail, setloading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target

        const email = form.email.value;
        const password = form.password.value;

        loginWithEmail(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })
            .finally(() => {
                setloading(false)
            })
    }

    return (
        <Form onSubmit={handleSubmit} className='w-md-50 mt-3 mb-3 p-2'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
            <div>
                {error}
            </div>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <div className='mt-2'>
                <small>New to our site? Please</small>
                <Link to='/register'> register!!</Link>
            </div>
        </Form>
    );
};

export default Login;