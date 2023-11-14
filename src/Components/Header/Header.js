import React, { Component } from "react";
import "./header.css";

 

class Header extends Component {
  handleLogout = () => {
    // Coloque aqui a lógica para remover o token de acesso
    localStorage.removeItem("auth");

    // Redirecione o usuário para a tela de login ou para onde desejar
    window.location.href = "/"; // Redireciona para a raiz, que pode ser a tela de login
  }

  render() {
    return (
<nav className="navbar">
<div className="container-fluid">
<a href="/">
<h1 className="logo">ACCESS CONTROL</h1>
</a>
<a
            className="material-symbols-outlined"
            href="#"
            id="null"
            onClick={this.handleLogout}
>
            logout
</a>
</div>
</nav>
    );
  }
}

 

export default Header;