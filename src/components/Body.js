import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import { SEARCH_LOGO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurant();
  }, []);
  console.log(resList);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setResList(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  //console.log(setResList);
  return allRestaurants.length < 1 ? (
    <Shimmer />
  ) : (
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
          className="search-btn"
          onClick={() => {
            const resList3 = resList.filter(
              (res) => res.data.name.toLowerCase() === searchText.toLowerCase()
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
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
              className="restaurant-card"
            >
              <RestaurantCard restData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
