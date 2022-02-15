import React from "react";
import FavHeroInfo from "../FavHeroInfo/FavHeroInfo";
import "../Display/Display.css";

export default function FavDisplay() {
  return (
    <div className="display" id="main">
        <FavHeroInfo/>
        <div className="notice">
          You can fill the fav list by clicking "add" in card modal of the home page and the search page.
        <p>
          Note: The fav list would be cleared once you refresh our pages since we never disturb your local storage.
        </p>
        </div>
    </div>
  );
}
