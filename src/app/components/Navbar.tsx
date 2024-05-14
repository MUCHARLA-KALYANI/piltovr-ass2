"use client";
import Link from "next/link";
import { useState } from "react";
import Departments from "./Departments";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function getMenuClasses() {
    let menuClasses = [];
    if (isOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "top-[60px]",
        "bg-green-800",
        "w-full",
        "flex-col",
        "p-4",
        "left-0",
        "gap-10",
      ];
    } else {
      menuClasses = ["hidden", "md:flex"];
    }
    return menuClasses.join(" ");
  }

  return (
    <nav className="bg-green-800 text-white  sm:p-4 md:flex md:justify-between md:items-center fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center ">
          <img
            src="https://www.pikpng.com/pngl/b/270-2700536_sri-vishnu-educational-society-bv-raju-institute-of.png"
            width="90"
            height="80"
            alt="Logo"
            className="mr-2 ml-0"
          />
        
          <span className="text-1xl  ml-0" style={{ fontSize: "20px", fontWeight:'inherit'}}>
            SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN<br>
            </br>BHIMAVARAM
          </span>
          </div>
       
        <div className={getMenuClasses()}>
          <Link
            rel="stylesheet"
            href="/"
            className="mx-2 hover:text-gray-300"
          >
            HOME
          </Link>
          <Link
            rel="stylesheet"
            href="/about"
            className="mx-2 hover:text-gray-300"
          >
            ABOUT
          </Link>
         <Link href="/departments" className="mx-2 hover:text-gray-300"><Departments /></Link> 
          <Link
            rel="stylesheet"
            href="/contact"
            className="mx-2 hover:text-gray-300"
          >
            CONTACT US
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="CurrentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};