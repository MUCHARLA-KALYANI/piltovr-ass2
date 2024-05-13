import Link from "next/link";
 
export const Navbar = () =>{
    return(
        <nav className="bg-green-800 text-white p-2 sm:p-6 md:flex md:justify-between md:items-center ">
            <div className="container mx-auto flex justify-between items-center">
            <img src="https://media.licdn.com/dms/image/C5603AQF1FuJf_7mDUw/profile-displayphoto-shrink_400_400/0/1600153132989?e=2147483647&v=beta&t=Dm3DsZ7L06YZC2eQ6LHaXxWYmO6A_C_ihbJZGlM648I"  
                     width="50" height="100" alt="Logo" /> 
                <a href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLF-ZskdeE6YBIcmcZjCBXIHfyie0c4CSo2QLrjqvUWg&s" className="text-2xl font-bold">MYLOGO</a>
                <div className="hidden md:flex">
                    <Link rel="stylesheet" href="/" className="mx-2  hover:text-gray-300">HOME</Link>
                    <Link rel="stylesheet" href="/about" className="mx-2  hover:text-gray-300">ABOUT</Link>
                    <Link rel="stylesheet" href="/department" className="mx-2  hover:text-gray-300">DEPARTMENTS</Link>
                    <Link rel="stylesheet" href="/contact" className="mx-2  hover:text-gray-300">CONTACT US</Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button></button>
                </div>
            </div>

        </nav>
    );

};


