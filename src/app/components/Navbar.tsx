"use client"
import Link from "next/link";
import { useState } from "react";
import Departments from "./Departments";
import Image from "next/image";
import logoImage from "../assets/vishnu.png";
import { useRouter } from "next/navigation";


export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBranchMenuOpen, setIsBranchMenuOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" }); 
  const router = useRouter();

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

  const handleLogin = () => {
    setShowLoginForm(!showLoginForm);
  };

  const toggleBranchMenu = () => {
    setIsBranchMenuOpen(!isBranchMenuOpen);
    if (!isBranchMenuOpen) {
      document.querySelector("#branches-menu")?.scrollIntoView({ behavior: "smooth"});
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let formErrors = { username: "", password:"" };
    let isValid = true;

    if (!username.trim()) {
      formErrors.username = "Username is required";
      isValid = false;
    }

    if (!password.trim()) {
      formErrors.password = "Password is required";
      isValid = false;
    }
    const validCredentials = [
      { username: "user1", password:"password1"},
      { username: "user2", password: "password2" },
    ];
  
    const isValidCredentials = validCredentials.some(
      cred => cred.username === username && cred.password === password
    );
  
    if (!isValidCredentials) {
      formErrors.username = "Invalid username or password";
      isValid = false;
    }
  
    if (!isValid) {
      setErrors(formErrors);
      return;
    }

    
    const user = {
      username: username,
      password: password, 
    };

    
    console.log("User Details:", user);
    handleCloseLogin();
    router.push("/");
  };

  const handleCloseLogin = () => {
    setShowLoginForm(false);
    setErrors({ username: "", password:""});
  };

  return (
    <nav className="bg-green-800 text-white sm:p-4 md:flex md:justify-between md:items-center fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={logoImage}
            alt="Logo"
            width={90}
            height={80}
            className="mr-2 ml-0"
          />
          <span
            className="text-1xl ml-0"
            style={{ fontSize: "20px", fontWeight: "inherit" }}
          >
            SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN<br /><span className="text-black">BHIMAVARAM</span> 
          </span>
        </div>
        <div className={getMenuClasses()}>
          <Link href="/" className="mx-2 hover:text-gray-300">
            HOME
          </Link>
          <Link href="/about" className="mx-2 hover:text-gray-300">
            ABOUT
          </Link>
          <Link href="/departments" className="mx-2 hover:text-gray-300">
            <Departments />
          </Link>
          <Link href="/branch" className="mx-2 hover:text-gray-300 ">
            BRANCHES
          </Link>
          
           
          <Link href="/contact" className="mx-2 hover:text-gray-300">
            CONTACT
          </Link>
          <button
            onClick={handleLogin}
            className="mx-2 bg-white text-green-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 text-black"
          >
            Login
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
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
      {showLoginForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg animate-slide-down">
            <div className="flex justify-end">
              <button
                onClick={handleCloseLogin}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block mb-2 font-semibold text-black">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                />
                {errors.username && <span className="text-red-500">{errors.username}</span>}
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 font-semibold text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-black"
                />
                {errors.password && <span className="text-red-500">{errors.password}</span>}
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-800 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};
