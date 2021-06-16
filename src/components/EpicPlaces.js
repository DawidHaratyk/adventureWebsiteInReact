import React from "react";
import "./EpicPlaces.css";
import Card from "./Card";
import { image1, image2, image3, image4, image5 } from "../images/index";

function EpicPlaces() {
  return (
    <div className="epic-section">
      <h3 className="epic-headline">Check out these EPIC Destinations!</h3>
      <div className="epic-cards-container">
        <div className="epic-cards-list">
          <Card
            image={image1}
            text="Travel through the Islands of Bali in a Private Cruise"
            data="Luxury"
            src="/services"
          />
          <Card
            image={image2}
            text="Set sail in the Atlantic Ocean visiting Uncharted Waters"
            data="Mystery"
            src="/services"
          />
        </div>
        <ul className="epic-cards-list">
          <Card
            image={image3}
            text="Experience Football on Top of the Himilayan Mountains"
            data="Adventure"
            src="/services"
          />
          <Card
            image={image4}
            text="Ride through the Sahara Desert on a guided camel tour"
            data="Adrenaline"
            src="/services"
          />
          <Card
            image={image5}
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            data="Adventure"
            src="/services"
          />
        </ul>
      </div>
    </div>
  );
}

export default EpicPlaces;
