import Card from "../../Components/CardDominios";
import "./lastlogon.css";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Papa from "papaparse";

class LastLogon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qntd: 0,
      qntd_bloq: 0,
    };
  }

  componentDidMount() {
    this.loadCSV("../../../arquivos/baselastlogon_sequoia.csv", "qntd_bloq");
    this.loadCSV("../../../arquivos/baselastlogon.csv", "qntd");
  }
  loadCSV = (csvPath, stateKey) => {
    Papa.parse(csvPath, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        const count = results.data.length;
        this.setState({ [stateKey]: count });
      },
    });
  };

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <div className="card-container">
            <Card
              className="sequoialog"
              name="Sequoia Log"
              number={this.state.qntd}
              linkVer="/VerdetalhesLastLogonSequoiaLog"
            />
            <Card
              className="sequoialocal"
              name="Sequoia Local"
              number={this.state.qntd_bloq}
              linkVer="/VerdetalhesLastLogonSequoiaLocal"
            />
          </div>
        </div>
      </>
    );
  }
}

export default LastLogon;
