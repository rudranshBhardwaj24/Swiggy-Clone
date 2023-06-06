import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, deliveryTime } =
    restData?.data;
  return (
    <div className="w-72 p-2 m-2 shadow-lg rounded-lg bg-white h-full border border-black">
      <h1 className="z-10 absolute top-70 m-2 rounded-xl mt-4 w-[6rem] bg-gray-100 flex justify-center items-center font-bold">
        {deliveryTime} MINS
      </h1>
      <img
        className="border border-black rounded-md"
        alt="res-logo"
        src={CDN_LINK + restData.data.cloudinaryImageId}
      />
      <h3 className="font-bold text-xl"> {name} </h3>
      <h5 className="font-bold"> {cuisines.join(", ")}</h5>
      <h3 className="resRating"> {avgRating} </h3>
    </div>
  );
};

export default RestaurantCard;
