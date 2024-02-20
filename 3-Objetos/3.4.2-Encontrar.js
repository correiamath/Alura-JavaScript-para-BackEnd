const clientes = require("./3.4.2-Clientes.json");

//buscar
function encontrar(lista, chave, valor) {
  // return lista.find((item) => item[chave] === valor);
  return lista.find((item) => item[chave].includes(valor));
}
const encontrado = encontrar(clientes, "telefone", "11998123183");
console.log(encontrado);
