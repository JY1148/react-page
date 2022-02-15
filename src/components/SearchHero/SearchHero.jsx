import React, { useState } from "react";
import HeroInfo from "../HeroInfo/HeroInfo";
import Toast from "../Toast/Toast";
import searchlogo from "../../assets/search-search.png";
import "./SearchHero.css";

export default function SearchHero() {
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(6);
  const [radio, setRadio] = useState(1);

  require("dotenv").config();
  const md5 = require("md5");
  const timestamp = new Date().getTime();
  const PUBLIC_KEY = process.env.REACT_APP_MARVEL_API_PUBLIC_KEY;
  const PRIVATE_KEY = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;
  const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
  const baseUrl = `https://gateway.marvel.com:443/v1/public/characters`;
  const fuzzyQuery = `?limit=${limit===""?6:limit}&nameStartsWith=${name}`;
  const perfectQuery = `?limit=${limit === "" ? 6 : limit}&name=${name}`;
  const auth = `&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  const fuzzyUrl = `${baseUrl}${fuzzyQuery}${auth}`;
  const perfectUrl = `${baseUrl}${perfectQuery}${auth}`;

  

  const [heroes, setHeroes] = useState([]);
  const [goSearch, setGoSearch] = useState(false);

  const [isShown, setIsShown] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [animation, setAnimation] = useState(false);
  const [toastType, setToastType] = useState("warning");

  const searchMarvel = () => {
    if (name.length === 0) {
      sendToast("Oops, I beg your pardon? Illegal input detected.", "warning");
    } else {
      fetch(radio === 1 ? fuzzyUrl : perfectUrl)
        .then((response) => response.json())
        .then((response) => {
          setHeroes(response.data.results);
          setGoSearch(true);
          if (response.data.results.length === 0) {
            sendToast(
              "OMG! Thanos snaps...both hands! No Data Found.",
              "warning"
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleChangeUserName = (e) => {
    if (e.target.value.match("^[a-zA-Z ]*$") != null) {
      setName(e.target.value);
    } else {
      sendToast(
        "Captain! Language... Only English letters are accepted.",
        "warning"
      );
    }
  };

  const handleChangeLimitNum = (e) => {
    if (!e.target.value || (e.target.value > 0 && e.target.value <= 99)) {
      setLimit(e.target.value);
    } else {
      sendToast(
        "Captain! Give me five!... Only 1 to 99 is accepted.",
        "warning"
      );
    }
  };

  const sendToast = (message, toastType) => {
    setIsShown(true);
    setToastType(toastType);
    setToastMsg(message);
    setAnimation(true);
    setTimeout(() => {
      setIsShown(false);
    }, 3000);
  };

  const radioChange = (e) => {
    e.currentTarget.id === "fuzzy" ? setRadio(1) : setRadio(2);
  };

  return (
    <div className="search">
      <div className="search-box">
        <img className="search-logo" src={searchlogo} alt="search-logo" />
        <div className="search-intro">Call hero by the name</div>
        <div className="typein-input">
          <label id="name">
            {radio === 1
              ? "Name starting with...:"
              : "The specific name (case-insensitive):"}
            <span>*</span>
            <br />
            <input
              id="main"
              type="text"
              label="name"
              placeholder="Thor? Batman? 007? Try anyone you like!"
              onChange={(e) => {
                handleChangeUserName(e);
                setGoSearch(false);
              }}
            />
          </label>
          <label id="limit">
            Limit (optional, 6 as default):
            <br />
            <input
              id="limitInput"
              type="number"
              label="limit"
              placeholder="6"
              onChange={(e) => {
                handleChangeLimitNum(e);
              }}
            />
          </label>
        </div>
        <label>Search type:</label>
        <div className="radio">
          <input
            type="radio"
            id="fuzzy"
            name="search"
            value="fuzzy"
            checked={radio === 1}
            onChange={(e) => {
              radioChange(e);
            }}
          />
          <label htmlFor="fuzzy">Fuzzy Search</label>
          <input
            type="radio"
            id="perfect"
            name="search"
            value="perfect"
            checked={radio === 2}
            onChange={(e) => {
              radioChange(e);
            }}
          />
          <label htmlFor="perfect">Perfect Match Search</label>
        </div>

        <button onClick={searchMarvel}>
          <span>Search</span>
        </button>
      </div>
      <div className="search-display">
        <div>
          {!goSearch ? (
            <div className="slogan"> Search your Hero! </div>
          ) : (
            <div>
              <div className="result">
                <span>
                  {heroes.length < limit ? <>Sorry, Only a</> : <>A</>}
                </span>
                ssembling <span className="input-red">{heroes.length}</span>{" "}
                hero<span>{heroes.length !== 1 ? "es" : ""}</span> starting with{" "}
                <span className="input-red">{name}</span> for you!
                <div>Image-available results are shown as below.</div>
              </div>
              <HeroInfo heroes={heroes} />
            </div>
          )}
        </div>
      </div>
      <div className={`toast ${isShown ? "shown" : "hidden"}`}>
        <Toast
          message={toastMsg}
          animation={animation}
          setAnimation={setAnimation}
          type={toastType}
        />
      </div>
    </div>
  );
}
