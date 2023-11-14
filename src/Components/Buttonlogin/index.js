import React from "react";
import * as C from "./styles";

const Button = ({ Text, onClick, Type = "button" }) => {
  return (
    <C.Button type={Type} onClick={onClick}>
      Entrar
    </C.Button>
  );
};

export default Button;
