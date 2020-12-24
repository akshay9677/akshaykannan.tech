import React from "react";
import Header from "./Header";
function NavbarHead(props) {
  return (
    <div className={props.dark ? "filter-dark imgBg" : "imgBg"}>
      <div style={{ zIndex: 99 }}>
        <div style={styles.nameContainer}>
          <div className='text-base'>Hey ,I'm</div>
          <h1 className='name red'>Akshay Kannan</h1>

          <div
            style={{ paddingTop: "8rem" }}
            className='downArrow'
            data-aos='flip-right'
            data-aos-delay='500'
          >
            <i className='fas fa-angle-double-down fa-5x'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  nameContainer: {
    textAlign: "center",
    paddingTop: "10rem",
  },
  borderName: {
    borderBottom: "2px solid #FFFFFF",
    borderBottomColor: "rgba(255,255,255,0.35)",
    width: "25rem",
  },
};

export default NavbarHead;
