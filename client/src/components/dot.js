import { useEffect, useState } from "react";

export default function Dot() {
  const [dotState, setDotState] = useState(true);
  useEffect(() => {
    if (document.querySelector(".dot-toggle").classList.contains("hidden")) {
      document.querySelector(".dot-toggle").classList.remove("hidden");
    } else {
      document.querySelector(".dot-toggle").classList.add("hidden");
    }
    setTimeout(() => {
      setDotState(() => !dotState);
    }, 500);
  }, [dotState]);
  return <span className="dot-toggle">.</span>;
}
