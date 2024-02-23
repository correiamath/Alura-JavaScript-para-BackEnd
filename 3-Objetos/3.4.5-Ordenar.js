const clientes = require("./3.4.2-Clientes.json");

function ordenar(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });
  return resultado;
}

const ordenarNome = ordenar(clientes, "nome");
console.log(ordenarNome);
