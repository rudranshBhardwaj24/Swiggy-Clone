import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resList, setResList] = useState(restList);
  const [searchText, setSearchText] = useState("");
  console.log(resList);
  //console.log(setResList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            const resList3 = resList.filter(
              (res) => res.data.name === searchText
            );
            setResList(resList3);
          }}
        >
          Search
        </button>
      </div>
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
    </>
  );
};

export default Body;
