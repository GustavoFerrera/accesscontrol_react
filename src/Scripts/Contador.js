const fs = require("fs");
const csv = require("csv-parser");

// Função para contar as linhas em um arquivo CSV
function countCSVLines(csvFile) {
  return new Promise((resolve, reject) => {
    let lineCount = 0;

    // Verifica se o arquivo existe
    if (!fs.existsSync(csvFile)) {
      reject("O arquivo CSV não foi encontrado.");
      return;
    }

    fs.createReadStream(csvFile)
      .pipe(csv())
      .on("data", () => {
        lineCount++;
      })
      .on("end", () => {
        resolve(lineCount);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

module.exports = { countCSVLines };
