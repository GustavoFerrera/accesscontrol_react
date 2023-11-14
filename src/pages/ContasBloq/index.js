import Card from "../../Components/CardDominios";
import "./contasbloq.css";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Papa from "papaparse";

class Contasbloq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qntd: 0,
      qntd_bloq: 0,
    };
  }

  componentDidMount() {
    this.loadCSV("../../../arquivos/basecontas_bloq.csv", "qntd");
    this.loadCSV("../../../arquivos/basecontas_bloq_sequoia.csv", "qntd_bloq");
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
              linkVer="/VerdetalhesContasBloqSequoiaLog"
            />
            <Card
              className="sequoialocal"
              name="Sequoia Local"
              number={this.state.qntd_bloq}
              linkVer="/VerdetalhesContasBloqSequoiaLocal"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Contasbloq;
