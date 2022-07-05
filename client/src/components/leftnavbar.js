import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faWifi,
  faHeart,
  faMailBulk,
} from "@fortawesome/free-solid-svg-icons";

export default function Leftnavbar() {
  return (
    <div className="left-navbar">
      <div className="container-verticalflex">
        <a className="nav-icon" href="/">
          <i>
            <FontAwesomeIcon className="fa-lg" icon={faGlobe} />
          </i>
        </a>
        <a className="nav-icon" href="/">
          <i>
            <FontAwesomeIcon className="fa-lg" icon={faWifi} />
          </i>
        </a>
        <a className="nav-icon" href="/">
          <i>
            <FontAwesomeIcon className="fa-lg" icon={faHeart} />
          </i>
        </a>
        <a className="nav-icon" href="/">
          <i>
            <FontAwesomeIcon className="fa-lg" icon={faMailBulk} />
          </i>
        </a>
      </div>
    </div>
  );
}
