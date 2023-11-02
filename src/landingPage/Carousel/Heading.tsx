import "./Heading.css";
import Typewriter from "typewriter-effect";

export function Heading() {
  return (
    <div className="heading">
      <div className="headingContent">
        <h3 style={{ color: "white", textAlign: "center" }}>
          Find your{" "}
          <span style={{ color: "rgba(144, 255, 211, 1)" }}>Dream Home</span>{" "}
          with Nearluk
        </h3>
        <h6
          style={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
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
    </div>
  );
}
