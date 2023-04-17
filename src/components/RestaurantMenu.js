import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const Restaurant = useRestaurant(id);
  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  // const [Restaurant, setRestaurant] = useState(null);

  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
  //       id
  //   );
  //   const json = await data.json();
  //   console.log(json.data);
  //   setRestaurant(json?.data?.cards[0]?.card?.card?.info);
  // }
  //   console.log(params);

  return !Restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div className="flex flex-wrap justify-self-center shadow-lg">
        <img
          className="p-5"
          src={CDN_LINK + Restaurant.cloudinaryImageId}
        ></img>
        <div className="flex flex-col justify-center">
          <h1 className="py-2 font-bold">Restaurant Id: {id}</h1>
          <h1 className="py-2 font-bold">{Restaurant.name}</h1>
          <h3 className="py-2 font-bold">{Restaurant.area}</h3>
          <h3 className="py-2 font-bold">{Restaurant.city}</h3>
          <h3 className="py-2 font-bold">{Restaurant.avgRatin}</h3>
          <h3 className="py-2 font-bold">{Restaurant.costForTwo}</h3>
        </div>
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
