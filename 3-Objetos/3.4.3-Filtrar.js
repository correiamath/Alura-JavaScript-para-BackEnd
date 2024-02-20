const clientes = require("./3.4.2-Clientes.json");

function filtrarApartamentosSemComplemento(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento === true && /// para consultar se é verdadeiro pode omitir o "=== true"
      !cliente.endereco.hasOwnProperty("complemento") // método que checa se o objeto tenha tem uma propriedade (! pra negar)
    );
  });
}

const filtrados = filtrarApartamentosSemComplemento(clientes);
console.log(filtrados);
