import Card from "../../Components/CardDominios";
import "./afastados.css";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Papa from "papaparse";

class Afastados extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qntd: 0,
      qntd_bloq: 0,
    };
  }

  componentDidMount() {
    this.loadCSV("../../../arquivos/afastados_total.csv", "qntd");
    this.loadCSV(
      "../../../arquivos/afastados_nao_encontrados.csv",
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
              linkVer="/VerdetalhesAfastBloq"
            />
            <Card
              className="sequoialocal"
              name="Atenção"
              number={this.state.qntd_bloq}
              linkVer="/VerDetalhesAfastNaoBloq"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Afastados;
