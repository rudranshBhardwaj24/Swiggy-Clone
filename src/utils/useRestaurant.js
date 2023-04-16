import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FETCH_MENU_URL } from "./constants";

const useRestaurant = (id) => {
  const params = useParams();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const [Restaurant, setRestaurant] = useState(null);
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  return Restaurant;
};
export default useRestaurant;
