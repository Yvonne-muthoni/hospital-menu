import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { useNavigate } from "react-router-dom";

function QRScanner() {
  const [scanning, setScanning] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!scanning) return;

    const scanner = new Html5QrcodeScanner(
      "qr-scanner",
      { fps: 10, qrbox: { width: 250, height: 250 } },
      false
    );

    const onScanSuccess = (decodedText) => {
      setScanning(false);
      scanner.clear();
      
      // Navigate to menu page with scanned data
      navigate("/menupage", { state: { scannedData: decodedText } });
    };

    const onScanFailure = (error) => {
      // Quiet fail - scanning will continue
    };

    scanner.render(onScanSuccess, onScanFailure);

    return () => {
      scanner.clear();
    };
  }, [scanning, navigate]);

  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 py-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-4">Scan QR Code</h1>
      <p className="text-center text-gray-600 mb-6">
        Point your camera at the QR code to view today's menu
      </p>

      <div
        id="qr-scanner"
        className="w-full max-w-md border-2 border-blue-500 rounded-lg overflow-hidden"
      />

      {!scanning && (
        <button
          onClick={() => setScanning(true)}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Scan Again
        </button>
      )}

      <p className="text-gray-500 text-sm mt-4 text-center">
        Make sure QR code is clearly visible
      </p>
    </div>
  );
}

export default QRScanner;
