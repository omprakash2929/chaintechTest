import React, { useState, useEffect } from "react";
// Toast notifications
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { notify } from "../components/Tost";
import { useNavigate } from "react-router-dom";

function Home() {
  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
  });

  // Hook for navigation
  const navigate = useNavigate();

  // Fetching stored data from localStorage when component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("userFormData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update localStorage with new form data
    localStorage.setItem("userFormData", JSON.stringify(formData));
    // Show success notification
    notify("Account Details Successfully Updated", "success");
  };
  return (
    <>
      <section className="flex items-center justify-center">
        <ToastContainer />
        <form onSubmit={handleSubmit}>
          <div className="my-4 w-[160%] border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
            <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start">
              <div className="shrink-0 mr-auto flex flex-col justify-center items-center text-center sm:py-3">
                <p className="font-medium  text-center">Account Details</p>
                <p className="text-sm text-gray-600">
                  Edit your account details
                </p>
              </div>
              
            </div>

            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Name</p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Email</p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@domain.com"
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Phone</p>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Address</p>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>
            <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
              <p className="shrink-0 w-32 font-medium">Password</p>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
              />
            </div>

            <div className="flex justify-end py-4 ">
              {/* <button className="mr-2 rounded-lg border-2 px-4 py-2 font-medium text-gray-500 focus:outline-none focus:ring hover:bg-gray-200">
                Cancel
              </button> */}
              <button
                className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Home;
