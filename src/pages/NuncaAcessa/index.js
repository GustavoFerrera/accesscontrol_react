import Card from "../../Components/CardDominios";
import "./nuncaacessa.css";
import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Papa from "papaparse";

class Nuncaacessa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qntd: 0,
      qntd_bloq: 0,
    };
  }

  componentDidMount() {
    this.loadCSV("../../../arquivos/base_nuncaacessaram.csv", "qntdnunca");
    this.loadCSV(
      "../../../arquivos/base_nuncaacessaram_sequoia.csv",
      "qntd_nunca"
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
              number={this.state.qntdnunca}
              linkVer="/VerdetalhesNuncaAcessaSequoiaLog"
            />
            <Card
              className="sequoialocal"
              name="Sequoia Local"
              number={this.state.qntd_nunca}
              linkVer="/VerdetalhesNuncaAcessaSequoiaLocal"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Nuncaacessa;
