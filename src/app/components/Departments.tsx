import React, { useState } from 'react';
import Link from 'next/link';

const Departments = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMouseOverDropdown, setIsMouseOverDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleMouseEnterDropdown = () => {
    setIsMouseOverDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setIsMouseOverDropdown(false);
  };

  return (
    <div className="relative">
      <div
        className="mx-2 hover:text-gray-300"
        onMouseEnter={toggleDropdown}
        onMouseLeave={() => {
          if (!isMouseOverDropdown) {
            toggleDropdown();
          }
        }}
      >
        DEPARTMENTS
      </div>
      {(isDropdownVisible || isMouseOverDropdown) && (
        <div
          className="absolute left-0 mt-2 bg-green-800 py-2 w-40 shadow-md"
          onMouseEnter={handleMouseEnterDropdown}
          onMouseLeave={handleMouseLeaveDropdown}
        >
          <Link
            href="/department/information-technology"
            className="block px-4 py-2 hover:bg-green-600 hover:text-white transition duration-150"
          >
            Information Technology
          </Link>
          <Link
            href="/department/computer-science"
            className="block px-4 py-2 hover:bg-green-600 hover:text-white transition duration-150"
          >
            Computer Science
          </Link>
          <Link
            href="/department/electronics-communication"
            className="block px-4 py-2 hover:bg-green-600 hover:text-white transition duration-150"
          >
            Electronics and Communication
          </Link>
        </div>
      )}
    </div>
  );
};

export default Departments;