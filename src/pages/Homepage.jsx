import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 py-6 flex flex-col items-center">
      <header className="w-full">
        <h1 className="text-left text-4xl md:text-5xl font-bold text-blue-700">
          Avenue Hospital
        </h1>
      </header>

      <p className="text-center text-lg my-4">
        Scan the QR code below to view today's menu and place your order.
      </p>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <QRCodeCanvas
          value="https://hospital-menu-xnzq.vercel.app/menupage" 
          size={200}
        />
      </div>

      <p className="text-gray-500 text-sm mt-2 text-center">
        Scan using your phone camera
      </p>
    </div>
  );
}

export default Homepage;