"use client";
import Link from "next/link";
import {useState} from "react";
 
export const Navbar = () =>{
    const [isOpen,setIsOpen]=useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    

    function getMenuClasses(){
        let menuClasses=[];
        if(isOpen){
            menuClasses=[
                "flex",
                "absolute",
                "top-[60px]",
                "bg-green-800",
                "w-full",
                "flex-col",
                "p-6",
                "left-0",
                "gap-10"
            ];

        }else{
            menuClasses=["hidden","md:flex"];
        }
        return menuClasses.join(" ");

    };
    return(
        <nav className="bg-green-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center ">
            <div className="container mx-auto flex justify-between items-center">
            <img src="https://media.licdn.com/dms/image/C5603AQF1FuJf_7mDUw/profile-displayphoto-shrink_400_400/0/1600153132989?e=2147483647&v=beta&t=Dm3DsZ7L06YZC2eQ6LHaXxWYmO6A_C_ihbJZGlM648I"  
                     width="50" height="100" alt="Logo" /> 
                {/* <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLF-ZskdeE6YBIcmcZjCBXIHfyie0c4CSo2QLrjqvUWg&s" className="text-2xl font-bold">MYLOGO</a> */}
                <div className = {getMenuClasses()} >
                    <Link rel="stylesheet" href="/" className="mx-2  hover:text-gray-300">HOME</Link>
                    <Link rel="stylesheet" href="/about" className="mx-2  hover:text-gray-300">ABOUT</Link>
                    {/* <Link rel="stylesheet" href="/department" className="mx-2  hover:text-gray-300">DEPARTMENTS</Link> */}
                    <div onMouseEnter={() => setIsDropdownOpen(true)}
                         onMouseLeave={() => setIsDropdownOpen(false)}
                         className="relative">
                        <Link href="/department" className="mx-2 hover:text-gray-300">DEPARTMENTS</Link>
                        {isDropdownOpen && (
                            <div className="absolute left-0 mt-2 bg-green-800 py-2 w-40">
                                {/* Add your department links here */}
                                <Link href="/department/1" className="block px-4 py-2 hover:bg-green-600">Department 1</Link>
                                <Link href="/department/2" className="block px-4 py-2 hover:bg-green-600">Department 2</Link>
                                {/* ... more links */}
                            </div>
                        )}
                    </div>
                    <Link rel="stylesheet" href="/contact" className="mx-2  hover:text-gray-300">CONTACT US</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={()=>{
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
                            { isOpen ? (
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 18L18 6M6 6l12 12"
                                ></path>
                            ):(
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


