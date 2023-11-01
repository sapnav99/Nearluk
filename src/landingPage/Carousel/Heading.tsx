
import "./Heading.css";
import Typewriter from "typewriter-effect";

export function Heading() {
  return (
    <div className="heading">
      <h3 style={{ color: "white" }}>
        Find your{" "}
        <span style={{ color: "rgba(144, 255, 211, 1)" }}> Dream Home</span>{" "}
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
