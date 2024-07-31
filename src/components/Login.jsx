import React, { useState } from 'react'
// Toast notifications
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../components/Tost";
import { useNavigate } from "react-router-dom"; // Importing navigation hook

function Login({ onLogin }) {
  // State to handle login data
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem('userFormData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      // Check if the provided email and password match the stored data
      if (loginData.email === userData.email && loginData.password === userData.password) {
        console.log('Login successful!');
        onLogin(userData); // Trigger login callback
        notify("You signed up successfully", "success");
        // Redirect to home page after a short delay
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        console.log('Invalid email or password');
        notify("Invalid email or password", "warning");
      }
    } else {
      console.log('No user data found');
      notify("No user data found", "warning");
    }
  };

  return (
    <>
      <section className='flex justify-center items-center'>
        <ToastContainer />
<div className="flex h-screen w-screen items-center overflow-hidden px-2">
  {/* Login */}
  <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
    <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0" />
    <div className="mx-auto mb-2 space-y-3">
      <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
      <p className="text-gray-500">Sign in to access your account</p>
    </div>
    <form onSubmit={handleSubmit}>
    <div>
      <div className="relative mt-2 w-full">
        <input type="text" id="email" defaultValue="email@gmail.com" name='email' value={loginData.email} onChange={handleChange} className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
        <label htmlFor="email"  className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Email </label>
      </div>
    </div>
    <div>
      <div className="relative mt-2 w-full">
        <input type="text" id="password" name='password' value={loginData.password} onChange={handleChange} className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
        <label htmlFor="password" className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"> Enter Your Password</label>
      </div>
    </div>
    <div className="flex w-full items-center mt-4">
      <button className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white" type='submit'>Login</button>
      <a className="w-full text-center text-sm font-medium text-gray-600 hover:underline" href="#">Forgot your password?</a>
    </div>
    <p className="text-center text-gray-600">
      Don't have an account?
      <a  onClick={()=> navigate("/")} className="whitespace-nowrap font-semibold text-gray-900 hover:underline" >Sign up</a>
    </p>
    </form>
    
  </div>
</div>
    </section>
    </>
  
   


  )
}

export default Login