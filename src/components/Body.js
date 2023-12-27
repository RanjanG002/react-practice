import Cards from "./Cards";
// import listOfRestData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [serchValue, setSearchValue] = useState("");
  const [filteredDataNew, setFilteredDataNew] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.045943287905327&lng=77.7224950119853&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredDataNew(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="topResList">
        <div className="searchData">
          <input
            className="search-bar"
            type="text"
            value={serchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="search"
            // onClick={
            //   ()=>{
            //     const filteredSearchValue = listOfRest.filter((res)=> res.info.name.includes(serchValue) );
            //     setListOfRest(filteredSearchValue);
            //   }
            // }
            onClick={() => {
              const filteredSearchValue = listOfRest.filter(
                (filteredSerachData) =>
                  filteredSerachData.info.name
                    .toLowerCase()
                    .includes(serchValue.toLowerCase())
              );
              setFilteredDataNew(filteredSearchValue);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="topList"
          onClick={() => {
            const filteredData = listOfRest.filter(
              (resDataNew) => resDataNew.info.avgRating > 4
            );
            setListOfRest(filteredData);
          }}
        >
          Top Rated List
        </button>
      </div>
      <div className="res-container">
        {filteredDataNew.map((resturant) => (
          <Link key={resturant.info.id} to={"resturants/" + resturant.info.id}>
            <Cards resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
