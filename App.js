import React from "react";
import ReactDOM from "react-dom";


const RestaurantCard = () => {
  return(
    <div className="res-card">
      <img className = "res-logo"alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSt7K5P4Wt9ybn7WDXN6vE1HhoTEpfbvWTzQ&usqp=CAU"></img>
      <h3> Hum Tum </h3>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container"> <RestaurantCard/> </div>
    </div>
  )
}

const Header = () => {
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return(
    <div>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
