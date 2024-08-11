# Hostel Management System

**Project Duration**: December 2023 – March 2024

**Project Description**: A user-centric platform designed for hostel authorities to efficiently manage operations, reducing reliance on Excel by 75%. The system includes features like secure user authentication, student profile management, room allocation, fee management, leave management, and report management.

![Hostel Management System Logo](https://raw.githubusercontent.com/DhavalDudheliya/Hostel_Management/main/FrontEnd/public/logo.png)

---

## Table of Contents
1. [About the Project](#about-the-project)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Installation](#installation)
5. [Contact](#contact)

---

## About the Project

### Overview
The Hostel Management System is a comprehensive solution for hostel authorities to manage day-to-day operations. It streamlines processes like room allocation, fee management, and leave tracking, significantly reducing manual effort and errors.

### Live Demo
[Link to Live Demo](https://apcnadiad.netlify.app/)

### Screenshots
Include screenshots showing the key features of the system, like the dashboard, fee management, and leave management screens.

---

## Tech Stack

- **Frontend**: React, Shadcn-ui, Flowbite, Recharts, Framer-motion, Yup, Formik
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Payment Integration**: Razorpay
- **Automation/Testing**: Puppeteer
- **Hosting**: Netlify, Render
- **Version Control**: Git, GitHub

---

## Features

- **Secure User Authentication**: Ensures that only authorized users can access the system.
- **Student Profile Management**: Manage and update student profiles efficiently.
- **Room Allocation**: Simplifies the process of allocating rooms to students.
- **Fee Management**: Includes online fee collection via Razorpay and allows generation and downloading of fee receipts.
- **Leave Management**: Tracks student absences in real-time, providing accurate data on student presence in the hostel.
- **Report Management**: Generate reports on various operations, aiding in better decision-making.

---

## Installation

### Prerequisites
- Node.js (version)
- MongoDB (local or cloud setup)
- npm or yarn

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DhavalDudheliya/Hostel_Management.git
   cd Hostel_Management

2. **Install dependencies**:
   ```bash
   # Install server dependencies
   cd backend
   npm install

   # Install client dependencies
   cd ../frontend
   npm install

3. Set up environment variables: 
   # Backend
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   RAZORPAY_KEY=your_razorpay_key
   RAZORPAY_SECRET=your_razorpay_secret

   # Frontend
   REACT_APP_API_URL=your_backend_api_url

4. Run the project:
   ```bash
   # Run the backend
   cd backend
   npm run dev

   # Run the frontend
   cd ../frontend
   npm start

## Contact

- Email: dhavaldudheliya77@gmail.com
- Phone No: +91 9157795624

