import React from 'react';
import { Navbar } from '../components/Navbar';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <div style={{ backgroundImage: `url('https://vishnu.edu.in/images/hostels1.jpg')`, backgroundSize: 'cover' }}>
        <div className="container mx-auto py-8" style={{ marginTop: '105px', backgroundColor: 'rgba(255, 255, 255, 0.4)', color: 'black' }}>
          <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="mb-4 p-4 bg-white bg-opacity-80">
              <h2 className="text-2xl font-bold mb-4">College Address</h2>
              <p className="mb-4">
                Shri Vishnu Engineering College for Women,<br />
                Bhimavaram - 534 202,<br />
                West Godavari District,<br />
                Andhra Pradesh, India.
              </p>
            </div>
            <div className="mb-4 p-4 bg-white bg-opacity-80">
              <h2 className="text-2xl font-bold mb-4">Department Contacts</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Information Technology</h3>
                <p>Phone: +91 1234 567890</p>
                <p>Email: it@svecw.edu.in</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Computer Science</h3>
                <p>Phone: +91 9876 543210</p>
                <p>Email: cs@svecw.edu.in</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Electronics and Communication</h3>
                <p>Phone: +91 5678 901234</p>
                <p>Email: ec@svecw.edu.in</p>
              </div>
            </div>
            <div className="mb-4 p-4 bg-white bg-opacity-80">
              <h2 className="text-2xl font-bold mb-4">Administration Contacts</h2>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Principal's Office</h3>
                <p>Phone: +91 2345 678901</p>
                <p>Email: principal@svecw.edu.in</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-bold">Admissions Office</h3>
                <p>Phone: +91 9012 345678</p>
                <p>Email: admissions@svecw.edu.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
