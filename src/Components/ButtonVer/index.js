import React from "react";
import "./button.css";

function Button({ name, link }) {
  return (
    <div className="col-esquerda">
      <div className="title">{name}</div>
      <a href={link}>
        <button type="button" className="btn">
          VER DETALHADAMENTE
        </button>
      </a>
    </div>
  );
}

export default Button;
