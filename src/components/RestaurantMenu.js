import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";
import { CDN_LINK } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

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
      <div className="flex flex-col justify-center">
        <span className="p-2 font-bold">Menu</span>
        <span className="p-2">Dal Makhni</span>
        <div>
          <button className="p-5 m-5" onClick={() => handleAddItems()}>
            Add Item
          </button>

          <button className="p-5 m-5" onClick={() => handleRemoveItems()}>
            Remove Item
          </button>

          <button className="p-5 m-5" onClick={() => handleClearCart()}>
            Clear Cart
          </button>
        </div>
        <span className="p-2">Shahee Paneer</span>
      </div>
    </div>
  );
};

export default RestaurantMenu;
