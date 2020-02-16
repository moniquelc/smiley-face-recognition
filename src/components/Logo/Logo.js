import React from "react";
import Tilt from "react-tilt";
import smile from "./smiley.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <img style={{ height: "120px" }} alt="logo" src={smile} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
