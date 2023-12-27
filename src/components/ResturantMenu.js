import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RES_MENU_LOGO_URL, RES_MENU_ITEM_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const ResturantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_MENU_ITEM_URL + resId);
    const json = await data.json();
    setResMenu(json?.data);
  };
  if (resMenu === null) return <Shimmer />;

  const { name, cuisines, price, avgRating, cloudinaryImageId, description } =
    resMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div>
      <div className="res-menu-details">
        <div className="res-menu-data">
          <h2>{name}</h2>
          <h6>{cuisines}</h6>
          <h6>{avgRating} rating</h6>
        </div>

        <div className="res-menu-cards">
          <img
            className="res-menu-logo"
            alt="res-card-log"
            src={RES_MENU_LOGO_URL + cloudinaryImageId}
          />
        </div>
      </div>
      <div className="res-menu-sub-details">
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} --Rs{" "}
              {item.card.info.defaultPrice / 100 || item.card.infoprice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResturantMenu;
