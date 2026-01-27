import React from "react";
import { QRCodeCanvas } from "qrcode.react";

function Homepage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 py-6">
      {/* Header at top-left */}
      <header className="w-full">
        <h1 className="text-left text-4xl md:text-5xl font-bold text-blue-700">
          Avenue Hospital
        </h1>
      </header>

      
      <main className="mt-6 flex flex-col items-center">
        {/* Instruction text */}
        <p className="text-center text-lg mb-4">
          Scan the QR code below to view today's menu and place your order.
        </p>

        {/* QR Code centered */}
        <div className="bg-white p-4 rounded-lg mb-2 shadow-md">
          <QRCodeCanvas value="https://hospital-menu.vercel.app/menupage" size={200} />
        </div>

        {/* Scan instruction */}
        <p className="text-gray-500 text-sm text-center">
          Scan using your phone camera
        </p>
      </main>
    </div>
  );
}

export default Homepage;
