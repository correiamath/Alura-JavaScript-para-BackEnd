//Objeto Cliente
const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

//Adicionando mais informações ao objeto
cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

//Adicionando lista de informações ao objeto
cliente.enderecos.push({
  rua: "R. Joseph Ladder",
  numero: 404,
  apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

console.log(listaApenasApartamentos);
