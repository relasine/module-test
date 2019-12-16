import React from "react";

const Card = ({ header, subheader, text }) => {
  return (
    <article>
      <h4>{header}</h4>
      <h6>{subheader}</h6>
      <p>{text}</p>
    </article>
  );
};

export default Card;
