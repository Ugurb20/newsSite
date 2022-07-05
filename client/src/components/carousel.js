import React, { useState } from "react";
import "./carousel.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

import { useEffect } from "react";

export default function Mycarousel() {
  const [curSlide, changeCurSlide] = useState(0);

  useEffect(() => {
    const links = [
      "https://beyoglusinemasi.com/wp-content/uploads/2021/06/la-haine-4.jpeg",
      "https://upl.roob.la/2011/02/rt4fxvfc8q57fgp.jpg",
      "https://i.haberglobal.com.tr/storage/files/images/2022/01/25/tekrar-cal-sam-casablanca-80-yasinda-JjsM.jpg",
    ];
    const slides = document.querySelectorAll(".carouselitem");
    links.forEach((lin, index) => {
      slides[index].style.backgroundImage = `url('${lin}')`;
    });
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
  }, [curSlide]);
  function handleClick(e) {
    e.preventDefault();
    const slides = document.querySelectorAll(".carouselitem");
    let maxSlide = slides.length - 1;
    if (e.target.closest("button").id === "next") {
      changeCurSlide((pcurslide) => {
        if (curSlide === maxSlide) {
          return 0;
        } else {
          return curSlide + 1;
        }
      });
    } else {
      changeCurSlide((pcurslide) => {
        if (curSlide === 0) {
          return maxSlide;
        } else {
          return curSlide - 1;
        }
      });
    }
  }
  return (
    <div className="carousel-container">
      <div className="carouselitem carouselitem1"></div>
      <div className="carouselitem carouselitem2"></div>
      <div className="carouselitem carouselitem3"></div>
      <div className="carousel-heading">
        5 Famous Movies Filmed in Casablanca
      </div>
      <div className="carousel-control">
        <button id="prev" onClick={handleClick}>
          <FontAwesomeIcon className="fa-lg" icon={faArrowAltCircleLeft} />
        </button>
        <button id="next" onClick={handleClick}>
          <FontAwesomeIcon className="fa-lg" icon={faArrowAltCircleRight} />
        </button>
      </div>
    </div>
  );
}
