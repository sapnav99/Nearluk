import { useEffect, useState } from "react";
import "./Heading.css";
import Typewriter from "typewriter-effect";

export function Heading() {
  const [margin, setMargin] = useState("margin-480"); // Initial margin value class

  useEffect(() => {
    function updateMargin() {
      const deviceWidth = window.innerWidth;
      const newMargin = deviceWidth <= 768 ? "margin-20" : "margin-480"; // Define your logic for margin change
      setMargin(newMargin);
    }

    updateMargin(); // Set initial margin

    window.addEventListener('resize', updateMargin);

    return () => {
      window.removeEventListener('resize', updateMargin);
    };
  }, []);

  return (
    <div className={`heading ${margin}`}>
      <h3 style={{ color: "white" }}>
        Find your
        <span style={{ color: "rgba(144, 255, 211, 1)" }}> Dream Home</span>
        with Nearluk
      </h3>
      <h6
        style={{
          color: "white",
          marginLeft: "60px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        and stay connected with
        <span style={{ color: "rgba(144, 255, 211, 1)", paddingLeft: "5px" }}>
          <Typewriter
            options={{
              strings: [
                "Latest Properties",
                "Building Owners",
                "Property Agents",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h6>
    </div>
  );
}
