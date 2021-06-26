const { readFileSync } = require("fs");
const path = require("path");

const file = path.join(__dirname, "Padron_corto.csv");
const read = readFileSync(file, "utf-8");
//console.log(read);
const splited = read.split("\n");
const json = JSON.stringify(splited);

//console.log(json);
//splited.forEach((row) => console.log(row));
