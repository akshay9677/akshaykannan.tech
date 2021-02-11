import React from "react";
function NavbarHead(props) {
  return (
    <div className={props.dark ? "filter-dark imgBg" : "imgBg"}>
      <div style={{ zIndex: 99, paddingTop: "15rem" }}>
        <div style={styles.nameContainer}>
          <div className="text-4xl">Hey ,I'm</div>
          <h1 className="name red">Akshay Kannan</h1>
          <div
            className="downArrow pt-5"
            data-aos="flip-right"
            data-aos-delay="500"
          >
            <i className="fas fa-angle-double-down fa-5x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  nameContainer: {
    textAlign: "center",
  },
  borderName: {
    borderBottom: "2px solid #FFFFFF",
    borderBottomColor: "rgba(255,255,255,0.35)",
    width: "25rem",
  },
};

export default NavbarHead;
