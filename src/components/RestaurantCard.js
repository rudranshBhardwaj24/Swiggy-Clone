import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) => {
    const {restData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, deliveryTime} = restData?.data;
    return(
      <div className="res-card">
        <img className = "res-logo"alt="res-logo" src={(CDN_LINK+restData.data.cloudinaryImageId)}></img>
        <h3 className="resName"> {name} </h3>
        <h5 className="resCuisine"> {cuisines.join(", ")}</h5>
        <h3 className="resRating"> {avgRating} </h3>
        <h3 className="resDelivery"> {deliveryTime} Minutes</h3>
      </div>
    )
  }

export default RestaurantCard;