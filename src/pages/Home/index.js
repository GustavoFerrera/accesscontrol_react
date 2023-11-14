import React, { useState } from "react";
import "./home.css";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function Home() {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/menu");
  };

  return (
    <div className="container-home">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title" id="top">
              ACCESS CONTROL
            </span>
            <span className="login-form-title" id="footer">
              Bem Vindo!
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
              />
              <C.LabelError>{error}</C.LabelError>
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={senha !== "" ? "has-val input" : "input"}
                type="password"
                value={senha}
                onChange={(e) => {
                  setSenha(e.target.value);
                  setError("");
                }}
              />
              <C.LabelError>{error}</C.LabelError>
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <Link to="/Menu" className="login-form-btn" onClick={handleLogin}>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
