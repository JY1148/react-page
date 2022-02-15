import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import CardModal from "../CardModal/CardModal";
import "../HeroInfo/HeroInfo.css";

export default function FavHeroInfo() {
  const {favList} = useContext(UserContext);
  const [hero, setHero] = useState([]);
  const [cardVisible, setCardVisible] = useState(false);

  function toggleCardVisible(hero) {
    setHero(hero);
    setCardVisible((state) => !state);
  }

  return (
    <div className="hero-info-page">
      <div className="hero-details">
        <CardModal
          hero={hero}
          cardVisible={cardVisible}
          setCardVisible={setCardVisible}
        />
      </div>
      <div className="hero-info">
        {favList.map((hero) => {
          if(hero.name!=="Example"){
          return (
            <div className="hero-info-single-item" key={hero.name} id={hero.id}>
              <div className="img-container">
                <img
                  alt={hero.name}
                  className="item-img"
                  key={hero.id}
                  onClick={() => toggleCardVisible(hero)}
                  src={`${hero.thumbnail.path}/portrait_incredible.jpg`}
                />
              </div>
              <div className="item-decs">
                <a href={hero.urls[1].url} target="_blank" rel="noreferrer">
                  <div className="item-name">{hero.name}</div>
                </a>
                <div className="item-description">
                  {hero.description
                    ? hero.description
                    : "A mysterious superhero with unknown legends..."}
                </div>
              </div>
            </div>
          )};
        })}
      </div>
    </div>
  );
}
