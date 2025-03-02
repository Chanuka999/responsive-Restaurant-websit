import React from "react";
import Productbox from "./Productbox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";

function Products() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        Burger Delight – The ultimate destination for juicy, handcrafted
        burgers! 🍔 Enjoy classic, spicy, and veggie options, paired with crispy
        fries and refreshing drinks. Order now for a mouthwatering{" "}
      </p>
      <div className="a-container">
        <Productbox image={pimage1} title="luger burger" />
        <Productbox image={pimage2} title="li pegon burger" />
        <Productbox image={pimage1} title="luger burger" />
      </div>
    </div>
  );
}
export default Products;
