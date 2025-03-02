import React from "react";

function Header() {
  return (
    <div id="main">
      <div className="header-heading">
        <h3>It is great time for a good taste of burger</h3>
        <h1>
          <span>BURGER</span>FOR
          <br />
          WEEK
        </h1>
        <p className="details">
          Welcome to Burger Delight, where we serve mouthwatering, juicy
          burgersmade with the freshest ingredients and a passion for great
          taste! Ourwebsite is designed to give you a seamless
          experience—whether you’re craving a classic cheeseburger, a spicy BBQ
          delight, or a plant-based alternative, we've got something for
          everyone.
        </p>
        <div className="header-btns">
          <a href="#" className="header-btn">
            Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
