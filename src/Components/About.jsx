import React from "react";
import aboutImage from "../images/about.png";

function About() {
  return (
    <div id="about">
      <div className="about-text">
        <h1>UPCOMING EVENTS</h1>
        <p>
          About Burger Delight – At Burger Delight, we’re passionate about
          serving the best burgers in town. Made with fresh ingredients,
          perfectly grilled patties, and a variety of toppings, our burgers are
          designed to satisfy every craving. Whether you’re dining in or
          ordering online, we’re here to deliver a delicious experience every
          time! 🍔✨,{" "}
        </p>
        <button>Read more</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="" />
      </div>
    </div>
  );
}

export default About;
