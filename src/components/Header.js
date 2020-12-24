import React from "react";

function Header(props) {
  let conditionColor = props.dark ? { color: "white" } : { color: "#888" };
  return (
    <div
      className='container navbar-header'
      data-aos='flip-right'
      data-aos-delay='200'
    >
      <div
        className='flex-row flex-end-col pt-2 pr-3.5'
        style={{ fontWeight: "bold" }}
      >
        <a
          className='nav-item active zoom p10 no-style pointer'
          style={conditionColor}
          href='/#intro'
        >
          About
        </a>
        <a
          className='nav-item active zoom p10 no-style pointer'
          style={conditionColor}
          href='/#contact'
        >
          Contact
        </a>
        <a
          className='nav-item active zoom p10 no-style pointer'
          style={conditionColor}
          href='/blogs'
        >
          Blogs
        </a>
      </div>
      {/* <div class='pokeBt zoom'>
    <button class='btn btn-danger btn-sm'>
      <img class='pokeBall' src='/images/pokeball.png' alt='' />
    </button>
  </div> */}
    </div>
  );
}

export default Header;
