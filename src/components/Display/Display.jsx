import React, { useEffect, useState } from "react";
import HeroInfo from "../HeroInfo/HeroInfo";
import LoadingSpin from "../LoadingSpin/LoadingSpin";
import "./Display.css";

function Display(favHero, setFavHero) {
  require("dotenv").config();

  function intervalRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const md5 = require("md5");
  const timestamp = new Date().getTime();
  const PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
  const PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const baseUrl = `https://gateway.marvel.com:443/v1/public/characters`;
  const rndOffset = intervalRandom(1, 1550);
  const rndLimit = intervalRandom(30, 40);
  const defaultQuery = `?limit=${rndLimit}&offset=${rndOffset}`;
  const auth = `&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  const url = `${baseUrl}${defaultQuery}${auth}`;

  const [loading, setLoading] = useState(true);
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setHeroes(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <div className="display" id="main">
      {loading ? (
        <LoadingSpin />
      ) : (
        <div>
          <HeroInfo heroes={heroes} favHero={favHero} setFavHero={setFavHero} />
          <div className="hero-info-guide">
            Click the bottom right reload button to switch more heroes.
          </div>
        </div>
      )}
    </div>
  );
}
export default Display;
