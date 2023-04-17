import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    restData?.data;
  return (
    <div className="w-60 p-4 m-6 shadow-lg">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_LINK + restData.data.cloudinaryImageId}
      ></img>
      <h3 className="font-bold text-xl"> {name} </h3>
      <h5 className="font-bold"> {cuisines.join(", ")}</h5>
      <h3 className="resRating"> {avgRating} </h3>
      <h3 className="resDelivery"> {deliveryTime} Minutes</h3>
    </div>
  );
};

export default RestaurantCard;
