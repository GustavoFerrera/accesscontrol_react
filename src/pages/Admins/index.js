import React, { Component } from "react";
import "./admins.css";
import Papa from "papaparse";
import Card from "../../Components/CardDominios";
import Header from "../../Components/Header/Header";

class Admins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qntd: 0,
      qntd_bloq: 0,
    };
  }

  componentDidMount() {
    this.loadCSV("../../../arquivos/baseadm.csv", "qntd");
    this.loadCSV("../../../arquivos/baseadm_sequoia.csv", "qntd_bloq");
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
              linkVer="/VerdetalhesAdmSequoiaLog"
            />
            <Card
              className="sequoialocal"
              name="Sequoia Local"
              number={this.state.qntd_bloq}
              linkVer="/VerdetalhesAdmSequoiaLocal"
            />
          </div>
        </div>
      </>
    );
  }
}

export default Admins;
