import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

let arr = [
  "Dal Makhni",
  "Shahi Paneer",
  "Chhole",
  "Naan",
  "Mix veg",
  "Tawa Paratha",
  "Butter Naan",
];

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const Restaurant = useRestaurant(id);

  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(addItem("Grapes"));
  };

  const handleRemoveItems = () => {
    dispatch(removeItem());
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return !Restaurant ? (
    <Shimmer />
  ) : (
    <div className="grid-flow-col">
      <div className="flex justify-start items-center">
        <div className="flex text-2xl border border-black items-center">
          <img
            className="p-5"
            src={CDN_LINK + Restaurant.cloudinaryImageId}
          ></img>
          <div className="flex flex-col gap-2 justify-start p-2 font-bold">
            {/* <h1>Restaurant Id: {id}</h1> */}
            <h1 className="text-4xl font-bold">{Restaurant.name}</h1>
            <h3>{Restaurant.area}</h3>
            <h3>{Restaurant.city}</h3>
            <h3>{Restaurant.avgRatin}</h3>
            <h3> cost for two ₹{Restaurant.costForTwo / 100}</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-bold">
        <span className="font-bold text-6xl shadow">Menu</span>
        <span className="flex flex-col justify">
          {arr.map((items) => (
            <div className="flex flex-wrap gap-4 p-2 m-2">
              <div className="w-40">{items}</div>
              <button
                className="p-2 border border-black"
                onClick={() => handleAddItems()}
              >
                Add Item
              </button>

              <button
                className="p-2 border border-black"
                onClick={() => handleRemoveItems()}
              >
                Remove Item
              </button>

              <button
                className="p-2 border border-black"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

export default RestaurantMenu;
