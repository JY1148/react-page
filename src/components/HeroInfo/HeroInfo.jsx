import React, { useState, useEffect } from "react";
import "./HeroInfo.css";
import CardModal from "../CardModal/CardModal";

export default function HeroInfo({ heroes }) {
  const [cardVisible, setCardVisible] = useState(false);
  const [hero, setHero] = useState([]);
  const [favHero, setFavHero] = useState([]);

  function toggleCardVisible(hero) {
    setHero(hero);
    setCardVisible((state) => !state);
  }

  useEffect(()=>{
    const localFavHero = JSON.parse(localStorage.getItem('fav-heroes'));
    setFavHero(localFavHero);
  }, []);

  return (
    <div className="hero-info-page">
      <div className="hero-details">
        <CardModal
          hero={hero}
          cardVisible={cardVisible}
          setCardVisible={setCardVisible}
          favHero={favHero}
          setFavHero={setFavHero}
        />
      </div>
      <div className="hero-info">
        {heroes.map((hero) => {
          if (
            hero.thumbnail.path !==
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return (
              <div className="hero-info-single-item" key={hero.name} id={hero.id}>
                <div className="img-container">
                  <img
                    className="item-img"
                    key={hero.id}
                    alt={hero.name}
                    onClick={() => toggleCardVisible(hero)}
                    src={`${hero.thumbnail.path}/portrait_incredible.jpg`}
                  />
                </div>
                <div className="item-decs">
                  <a href={hero.urls[1].url} target="_blank" rel="noreferrer">
                    <div className="item-name">{hero.name}</div>
                  </a>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
