"use client";
import { useState, ChangeEvent, useEffect, FormEvent } from "react";
import Link from "next/link";

export default function SignupForm() {

    interface FormData {
        name: string;
        email: string;
        phone: string;
        address: string;
        birth: string;
        course: string;
        additional: string;
    }

    const [name, setName] = useState<FormData["name"]>("");
    const [email, setEmail] = useState<FormData["email"]>("");
    const [phone, setPhone] = useState<FormData["phone"]>("");
    const [address, setAddress] = useState<FormData["address"]>("");
    const [birth, setBirth] = useState<FormData["birth"]>("");
    const [course, setCourse] = useState<FormData["course"]>("");
    const [additional, setAdditional] = useState<FormData["additional"]>("");
    const[error,setError]=useState([]);
    const[success,setSuccess]=useState(false);

    const [errors, setErrors] = useState<Record<keyof FormData, string>>({
        name: '',
        email: '',
        phone: '',
        address: '',
        birth: '',
        course: '',
        additional: '',
    });

    useEffect(() => {
        const initialErrors: Record<keyof FormData, string> = {
            name: '',
            email: '',
            phone: '',
            address: '',
            birth: '',
            course: '',
            additional: '',
        };
        setErrors(initialErrors);
    }, []);


    const validate = () => {
        let tempErrors: Record<keyof FormData, string> = {
            name: '',
            email: '',
            phone: '',
            address: '',
            birth: '',
            course: '',
            additional: '',
        };

        tempErrors.name = name ? '' : 'Name is required.';

        tempErrors.email = /\S+@\S+\.\S+/.test(email) ? '' : 'Email is invalid.';

        tempErrors.phone = phone ? '' : 'Phone number is required.';

        tempErrors.address = address ? '' : 'Address is required.';

        tempErrors.birth = birth ? '' : 'Date of birth is required.';

        tempErrors.course = course ? '' : 'Course is required.';

        setErrors(tempErrors);

        return Object.values(tempErrors).every(x => x === '');
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log("Name: ", name);
            console.log("Email: ", email);
            console.log("Phone: ", phone);
            console.log("Address: ", address);
            console.log("Birth: ", birth);
            console.log("Course: ", course);
            console.log("Additional Information: ", additional);
    
            const res = await fetch("api/student", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    address,
                    birth,
                    course,
                    additional,
                }),
            });
    
            if (res.ok) {
                try {
                    const {msg,success}= await res.json();
                    setError(msg);
                    setSuccess(success);
                    
                } catch (err) {
                    console.error("Error parsing server response:", err);
                }
            } else {
                console.error("Server responded with an error:", res.status);
            }
        }
    };

    return <>
        <div className="container mx-auto mt-10 p-6 bg-white shadow-md rounded-lg max-w-md">
            <form onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Student Signup</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Name:
                    </label>
                    <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black" id="name"
                        name="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        id="email"
                        name="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700">
                        Phone Number:
                    </label>
                    <input
                        type="tel"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        required
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700">
                        Address:
                    </label>
                    <textarea
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        id="address"
                        name="address"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        required
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="dob" className="block text-gray-700">
                        Date of Birth:
                    </label>
                    <input
                        type="date"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        id="birth"
                        name="birth"
                        value={birth}
                        onChange={e => setBirth(e.target.value)}
                        required
                    />
                    {errors.birth && <p className="text-red-500 text-sm">{errors.birth}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="course" className="block text-gray-700">
                        Course:
                    </label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        id="course"
                        name="course"
                        value={course}
                        onChange={e => setCourse(e.target.value)}
                        required
                    />
                    {errors.course && <p className="text-red-500 text-sm">{errors.course}</p>}
                </div>

                <div className="mb-4">
                    <label htmlFor="additional" className="block text-gray-700">
                        Additional Information:
                    </label>
                    <textarea
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                        id="additional"
                        name="additional"
                        value={additional}
                        onChange={e => setAdditional(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Submit
                </button>
            </form>
            <div className="mt-4">
                <Link href="/">
                    <span className="text-blue-500 hover:underline">Back to Home</span>
                </Link>
            </div>
        </div>
    </>
}