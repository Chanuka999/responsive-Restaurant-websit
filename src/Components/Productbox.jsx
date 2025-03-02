import React from "react";

function Productbox(props) {
  return (
    <div className="a-box">
      <div className="a-b-box">
        <img src={props.image} alt="" />
      </div>

      <div className="a-b-text">
        <h2>{props.title}</h2>
        <button className="Productbox-button">Order Now</button>
      </div>
    </div>
  );
}
export default Productbox;
