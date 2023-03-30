import React from "react";
import ReactDOM from "react-dom";


const RestaurantCard = (props) => {
  const {restData} = props;
  const {cloudinaryImageId, name, avgRating, cuisines, deliveryTime} = restData?.data;
  return(
    <div className="res-card">
      <img className = "res-logo"alt="res-logo" src={("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restData.data.cloudinaryImageId)}></img>
      <h3> {name} </h3>
      <h3> {avgRating} </h3>
      <h3> {cuisines.join(", ")}</h3>
      <h3> {deliveryTime} Minutes</h3>
    </div>
  )
}


const restList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "560781",
      "name": "Mr. Singh Pizzeria",
      "uuid": "0e955339-2bc6-4dea-8c56-0d22429a484f",
      "city": "4",
      "area": "Ashok Vihar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "bl1tddnttueczdm86nzk",
      "cuisines": [
        "Pizzas",
        "Salads",
        "Pastas"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 8.5,
      "slugs": {
        "restaurant": "mr-singh-pizzeria-ashok-vihar-ashok-vihar-2",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "SHED NO. 24 , 2ND FLOOR WAZIRPUR INDUSTRIAL AREA ,SARASWATI VIHAR,North West ,Delhi-110052",
      "locality": "Wazirpur Industrial Area",
      "parentId": 305614,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹120 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹120 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 9000,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 9000,
        "message": "",
        "title": "Delivery Charge",
        "amount": "9000",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6271355~p=1~eid=00000187-33ef-c283-0916-155c0011010f",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "8.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "560781",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 8.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "622616",
      "name": "Domino's Pizza",
      "uuid": "b73848c7-da30-4300-8a77-c45245d22405",
      "city": "4",
      "area": "Rohini",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "hsb5yt3qhechxockrbut",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 0,
      "slugs": {
        "restaurant": "dominos-pizza-sector-3-dominos-delhi",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Ground Floor, H. No -5, Sector-3,Rohini-110085, Delhi",
      "locality": "3rd Sector",
      "parentId": 2456,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4200,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4200,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4200",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "hasSurge": false,
      "sla": {
        "restaurantId": "622616",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 0,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "49197",
      "name": "Bakery 24x7",
      "uuid": "341f36d8-669a-4eb3-a5df-0be4f325adf7",
      "city": "4",
      "area": "Ashok Vihar",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "biujrj1nzgmt6fdnjiy8",
      "cuisines": [
        "Bakery"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "bakery-24x7-lawrence-road-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "C 7/185, Keshavpuram, Opposite SBI, Lawrence Road, New Delhi",
      "locality": "Lawrence Road",
      "parentId": 3817,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 6500,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 6500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "6500",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "49197",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "550729",
      "name": "The Burger Club",
      "uuid": "10adf5ea-49c5-44d1-be82-431fc15e9df6",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "cc4hlzukqocjvzzl4ewh",
      "cuisines": [
        "American",
        "Beverages",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "the-burger-club-ashok-vihar-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Plot No. 2, B Block, Block BD, West Shalimar Bagh, COMMUNITY CENTER, New Delhi, North West Delhi, Delhi, 110088",
      "locality": "Shalimar Bagh",
      "parentId": 2285,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹120 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹120 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "550729",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "655101",
      "name": "Bakerista",
      "uuid": "a86c93d8-9b89-4cd1-9852-c31f470e8dbe",
      "city": "4",
      "area": "SHALIMAR BAGH",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "60ce1c54a46c958ce6967a1ad398a08f",
      "cuisines": [
        "Chinese",
        "Fast Food",
        "North Indian",
        "Italian"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 40,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 40,
      "slaString": "40 MINS",
      "lastMileTravel": 6.800000190734863,
      "slugs": {
        "restaurant": "bakerista-ashok-vihar-ashok-vihar-2",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "36-A, G/F, BLOCK -B, PKT-U AND V, SHALIMAR BAGH, NORTH WEST DELHI, DELHI-110088, RITHALA, Rohini, North West , Delhi - 110088",
      "locality": "Reserve Bank Colony",
      "parentId": 40145,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "FLAT125 off",
        "shortDescriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "₹125 OFF",
        "shortDescriptionList": [
          {
            "meta": "Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FLAT125 off | Use FLATDEAL",
            "discountType": "Flat",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "distance",
            "fee": 7600,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 7600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "7600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "6.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "655101",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "lastMileTravel": 6.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "513404",
      "name": "KFC",
      "uuid": "b802c14a-a2a8-4f4f-9d17-7de2ad1d7135",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 44,
      "maxDeliveryTime": 44,
      "slaString": "44 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "kfc-shalimar-bagh-shalimar-bagh",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "Shop Number 24 & 25,Ground floor, plot number 2, Block b, community center,Block BD. West Shalimar Bagh New Delhi 110088.",
      "locality": "B Block",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
          {
            "meta": "40% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 on select items | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "513404",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "346394",
      "name": "V Cafe - Meals By PVR",
      "uuid": "5d837188-ec10-429d-936c-23b00cbea855",
      "city": "4",
      "area": "DLF CITY CENTRE MALL",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "efsb625i5a48xp2kn2jm",
      "cuisines": [
        "Pizzas",
        "Snacks",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 42,
      "minDeliveryTime": 42,
      "maxDeliveryTime": 42,
      "slaString": "42 MINS",
      "lastMileTravel": 7.099999904632568,
      "slugs": {
        "restaurant": "cafe-v-pvr-shalimar-bagh-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "PVR CINEMAS SHALIMAR BAGH , DLF CITY CENTRE MALL, 4TH FLOOR, A- BLOCK, COMMUNITY CENTRE NEW DELHI-110088",
      "locality": "SHALIMAR BAGH",
      "parentId": 21919,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "60% off",
        "shortDescriptionList": [
          {
            "meta": "60% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "60% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "60% off up to ₹120 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "346394",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "lastMileTravel": 7.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "560285",
      "name": "The K't kitchen",
      "uuid": "51b3aae0-3f1c-4b0d-b6f0-9222eac1521e",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "duz8uycrb8c9sunroyss",
      "cuisines": [
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "k't-kitchen-ashok-vihar-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "se-34 singhal pur,West Shalimar Bagh, Shalimar Bagh, Delhi, 110088, India",
      "locality": "Singhalpur Village",
      "parentId": 387472,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "560285",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "52962",
      "name": "Faasos - Wraps & Rolls",
      "uuid": "e8ccf876-3467-4983-852c-05b93712a2b3",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "f7faqoq0evi5dlejdc24",
      "cuisines": [
        "Fast Food",
        "North Indian",
        "Street Food",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 41,
      "minDeliveryTime": 41,
      "maxDeliveryTime": 41,
      "slaString": "41 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "fasos-bq-market-1st-floor-shalimar-bagh-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "12 to 17, BQ Market, 1st Floor, Shalimar Bagh, New Delhi 110088",
      "locality": "BQ Market",
      "parentId": 21809,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "52962",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "52958",
      "name": "Oven Story Pizza",
      "uuid": "fdba2da6-86b5-420d-aa20-b407e59896c4",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "ab979bffbd658e74de650a15ca0092a3",
      "cuisines": [
        "Pizzas",
        "Italian"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 42,
      "minDeliveryTime": 42,
      "maxDeliveryTime": 42,
      "slaString": "42 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "ovenstory-pizza-1st-block-koramangala-hsr-layout-5th-sector-hsr",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "12 to 17, BQ Market, 1st Floor, Shalimar Bagh, New Delhi 110088",
      "locality": "BQ Market",
      "parentId": 3534,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "52958",
        "deliveryTime": 42,
        "minDeliveryTime": 42,
        "maxDeliveryTime": 42,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "52956",
      "name": "Behrouz Biryani - Royal & Safe",
      "uuid": "645f5947-b23a-45a4-bdff-a67e42fcaed9",
      "city": "4",
      "area": "Ashok Vihar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "thmtrpw3yv40j1264ult",
      "cuisines": [
        "Biryani",
        "Mughlai",
        "Lucknowi",
        "Hyderabadi",
        "Kebabs",
        "North Indian",
        "Persian",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 50000,
      "costForTwoString": "₹500 FOR TWO",
      "deliveryTime": 49,
      "minDeliveryTime": 49,
      "maxDeliveryTime": 49,
      "slaString": "49 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "behrouz-biryani-1st-block-koramangala-hsr-layout-5th-sector-hsr",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "12 to 17, BQ Market, 1st Floor, Shalimar Bagh, New Delhi 110088",
      "locality": "BQ Market",
      "parentId": 1803,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "52956",
        "deliveryTime": 49,
        "minDeliveryTime": 49,
        "maxDeliveryTime": 49,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "297200",
      "name": "PVR Cafe",
      "uuid": "c9edc005-c1d7-436e-9f1d-dd4f1ca36188",
      "city": "4",
      "area": "DLF CITY CENTRE MALL",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "uf7kblcbgacinndjj2ee",
      "cuisines": [
        "Snacks",
        "Fast Food",
        "Beverages"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 44,
      "minDeliveryTime": 44,
      "maxDeliveryTime": 44,
      "slaString": "44 MINS",
      "lastMileTravel": 7.099999904632568,
      "slugs": {
        "restaurant": "pvr-pvr-shalimar-bagh-connaught-place",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "PVR CINEMAS SHALIMAR BAGH , DLF CITY CENTRE MALL, 4TH FLOOR, A- BLOCK, COMMUNITY CENTRE NEW DELHI-110088",
      "locality": "SHALIMAR BAGH",
      "parentId": 11664,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off | Use code PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off | Use code PARTY",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "297200",
        "deliveryTime": 44,
        "minDeliveryTime": 44,
        "maxDeliveryTime": 44,
        "lastMileTravel": 7.099999904632568,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "52960",
      "name": "Sweet Truth - Cake and Desserts",
      "uuid": "1b558d89-601e-4ebc-89cb-752aaa79f39a",
      "city": "4",
      "area": "Ashok Vihar",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "7c51efd1c5a12b7925e428a87977f85d",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 45000,
      "costForTwoString": "₹450 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "sweet-truth-1st-block-koramangala-hsr-layout-5th-sector-hsr",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "12 to 17, BQ Market, 1st Floor, Shalimar Bagh, New Delhi 110088",
      "locality": "BQ Market",
      "parentId": 4444,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use code TRYNEW",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "52960",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "52959",
      "name": "Firangi Bake",
      "uuid": "9862e1d1-22ae-4a9d-9a29-2546c3a3d06f",
      "city": "4",
      "area": "Ashok Vihar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "cdqisuukyasgc529ek2s",
      "cuisines": [
        "Italian",
        "Mexican",
        "Pastas",
        "Ice Cream"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 41,
      "minDeliveryTime": 41,
      "maxDeliveryTime": 41,
      "slaString": "41 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "firangi-bake-1st-block-koramangala-hsr-layout-5th-sector-hsr",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "12 to 17, BQ Market, 1st Floor, Shalimar Bagh, New Delhi 110088",
      "locality": "BQ Market",
      "parentId": 3952,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
          {
            "meta": "50% off | Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹120 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹120 | Use code GUILTFREE",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 1,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "52959",
        "deliveryTime": 41,
        "minDeliveryTime": 41,
        "maxDeliveryTime": 41,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "335360",
      "name": "Natural Ice Cream",
      "uuid": "2ece52c2-a7c2-47a7-ab84-e13d0459e984",
      "city": "4",
      "area": "Ashok vihar",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "hxvjz2rm1hstzlw8fcgs",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 7.300000190734863,
      "slugs": {
        "restaurant": "natural-ice-cream-shalimar-bagh-ashok-vihar",
        "city": "delhi"
      },
      "cityState": "4",
      "address": "12 to 17, BQ Market, 1st Floor,Shalimar Bagh,New Delhi 110088",
      "locality": "BQ Market",
      "parentId": 2093,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [
        
      ],
      "aggregatedDiscountInfo": {
        "header": "20% off",
        "shortDescriptionList": [
          {
            "meta": "20% off | Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Use SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use code SWIGGYIT",
            "discountType": "Percentage",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "chain": [
        
      ],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 8300,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 8300,
        "message": "",
        "title": "Delivery Charge",
        "amount": "8300",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [
          
        ],
        "textBased": [
          
        ],
        "textExtendedBadges": [
          
        ]
      },
      "lastMileTravelString": "7.3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "335360",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 7.300000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.7",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  }]


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
