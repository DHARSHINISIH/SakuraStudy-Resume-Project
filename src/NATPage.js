// src/Pages/NATPage.js
import React from "react";
import { useLocation } from "react-router-dom";

export default function NATPage() {
  const location = useLocation();
  const { username, selectedLanguage } = location.state || { username: "Guest", selectedLanguage: "English" };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
      <div className="bg-white p-10 rounded-2xl shadow-2xl text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">
           {username}, Welcome to the NAT Page ({selectedLanguage}) 
        </h2>
        <p className="text-lg">Here you will find all resources and practice tests for the NAT Exam.</p>
      </div>
    </div>
  );
}
