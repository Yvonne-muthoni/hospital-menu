import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-linear from-blue-50 to-indigo-100 px-4 py-6 flex flex-col items-center justify-center">
      <Header />

      <div className="flex flex-col items-center gap-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Hospital Menu
        </h1>

        <p className="text-center text-lg text-gray-700">
          Scan the QR code to view today's menu and breakfast, lunch, dinner options
        </p>

        <button
          onClick={() => navigate("/scanner")}
          className="w-full px-8 py-4 text-xl font-bold text-white bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600 transition transform hover:scale-105"
        >
          📱 Start QR Scanner
        </button>

        <button
          onClick={() => navigate("/menupage")}
          className="w-full px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-lg shadow-md hover:shadow-lg border-2 border-blue-500 transition"
        >
          View Menu Without Scanning
        </button>

        <p className="text-gray-500 text-sm text-center">
          Use your phone camera to scan the QR code displayed at the ward
        </p>
      </div>
    </div>
  );
}

export default Homepage;