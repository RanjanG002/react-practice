import { IMG_URL } from "../utils/constants";

const Cards = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla, id } =
    resData.info;

  return (
    <div className="res-cards">
      <img
        className="res-card-logo"
        alt="res-card-log"
        src={IMG_URL + cloudinaryImageId}
      />
      <h4>{name}</h4>

      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRating}</h6>
      <h6>{sla.deliveryTime} minutes</h6>
      <h6>{costForTwo} </h6>
    </div>
  );
};

export default Cards;
