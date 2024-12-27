import React, { useContext, useState } from 'react'

import { AuthContext } from '../../provider/AuthProvider';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../shared/Header';
import Footer from '../shared/Footer';




const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location in the login page', location)

  const handleLogin = e => {
    e.preventDefault();

    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    setIsLoading(true);
    signInUser(email, password)
      .then(result => {
        console.log(result.user);
        toast.success('Login successful! Welcome!', { autoClose: 3000 })
        // navigate after login
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);
        toast.error('Login not successful. Please try again!', { autoClose: 3000 });
      })
      .finally(() => setIsLoading(false));
  };

  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then(result => {
        console.log(result.user)
        toast.success('Google login successful! Welcome!', { autoClose: 3000 });
        // navigate after login
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);
        toast.error('Google login failed. Please try again!', { autoClose: 3000 });
      })
  }


  const handleGithubLogin = () => {
    signInWithGithub()
      .then(result => {
        console.log(result.user)
        toast.success('Github login successful! Welcome!', { autoClose: 3000 });
        // navigate after login
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error)
        toast.error('Github login failed. Please try again!', { autoClose: 3000 });
      })
  }

  return (
    <div>
      <Header></Header>
      <div>
        <div className=" flex-col my-8 rounded-xl gap-2 ">
          <div className="text-center mb-10">
            <p className='mt-8'>Welcome Back!</p>
            <h1 className="text-5xl font-bold ">Login now!</h1>
          </div>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto mt-5'>
            <div className=" card w-full hover:shadow-2xl sm:grid-cols-1 md:grid-cols-2 lg:col-span-1">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type={showPassword ? "text" : "password"}
                    name='password'
                    placeholder="password"
                    className="input input-bordered"
                    required />
                  <span className='absolute bottom-4 right-3' onClick={() => setShowPassword(!showPassword)}>
                    {
                      showPassword ? <FaEyeSlash /> : <FaEye />
                    }
                  </span>
                </div>
                <div className="form-control mt-4">
                  <button className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Logging in ...' : 'Login'}
                  </button>
                </div>
              </form>
            </div>
            <div className='card w-full hover:shadow-2xl sm:grid-cols-1 md:grid-cols-2 lg:col-span-3 text-center content-center '>
              <h2 className='mb-8 text-lg'> Or Login With</h2>
              <div className='place-content-center flex gap-5 mb-8 '>
                <button className='btn btn-ghost' onClick={handleGoogleLogin}><FcGoogle className=' w-7 h-7' /></button>
                <button className='btn btn-ghost' onClick={handleGithubLogin}><IoLogoGithub className=' w-7 h-7' /></button>
              </div>
              <p className='text-center font-semibold mb-4 text-lg'>New to this website! Please
                <Link className='text-blue-700' to="/register"> Register</Link> </p>
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Login