## Demo

https://66aa31cb7cce8a2c33b97c83--zesty-hummingbird-0de13f.netlify.app/

# React Authentication and Profile Management App

This project is a simple React application that provides user authentication (signup and login) and profile management functionality. It demonstrates local storage for persisting user data and React Router for navigation between different pages. Additionally, the app uses React Toastify for displaying notifications.

## Table of Contents
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Functionality](#functionality)
  - [Signup](#signup)
  - [Login](#login)
  - [Profile](#profile)
- [Components](#components)
  - [App Component](#app-component)
  - [Navbar Component](#navbar-component)
  - [SignUp Component](#signup-component)
  - [Login Component](#login-component)
  - [Home Component](#home-component)
- [Local Storage](#local-storage)
- [Routing](#routing)
- [Toast Notifications](#toast-notifications)

## Technologies Used
- **React**: For building the user interface.
- **React Router**: For routing between different pages.
- **React Toastify**: For displaying notifications.
- **CSS**: For styling the components.

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone github.com/omprakash2929/chaintechTest
   cd chaintechTest
   npm install
   npm run dev
   ```

   
# Functionality

**Signup**

Users can sign up by providing their name, email, phone, password, and address.
The user data is stored in local storage upon successful signup.
A success notification is displayed, and the user is redirected to the profile page.

**Login**

Users can log in using their email and password.
The login credentials are validated against the data stored in local storage.
Upon successful login, a success notification is displayed, and the user is redirected to the profile page.

**Profile**

The profile page displays the user's information.
Users can update their profile information, which is then updated in local storage.
A success notification is displayed upon successful update.

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express


## Demo

Insert gif or link to demo




