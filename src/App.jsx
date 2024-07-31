import './App.css';
import { Route, Routes } from "react-router-dom"; // Importing routing components from react-router-dom
import Login from './components/Login'; // Importing the Login component
import SignUp from './components/SignUp'; // Importing the SignUp component
import Home from './components/Home'; // Importing the Home component
import Navbar from './components/Navbar'; // Importing the Navbar component
import { useState } from 'react'; // Importing the useState hook from React

function App() {
  // State to keep track of the current page, initially set to 'signup'
  const [currentPage, setCurrentPage] = useState('signup');
  // State to keep track of the current user, initially set to null
  const [user, setUser] = useState(null);

  // Function to handle user signup
  const handleSignup = (userData) => {
    // Update the user state with the provided userData
    setUser(userData);
    // Set the current page to 'profile' after signup
    setCurrentPage('profile');
  };

  // Function to handle user login
  const handleLogin = (userData) => {
    // Store user data in local storage
    localStorage.setItem('userFormData', JSON.stringify(userData));
    // Update the user state with the provided userData
    setUser(userData);
    // Set the current page to 'profile' after login
    setCurrentPage('profile');
  };

  return (
    <>
      {/* Navbar component with currentPage prop */}
      <Navbar currentPage={currentPage} />
      {/* Routes for different pages */}
      <Routes>
        {/* Route for the SignUp component */}
        <Route path="/" element={currentPage === 'signup' && <SignUp onSignup={handleSignup} />} />
        {/* Route for the Login component */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Route for the Home component */}
        <Route path="/home" element={currentPage === 'profile' && <Home />} />
      </Routes>
    </>
  );
}

export default App;
