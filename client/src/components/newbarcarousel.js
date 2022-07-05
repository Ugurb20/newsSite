import { useEffect, useState } from "react";
import "./newbarcarousel.css";
export default function Newbarcarousel() {
  const [curNew, changeCurNew] = useState(0);
  const news = [
    "CASABLANCA, MOROCCO - MAY 5: A Moroccan nurse takes care of one of the nine babies after Malian woman Halima Cisse has given birth to nine babies at once...",
    "CASABLANCA, MOROCCO - MAY 10: A Moroccan nurse takes care of one of the nine babies after Malian woesfsefesfsefsefsef to nine babies at once...",
    "CASABLANCA, MOROCCO - MAY 12: A Moroccan nurse takes care of one of the nine bedwfwefter Malian woesfsefesfsefsefsef to nine babies at once...",
  ];
  useEffect(() => {
    const slides = document.querySelectorAll(".topcarousel-item");
    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curNew)}%)`;
    });
    let maxSlide = slides.length - 1;
    setTimeout(() => {
      changeCurNew(() => {
        if (curNew === maxSlide) {
          return 0;
        } else {
          return curNew + 1;
        }
      });
    }, 3000);
  }, [curNew]);
  return (
    <div className="newcarousel-container">
      {news.map((newss, i) => {
        return (
          <span className={`topcarousel-item topcarousel-item${i + 1}`}>
            {newss}
          </span>
        );
      })}
    </div>
  );
}
