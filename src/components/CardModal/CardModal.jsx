import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import Toast from "../Toast/Toast";
import "./CardModal.css";

export default function CardModal({
  hero,
  cardVisible,
  setCardVisible,
}) {
  const {favList, setFavList} = useContext(UserContext);
  const [isShown, setIsShown] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("warning");
  const [animation, setAnimation] = useState(false);

  function closeModal() {
    setCardVisible(false);
    document.body.style.overflow = "visible";
  }

  function tryCloseModal(e) {
    if (e.target.id === "background") {
      closeModal();
    }
  }

  function addToFav() {
    const arr = favList;
    if (arr.indexOf(hero) > -1) {
      sendToast("You have already added this hero in Favorite.", "warning");
    } else {
      setFavList(oldArray => [...oldArray, hero]);
      sendToast("Add to Favorite succeeded!", "succeed");
    }
  }

  function deleteFavHero() {
    let index = favList.indexOf(hero);
    if (index === -1) {
      sendToast("This Hero is an outsider. Not found in the list.", "warning");
    } else {
      const tempHeroSet = [
        ...favList.slice(0, index),
        ...favList.slice(index + 1),
      ];
      setFavList(tempHeroSet);
      sendToast("Hero selected has been removed from Fav list.", "succeed");
    }
  }

  const sendToast = (message, toastType) => {
    setIsShown(true);
    setToastType(toastType);
    setToastMsg(message);
    setAnimation(true);
    setTimeout(() => {
      setIsShown(false);
      setCardVisible(false);
    }, 3000);
  };

  return (
    <div>
      {cardVisible ? (
        <div
          className="background"
          id="background"
          onClick={(e) => {
            tryCloseModal(e);
          }}
        >
          <div className="card-modal">
            <div className="card-modal-img-area">
              <div className="card-modal-img-container">
                <a
                  className="card-modal-link"
                  href={hero.urls[0].url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="card-modal-img"
                    key={hero.id}
                    alt={hero.name}
                    src={`${hero.thumbnail.path}/detail.jpg`}
                  />
                </a>
                <div className="click-more-des">
                  click image to explore more in Marvel.com
                </div>
              </div>
              <div className="hero-des">
                {hero.description
                  ? hero.description
                  : "A mysterious superhero with unknown legends..."}
              </div>
            </div>
            <div className="card-modal-des">
              <div className="card-modal-info">
                <div className="card-modal-title">Name:</div>
                <div className="card-modal-name">{hero.name}</div>
                <div className="card-modal-data">
                  {hero.events.items.length === 0 ? (
                    <div className="note">No events available</div>
                  ) : (
                    <>
                      <div className="card-modal-title">Events:</div>
                      <div className="card-modal-data">
                        {hero.events.items.map((e) => {
                          return <div>{e.name}</div>;
                        })}
                      </div>
                    </>
                  )}
                  {hero.comics.items.length === 0 ? (
                    <div className="note">No comics available</div>
                  ) : (
                    <>
                      <div className="card-modal-title">Comics:</div>
                      <div className="card-modal-data">
                        {hero.comics.items.map((e) => {
                          return <div>{e.name}</div>;
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="card-modal-btn">
                <button className="star-icon" onClick={addToFav}>
                  <span>Add</span>
                </button>
                <button className="delete-icon" onClick={deleteFavHero}>
                  <span>Delete</span>
                </button>
                <button className="close-icon" onClick={closeModal}>
                  <span>Back</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
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
