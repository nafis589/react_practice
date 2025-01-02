import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
const Main = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => setItems(res.data.meals))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt=""></img>
        <div className="content">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </div>
      </section>
    );
  });
  return <div className="item-container">{itemList}</div>;
};

export default Main;
