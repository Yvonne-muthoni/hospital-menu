import React from "react";

function Loader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-blue-600 border-b-transparent"></div>
    </div>
  );
}

export default Loader;