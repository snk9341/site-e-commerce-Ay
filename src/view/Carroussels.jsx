import { useState } from "react";
import { useEffect } from "react";
import { useInterval } from "usehooks-ts";

function Carousels() {

  const [infoArticle, setInfoArticle] = useState([]);
  const [indexCarousel, setIndexCarousel] = useState(0);
  const [leftImg, setLeftImage] = useState(0);
  const [centerImg, setcenterImg] = useState(1);
  const [rightImg, setrightImg] = useState(2);

  const getArticle = function () {
    fetch("/produit.json")
      .then((res) => res.json())
      .then((data) => {
        setInfoArticle(data);
      });
  };

  useEffect(() => {
    getArticle();
  }, []);

  const Leftrotation = (e) => {
    if (e == 1 && leftImg + 1 > infoArticle.length - 1) {
      setLeftImage(0)
    } else if (e == -1 && leftImg - 1 == -1) {
      setLeftImage(infoArticle.length - 1)
    } else {
      setLeftImage(leftImg + e)
    }
  }

  const CenterRotation = (e) => {
    if (e == 1 && centerImg + 1 > infoArticle.length - 1) {
      setcenterImg(0)
    } else if (e == -1 && centerImg - 1 == -1) {
      setcenterImg(infoArticle.length - 1)
    } else {
      setcenterImg(centerImg + e)
    }
  }

  const RightRotation = (e) => {
    if (e == 1 && rightImg + 1 > infoArticle.length - 1) {
      setrightImg(0)
    } else if (e == -1 && rightImg - 1 == -1) {
      setrightImg(infoArticle.length - 1)
    } else {
      setrightImg(rightImg + e)
    }
  }

  const globalRotation = (e) => {
    Leftrotation(e);
    RightRotation(e);
    CenterRotation(e);
  }

  useInterval(
    () => {
      globalRotation(-1);
    }
    , 5000)


  if (infoArticle.length > 0) {
    return (
      <div className="carousel">
        <button id="carouselRight" onClick={(e) => { globalRotation(1) }}>
          <span className="material-symbols-outlined">
            chevron_left
          </span>
        </button>
        <div id="left-img">
          <img src={infoArticle[leftImg].image} alt="" />
          <h4>{infoArticle[leftImg].name}</h4>
        </div>
        <div>
          <img src={infoArticle[centerImg].image} alt="" />
          <h4>{infoArticle[centerImg].name}</h4>
        </div>
        <div id="right-img">
          <img src={infoArticle[rightImg].image} alt="" />
          <h4>{infoArticle[rightImg].name}</h4>
        </div>
        <button id="carouselLeft" onClick={(e) => { globalRotation(-1) }}>
          <span className="material-symbols-outlined">
            chevron_right
          </span>
        </button>
      </div>
    );
  }

}

export default Carousels;