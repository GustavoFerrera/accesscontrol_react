import React, { Component, useEffect, useState } from "react";
import $ from "jquery";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import Papa from "papaparse";
import "datatables.net";
import "./verdetalhesfl_local.css";
import Header from "../../../Components/Header/Header";
import { data } from "jquery";
import DataGrid from "../../../Global/DataGrid";

const parseCSV = (text) => {
  const result = {
    header: [],
    data: [],
  };

  const [header, ...content] = text.split("\n");

  result.header = header.split(",");

  const maxCols = result.header.length;

  content.forEach((item) => {
    result.data.push(item.split(",").slice(0, maxCols));
  });

  return result;
};

export default function VerdetalhesFalhasSequoiaLocal() {
  const [csv, setCsv] = useState(null);
  useEffect(() => {
    fetch("../../../arquivos/basefalhas_login_sequoia.csv")
      .then((r) => r.text())
      .then((text) => {
        setCsv(parseCSV(text));
      });
  }, []);

  return (
    <>
      <Header />
      <div className="container-Ver-falhaslocal">
        <header className="row">
          <div className="cabecalho">
            <h1 className="text-center">Colaboradores com falhas de login</h1>
          </div>
        </header>
        <main className="full-width">
          <div className="col">
            <DataGrid csv={csv} />
          </div>
        </main>
      </div>
    </>
  );
}
