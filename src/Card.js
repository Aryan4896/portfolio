import React from "react";
import { Icon } from "@iconify/react";
const Card = (props) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body"></div>
      </div>
    </>
  );
};
export default Card;
