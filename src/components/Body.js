import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
const Body = () => {
    return(
      <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
          {
            restList.map(restaurant => <RestaurantCard key = {restaurant.data.id}restData = {restaurant}/>)
          }
           </div>
      </div>
    )
  }

export default Body;