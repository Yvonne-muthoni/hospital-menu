import React, { useState } from "react";
import menuData from "../data/menu.json";

function Menu() {
  const [orders, setOrders] = useState([]);

  // Group meals by category
  const categories = [...new Set(menuData.map((meal) => meal.category))];

  // Add meal to orders
  const handleOrder = (meal) => {
    setOrders([...orders, meal]);
    alert(`${meal.name} has been ordered!`);
  };

  return (
    <div className="bg-gray-100 p-6 pt-4">
      <h1 className="text-4xl font-bold text-left text-blue-700 mb-2">
        Today's Menu
      </h1>

      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">
            {category}
          </h2>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {menuData
              .filter((meal) => meal.category === category)
              .map((meal) => (
                <div
                  key={meal.id}
                  className="bg-white p-4 rounded-xl shadow flex items-center space-x-4"
                >
                  <img
                    src={meal.image}
                    alt={meal.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">
                      {meal.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{meal.diet}</p>
                    <p className="text-blue-600 font-semibold mt-1">KES {meal.price}</p>
                  </div>

                  {meal.available ? (
                    <button
                      onClick={() => handleOrder(meal)}
                      className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      Order
                    </button>
                  ) : (
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                      Not available
                    </span>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
