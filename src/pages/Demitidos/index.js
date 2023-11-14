import Card from "../../Components/CardDominios";
import "./demitidos.css";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Papa from "papaparse";

class Demitidos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qntd: 0,
      qntd_bloq: 0,
    };
  }

  componentDidMount() {
    this.loadCSV("../../../arquivos/desligados_total.csv", "qntd");
    this.loadCSV(
      "../../../arquivos/desligados_nao_encontrados.csv",
      "qntd_bloq"
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
              name="Bloqueados"
              number={this.state.qntd}
              linkVer="/VerdetalhesDesligadosBloq"
            />
            <Card
              className="sequoialocal"
              name="Atenção"
              number={this.state.qntd_bloq}
              linkVer="/VerdetalhesDesligadosNaoBloq"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Demitidos;
