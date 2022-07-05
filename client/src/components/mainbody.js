import Mycarousel from "./carousel";
import Topnewbar from "./topnewbar";
import Placestovisit from "./placestovisit";
import Bottomnews from "./bottomnews";
import "./mainbody.css";

export default function Mainbody() {
  return (
    <div
      className="main-body"
      style={{ flex: "auto", height: "min-content", padding: "3% 5%" }}
    >
      <Topnewbar />
      <div className="carousel-row">
        <Mycarousel />
        <Placestovisit />
      </div>
      <div className="myrow3">
        <Bottomnews />
      </div>
    </div>
  );
}
