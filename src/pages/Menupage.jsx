import React, { useState, useEffect } from "react";
import menuData from "../data/menu.json";
import Loader from "../components/Loader";

function Menupage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Today's Menu</h1>
      {menuData.map((meal) => (
        <div key={meal.id} className="bg-white p-4 rounded-xl shadow mb-4 flex items-center space-x-4">
          <img
            src={meal.image.replace("/public", "")}
            alt={meal.name}
            className="w-24 h-24 object-cover rounded-full"
          />
          <div>
            <h3 className="font-bold text-gray-800">{meal.name}</h3>
            <p className="text-gray-500">{meal.diet}</p>
            <p className="text-blue-600 font-semibold">KES {meal.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menupage;