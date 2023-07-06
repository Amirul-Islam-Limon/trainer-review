import React, { useContext } from 'react';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub, FaFacebook } from 'react-icons/fa';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './Login.css';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const { logInWithEmailPassword, logInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const MySwal = withReactContent(Swal);
    useTitle("Login")

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInWithEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .then(error => {
                console.log(error);
        })
    }

    const handleGoogleLogIn = () => {
        logInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    email: user.email
                }

                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type":"application/json"
                    },
                    body:JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("review-token", data.token)
                        console.log(data)
                    })
                
                // navigate(from, { replace: true });
            })
            .then(error => {
                console.log(error);
        })
    }

    const handleFacebookLogIn = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops... Sorry!',
            text: "Developer Didn't Integrate This Yet!!",
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }
    
    const handleGithubLogIn = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops... Sorry!',
            text: "Developer Didn't Integrate This Yet!!",
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }

    return (
        <div className='lg:w-1/2 mx-auto'>
            <h2 className='lg:text-5xl text-center font-semibold'><span className='border-b-4 border-yellow-500'> Log</span><span className='pb-0.5 border-b border-gray-500'>In</span></h2>
            <form onSubmit={handleLogIn} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                </label>
                </div>
                <div className="or-section">
                    <div className='lines'>
                        <div className='circle'>
                            <p className='text-center'>or</p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-3'>
                        <FaGoogle onClick={handleGoogleLogIn} className='px-1 mx-1 text-3xl hover:text-red-500 cursor-pointer'></FaGoogle>
                        <FaFacebook onClick={handleFacebookLogIn} className='px-1 mx-1 text-3xl hover:text-blue-500 cursor-pointer'></FaFacebook>
                        <FaGithub onClick={handleGithubLogIn} className='px-1 mx-1 text-3xl hover:text-green-500 cursor-pointer'></FaGithub>
                    </div>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;