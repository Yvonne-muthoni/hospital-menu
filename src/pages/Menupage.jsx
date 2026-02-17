import { useEffect, useState } from "react";
import menu from "../data/menu.json";
import Loader from "../components/Loader";

function Menupage() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

      setLoading(false);

    }, 800);

  }, []);

  if (loading) return <Loader />;


  return (

    <div className="min-h-screen bg-blue-50 p-4">


      {/* ✅ Logo and Hospital Name */}
      <div className="flex flex-col items-center mb-8">

        <img
          src="/images/logo.png"
          alt="Avenue Hospital Logo"
          className="h-20 mb-3"
        />

        <h1 className="text-3xl font-bold text-center text-blue-700">

          Avenue Hospital Weekly Menu

        </h1>

      </div>



      {Object.entries(menu).map(([day, meals]) => (

        <div key={day} className="mb-10">

          {/* Day */}
          <h2 className="text-2xl font-bold text-blue-600 mb-4">

            {day}

          </h2>



          {/* Breakfast */}
          <h3 className="font-semibold mb-2 text-gray-700">

            🍳 Breakfast

          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">

            {meals.breakfast.map((meal, i) => (

              <div
                key={i}
                className="bg-white p-3 rounded-xl shadow hover:shadow-md transition"
              >

                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto mb-3 border-4 border-blue-100 shadow hover:scale-105 transition"
                />

                <p className="font-medium">

                  {meal.name}

                </p>

              </div>

            ))}

          </div>



          {/* Lunch */}
          <h3 className="font-semibold mb-2 text-gray-700">

            🍛 Lunch

          </h3>

          <div className="grid grid-cols-2 gap-4 mb-4">

            {meals.lunch.map((meal, i) => (

              <div
                key={i}
                className="bg-white p-3 rounded-xl shadow hover:shadow-md transition"
              >

                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto mb-3 border-4 border-blue-100 shadow hover:scale-105 transition"
                />

                <p className="font-medium">

                  {meal.name}

                </p>

              </div>

            ))}

          </div>



          {/* Dinner */}
          <h3 className="font-semibold mb-2 text-gray-700">

            🍲 Dinner

          </h3>

          <div className="grid grid-cols-2 gap-4">

            {meals.dinner.map((meal, i) => (

              <div
                key={i}
                className="bg-white p-3 rounded-xl shadow hover:shadow-md transition"
              >

                <img
                  src={meal.image}
                  alt={meal.name}
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto mb-3 border-4 border-blue-100 shadow hover:scale-105 transition"
                />

                <p className="font-medium">

                  {meal.name}

                </p>

              </div>

            ))}

          </div>


        </div>

      ))}

    </div>

  );

}

export default Menupage;