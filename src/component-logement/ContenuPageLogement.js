import React from "react";
import Slider from "../component-slider/Slider.js";
import StarRatings from "react-star-ratings";
import AccordionItem from "../component-accordeon/AccordionItem.js";

const ContenuPageLogement = ({ logement }) => {
  return (
    <div className="logement-contain">
      <Slider images={logement.pictures} />

      <div className="title-host">
        <div className="title">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <div className="host">
          <div className="host-name-image">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <div className="rating">
            <div className="desktop-rating">
              <StarRatings
                rating={Number(logement.rating)}
                starRatedColor="#FF6060"
                numberOfStars={5}
                name="rating"
                starDimension="30px"
                starSpacing="5px"
                starEmptyColor="#E3E3E3"
              />
            </div>
            <div className="mobile-rating">
              <StarRatings
                rating={Number(logement.rating)}
                starRatedColor="#FF6060"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="5px"
                starEmptyColor="#E3E3E3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="accordions-container">
        <AccordionItem title="Description">
          <p>{logement.description}</p>
        </AccordionItem>
        <AccordionItem title="Equipement">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </AccordionItem>
      </div>
    </div>
  );
};

export default ContenuPageLogement;

/*<p>{logement.description}</p>*/
