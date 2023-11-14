import React from "react";
import "./carddominios.css";

function Card({ className, name, number, linkVer }) {
  return (
    <div className={`card ${className}`}>
      <div className="container">
        <div className="card_container">
          <div className="title">
            <h1>{name}</h1>
          </div>
          <div className="number">
            <h1>{number}</h1>
          </div>
          <div className="vermais">
            <div className="vermais-border">
              <a href={linkVer}>Ver detalhadamente</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
