const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];


//para cada chave no objeto cliente, exibir:
for (let chave in cliente){
  console.log(chave);
}

//para cada chave no objeto cliente, exibir cliente.chave:
for (let chave in cliente){
  console.log(cliente[chave]);
}

//para cada chave no objeto cliente, exibir cliente.chave:
for (let chave in cliente){
  let tipo = typeof cliente[chave];
  if (tipo !== 'object' && tipo !== 'function'){
  console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
  }
} 
