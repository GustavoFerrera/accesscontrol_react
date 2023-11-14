import React, { Component } from "react";
import "./menu.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/ButtonVer";

class Menu extends Component {
  render() {
  
    return (
      <>
        <div className="main">
          <Header className="nav" />
          <div className="secao">
            <section className="col-1">
              <Button className="Button" name="Desligados" link="/Demitidos" />
              <Button className="Button" name="Afastados" link="/Afastados" />
              <Button
                className="Button"
                name="Falhas de login"
                link="/FalhasdeLog"
              />
              <Button
                className="Button"
                name="Nunca acessaram"
                link="/NuncaAcessa"
              />
            </section>
          </div>
          <div className="secao">
            <section className="col-2">
              <Button
                className="Button"
                name="Contas bloqueadas"
                link="/ContasBloq"
              />
              <Button
                className="Button"
                name="Never expires"
                link="/NeverExpires"
              />
              <Button
                className="Button"
                name="Last Logon 45"
                link="/LastLogon"
              />
              <Button className="Button" name="Admins" link="/Admins" />
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
