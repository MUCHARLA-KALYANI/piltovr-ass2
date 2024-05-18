"use client";
import { useState, useEffect } from "react";

interface Student {
  name: string;
  email: string;
  phone: string;
  address: string;
  birth: string;
  course: string;
  additional: string;
}


export default function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/student");
      const data = await response.json();
      setStudents(data.students);
      console.log("fetched.......")
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Date of Birth</th>
              <th className="px-4 py-2">Course</th>
              <th className="px-4 py-2">Additional Information</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{student.name}</td>
                <td className="px-4 py-2">{student.email}</td>
                <td className="px-4 py-2">{student.phone}</td>
                <td className="px-4 py-2">{student.address}</td>
                <td className="px-4 py-2">{student.birth}</td>
                <td className="px-4 py-2">{student.course}</td>
                <td className="px-4 py-2">{student.additional}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}