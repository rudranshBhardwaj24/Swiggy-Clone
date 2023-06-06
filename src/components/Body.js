import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import { SEARCH_LOGO_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [resList, setResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurant();
  }, []);
  console.log(resList);

  function getRestaurant() {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
    // );
    // const json = await data.json();

    console.log(restList);
    // console.log(json.data.cards[2].data.data.cards);
    setResList(restList);
    setAllRestaurants(restList);
  }
  //console.log(setResList);
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1> You're offline :( </h1>;
  }
  return allRestaurants.length < 1 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-orange-400 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="search-input px-4 w-1/2 rounded-lg"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>

        <button
          className="p-2 mx-5 text-black font-bold bg-gray-100 rounded-lg border border-black"
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
            className="filter-btn border border-black p-2 m-2 text-xl font-bold rounded-lg  bg-orange-400 text-gray-100"
            onClick={() => {
              const resList2 = resList.filter((res) => res.data.avgRating > 4);
              setResList(resList2);
            }}
          >
            Top rated restaurant
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
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
