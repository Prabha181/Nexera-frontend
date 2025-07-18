import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import JobDetails from './components/pages/job/JobDetails';
import JobOpenings from './components/pages/job/JobOpenings';
import Footer from './Footer';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
      <Navigation />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job-details" element={<JobDetails />} />
          <Route path="/job-openings" element={< JobOpenings/>} />
        </Routes>
      </div>
      {/* <Subscribe /> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;