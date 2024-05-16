"use client"
import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import styles from "./Branch.module.css";

interface Branch {
  name: string;
  color: string;
}

const branches: Branch[] = [
  { name: "Hyderabad", color: "#4631a3" },
  { name: "Bhimavaram", color: "#15803d" },
];

const BranchesMenu: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  const handleBranchClick = (branch: Branch) => {
    setSelectedBranch(branch);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.menu}>
          {branches.map((branch) => (
            <div
              key={branch.name}
              className={`${styles.menuItem} ${
                selectedBranch.name === branch.name ? styles.selected : ""
              }`}
              onClick={() => handleBranchClick(branch)}
              style={{ backgroundColor: branch.color }}
            >
              {branch.name}
            </div>
          ))}
        </div>
        <div
          className={styles.branchName}
          style={{ backgroundColor: selectedBranch.color }}
        >
          {selectedBranch.name}
        </div>
      </div>
    </div>
  );
};

export default BranchesMenu;
