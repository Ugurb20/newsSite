import "./topnewbar.css";
import { useEffect, useState } from "react";
import Dot from "./dot";
import Newbarcarousel from "./newbarcarousel";

export default function Topnewbar() {
  return (
    <div className="newbar">
      <div className="newbarleft">
        Live Status
        <Dot />
      </div>
      <div className="newbarright">
        <Newbarcarousel />
      </div>
    </div>
  );
}
