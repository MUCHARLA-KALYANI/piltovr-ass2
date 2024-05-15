import React from "react";
import { Navbar } from "./components/Navbar";

const HomePage = () => {
  return (
    <div>
      <div>
      <Navbar />
      </div>
      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_x1EeCfbzX_hog9prJtOUWIXkyAg3wQ-9Cb63_He8Ah8c2faFIhSZrcJ9D3tR3GMiFdo&usqp=CAU")`,
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundSize: "25%",
          minHeight: "calc(60vh - 80px)", 
          marginTop:"100px",// Adjust the height as needed
          justifyContent:"center"
        }}
      >
        <div className="bg-black bg-opacity-50 min-h-screen">
          <div className="container mx-auto py-8 pt-20" style={{ marginTop: "50px "}}>
            <header className="text-center mb-8 text-white">
              <h1 className="text-4xl font-bold mb-4">Welcome to SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN</h1>
              <p className="text-lg">Discover a world of knowledge and growth.</p>
            </header>
            <main className="text-white">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">About Us</h2>
                <p>
                  Our college has a rich history dating back to 2001, rooted in a commitment to academic excellence and personal growth. With a diverse range of programs and a talented faculty, we strive to empower students with the knowledge and skills they need to succeed in their chosen fields.
                </p>
              </section>
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p>
                  Our mission is to provide a transformative educational experience that fosters intellectual curiosity, critical thinking, and a passion for lifelong learning. We strive to create an inclusive and supportive environment where students can explore their interests, challenge themselves, and grow into well-rounded individuals prepared for the challenges of the modern world.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold mb-4">Explore Our Departments</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Information Technology</h3>
                    <p className="text-gray-300">
                      Dive into the world of technology and learn how to create innovative solutions.
                    </p>
                  </div>
                  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Computer Science</h3>
                    <p className="text-gray-300">
                      Explore the fascinating realm of computer science and unlock the power of programming.
                    </p>
                  </div>
                  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-2">Electronics and Communication</h3>
                    <p className="text-gray-300">
                      Discover the cutting-edge world of electronics and communication technology.
                    </p>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;