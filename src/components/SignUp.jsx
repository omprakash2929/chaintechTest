import React,{useState} from 'react'

/// Importing Toast notifications
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../components/Tost";

// Importing navigation hook from react-router
import { useNavigate } from "react-router-dom";

function SignUp({ onSignup }) {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: ''
  });

  // Hook for navigation
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    // Store formData in local storage
    localStorage.setItem('userFormData', JSON.stringify(formData));
    // Trigger signup callback with form data
    onSignup(formData);
    // Show success notification
    notify("You signed up successfully", "success");
    // Redirect to home page after a short delay
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

 
  return (
    <>
    <section className='flex justify-center items-center'>
      <ToastContainer />
    <div className="bg-white w-screen font-sans text-gray-900  ">
  <div className=" ">
    <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
      <div className="mx-2 py-12 text-center md:mx-auto md:w-2/3 md:py-20">
        <h1 className="mb-4 text-3xl font-black leading-4 sm:text-5xl xl:text-6xl">Sign up</h1>
        <div className="text-lg sm:text-xl">
          <div className>
            <p className="mb-4">Let's do this! Chaintech Network Assignment </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="md:w-2/3 mx-auto w-full pb-16 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl">
    <form className="shadow-lg mb-4 rounded-lg border border-gray-100 py-10 px-8" onSubmit={handleSubmit} >
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="name">Name</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="name" type="text" placeholder="Name" value={formData.name} onChange={handleChange} name='name' required /><span className="my-2 block" /></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="email">E-mail</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="email" type="email" placeholder="email" required value={formData.email}  name="email"onChange={handleChange} /><span className="my-2 block" /></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="phone">Phone</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="phone" type="phone" placeholder="Phone" required value={formData.phone} name='phone' onChange={handleChange} /><span className="my-2 block" /></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="Address">Address</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="Address" type="text" placeholder="Address" required value={formData.address} name='address' onChange={handleChange} /><span className="my-2 block" /></div>
      <div className="mb-4"><label className="mb-2 block text-sm font-bold" htmlFor="password">Password</label><input className="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring" id="password" type="password" placeholder="******************" value={formData.password} name='password' onChange={handleChange} required /></div>
      <div className="mb-6">
        <label className="mb-2 flex text-sm"><input type="checkbox" name="accept" className="mr-2" required />
          <div className="text-gray-800">
            <p className>
              I accept the
              <a href="#" className="cursor-pointer text-blue-500 underline">terms of use</a>
              and
              <a href="#" className="cursor-pointer text-blue-500 underline">privacy policy</a>
            </p>
          </div></label>
      </div>
      <div className="flex items-center">
        <div className="flex-1" />
        <button className="cursor-pointer rounded bg-blue-600 py-2 px-8 text-center text-lg font-bold  text-white" type="submit">Create account</button>
        
      </div>
      
    </form>
    <p className="text-center text-gray-600">
    Already have an account?
      <a  onClick={()=> navigate("/login")} className="whitespace-nowrap font-semibold text-gray-900 hover:underline" >Sign In</a>
    </p>
  </div>
</div>
    </section>
   
   
    </>
  

  
  )
}

export default SignUp