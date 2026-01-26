import { useEffect, useState } from "react";
import menuData from "../data/menu.json";
import MenuCategory from "./MenuCategory";
import Loader from "./Loader";

function Menu() {
  const [loading, setLoading] = useState(true);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setMeals(menuData);
      setLoading(false);
    }, 3000); // fake loading for UX
  }, []);

  if (loading) return <Loader />;

  const categories = [...new Set(meals.map(m => m.category))];

  return (
    <div className="space-y-10">
      {categories.map(category => (
        <MenuCategory
          key={category}
          category={category}
          meals={meals.filter(m => m.category === category)}
        />
      ))}
    </div>
  );
}

export default Menu;