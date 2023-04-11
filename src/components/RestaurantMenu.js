import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";

const RestaurantMenu = () => {
  const params = useParams();
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const [Restaurant, setRestaurant] = useState(null);
  const { id } = params;
  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  }
  //   console.log(params);

  return !Restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restaurant Id: {id}</h1>
        <h1>{Restaurant.name}</h1>
        <img src={CDN_LINK + Restaurant.cloudinaryImageId}></img>
        <h3>{Restaurant.area}</h3>
        <h3>{Restaurant.city}</h3>
        <h3>{Restaurant.avgRatin}</h3>
        <h3>{Restaurant.costForTwo}</h3>
      </div>
      {/* {Object.values(
        Restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ).map((item) => (
        <div> </div>
      ))} */}
    </div>
  );
};

export default RestaurantMenu;
