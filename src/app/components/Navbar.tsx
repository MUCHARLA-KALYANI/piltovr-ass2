"use client";
import Link from "next/link";
import { useState } from "react";
import Departments from "./Departments";
import Image from "next/image";
import logoImage from "../assets/vishnu.png";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuLink, NavigationMenuItem } from "@/components/ui/navigation-menu";
import {Card, CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import connectDB from "../lib/mongodb";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const UserCard = ({ userData }: { userData: User }) => {
  return (
    <Card className="user-card border p-4 rounded-md text-black bg-white shadow-lg">
      <CardHeader>
      <h2 className="text-xl font-bold mb-2">{userData.name}</h2>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Phone:</strong> {userData.phone}</p>
      <p><strong>Address:</strong> {`${userData.address.street}, ${userData.address.suite}, ${userData.address.city}, ${userData.address.zipcode}`}</p>
      <p><strong>Website:</strong> {userData.website}</p>
      <p><strong>Company:</strong> {userData.company.name}</p>
      </CardHeader>
    </Card>
  );
};

const UserCardOverlay = ({ userData, onClose }: { userData: User[]; onClose: () => void }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="bg-white p-8 rounded-lg relative max-h-full overflow-y-auto w-full max-w-4xl">
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 hover:text-red-600"
        >
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
        <div className="grid grid-cols-1 gap-4">
          {userData.map((user: User) => (
            <UserCard key={user.id} userData={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const router = useRouter();
  const [userData, setUserData] = useState<User[]>([]);


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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formErrors = { username: "", password: "" };
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
      { username: "Bret", password: "password1" },
      { username: "user2", password: "password2" },
    ];
  
    const isValidCredentials = validCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );
  
    if (!isValidCredentials) {
      formErrors.username = "Invalid username or password";
      isValid = false;
    }
  
    if (!isValid) {
      setErrors(formErrors);
      return;
    }
  
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUserData(response.data);
      handleCloseLogin();
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  const handleCloseLogin = () => {
    setShowLoginForm(false);
    setErrors({ username: "", password: "" });
  };

  return (
    <nav className="bg-green-800 text-white sm:p-4 md:flex md:justify-between md:items-center fixed top-0 left-0 right-0 z-50 shadow-sm dark:bg-gray-950/90">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src={logoImage}
            alt="Logo"
            width={90}
            height={80}
            className="mr-2 ml-0"
          />
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
          <Link href="/studentsList" className="mx-2 hover:text-gray-300 ">
           STUDENTS
          </Link>
          <Link href="/contact" className="mx-2 hover:text-gray-300">
            CONTACT
          </Link>
          <Link href="/signup" className="mx-2 bg-white text-green px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 text-black">
            Signup
          </Link>
          <Button
            onClick={handleLogin}
            className="mx-2 bg-white text-green px-4 py-2 rounded-md hover:bg-gray-300 transition-colors duration-300 text-black"
          >
            Login
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
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
                className="text-gray-800 hover:text-red-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 p-2 border rounded w-full text-black"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 border rounded w-full text-black"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password}
                  </p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
     {userData.length > 0 && (
  <UserCardOverlay
    userData={userData}
    onClose={() => setUserData([])}
  />
)}

    </nav>
  );
};
