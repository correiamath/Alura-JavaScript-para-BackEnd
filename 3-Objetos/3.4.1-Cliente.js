const dados = require("./3.4.1-Cliente.json");

console.log(dados);
console.log(`dados is an ${typeof dados}`);

const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(`clienteEmString is an ${typeof clienteEmString}`);

console.log(clienteEmString.nome);
console.log(JSON.parse(clienteEmString));
