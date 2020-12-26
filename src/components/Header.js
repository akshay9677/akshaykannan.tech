import React from "react";
import { Link } from "react-router-dom";
import Switchs from "react-switch";

function Header(props) {
  let conditionColor = { color: "#dc3545", fontWeight: "bold" };

  function DarkModeicon() {
    return (
      <div
        style={{ color: "#242526", paddingLeft: "10px", paddingTop: "1.8px" }}
      >
        <i className="fas fa-moon"></i>
      </div>
    );
  }

  function LightModeIcon() {
    return (
      <div style={{ color: "white", paddingLeft: "10px", paddingTop: "1.8px" }}>
        <i className="fas fa-lightbulb"></i>
      </div>
    );
  }
  return (
    <div className="navbar-header" data-aos="flip-right" data-aos-delay="200">
      <div
        className="flex-row flex-end-col pt-2 pr-3.5 container"
        style={{ fontWeight: "bold" }}
      >
        <Link
          className="nav-item active zoom p10 no-style pointer"
          style={conditionColor}
          to="/"
        >
          About
        </Link>
        <Link
          className="nav-item active zoom p10 no-style pointer"
          style={conditionColor}
          to="/blogs"
        >
          Blogs
        </Link>

        <div className="nav-item custom-control custom-switch pt-1.5 pr-2">
          <Switchs
            onChange={props.onChange}
            checked={props.checked}
            onColor="#dc3545"
            offColor="#dc3545"
            onHandleColor="#242526"
            uncheckedIcon={<LightModeIcon />}
            checkedIcon={<DarkModeicon />}
            width={60}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
