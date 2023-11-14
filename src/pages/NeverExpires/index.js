import Card from "../../Components/CardDominios";
import "./neverexpires.css";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Papa from "papaparse";

class NeverExpires extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qntd: 0,
      qntd_b: 0,
    };
  }

  componentDidMount() {
    this.loadCSV("../../../arquivos/basenever_expires.csv", "qntd");
    this.loadCSV(
      "../../../arquivos/basenever_expires_sequoia.csv",
      "qntd_b"
    );
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
              linkVer="/VerdetalhesNeverExpiresSequoiaLog"
            />
            <Card
              className="sequoialocal"
              name="Sequoia Local"
              number={this.state.qntd_b}
              linkVer="/VerdetalhesNeverExpiresSequoiaLocal"
            />
          </div>
        </div>
      </>
    );
  }
}

export default NeverExpires;
