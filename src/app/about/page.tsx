import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import Image from 'next/image';
import historyImage from '../assets/bvraju.jpg';
import missionImage from '../assets/tech.jpg';
import valuesImage from '../assets/yoga.jpg';

const about = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="container mx-auto py-8" style={{ marginTop: "120px" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 text-center" style={{ fontWeight: 'bold', fontSize: '30px', fontFamily: 'TimesNewRoman' }}>
            {'"Discover the rich history, mission, and values that shape our institution."'}
          </p>
          <div className="flex flex-col gap-8">
            <div className="bg-white text-black rounded-lg p-6 flex items-center">
              <Image
                src={historyImage}
                alt="Our History"
                className="w-64 h-48 mr-6"
                width={256}
                height={192}
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">Our History</h2>
                <p>
                  Our college was founded in 2001 with a vision to provide quality education and foster a vibrant academic community. Over the years, we have grown into a renowned institution, attracting students from diverse backgrounds and offering a wide range of programs.
                </p>
                <p className="mt-4">
                  Through our commitment to excellence and innovation, we have consistently produced graduates who have gone on to make significant contributions in their respective fields, both locally and globally.
                </p>
              </div>
            </div>
            <div className="bg-white text-black rounded-lg p-6 flex items-center">
              <Image
                src={missionImage}
                alt="Our Mission"
                className="w-64 h-48 mr-6"
                width={256}
                height={192}
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p>
                  Our mission is to empower students with the knowledge, skills, and values required to excel in their chosen careers and become responsible global citizens. We strive to create an environment that nurtures intellectual curiosity, critical thinking, and a passion for lifelong learning.
                </p>
              </div>
            </div>
            <div className="bg-white text-black rounded-lg p-6 flex items-center">
              <Image
                src={valuesImage}
                alt="Our Values"
                className="w-64 h-48 mr-6"
                width={256}
                height={192}
              />
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="list-disc list-inside">
                  <li className="mb-2">Excellence: We are committed to maintaining the highest standards in teaching, research, and service.</li>
                  <li className="mb-2">Inclusivity: We embrace diversity and foster an inclusive environment where all individuals are respected and valued.</li>
                  <li className="mb-2">Integrity: We uphold ethical principles and promote honesty, transparency, and accountability in all our endeavors.</li>
                  <li className="mb-2">Innovation: We encourage creativity, critical thinking, and the development of innovative solutions to address global challenges.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/" className="inline-block mt-8 bg-green-800 text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors duration-300 items-center">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;