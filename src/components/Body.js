import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const arr = useState(restList);
  const resList = arr[0];
  const setResList = arr[1];
  console.log(resList);
  //console.log(setResList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const resList2 = resList.filter((res) => res.data.avgRating > 4);
            setResList(resList2);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} restData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
