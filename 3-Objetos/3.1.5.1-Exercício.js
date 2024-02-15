const pessoa = {
  nome: "Bruce Banner",
  dataNascimento: "25/01/1980",
  carteiraIdentidade: "997776-X",
  email: "profbanner@email.com",
  telefone: "+552877776666",
  cidade: "Cachoeiro de Itapemirim",
  estado: "ES",
};

pessoa.seguroSocial = "segnx000";
pessoa.cpf = "00000000000";

console.log(
  `O nome da pessoa é ${pessoa.nome}, nascida em ${
    pessoa.dataNascimento
  }, catteira de identidade inicia com ${pessoa.carteiraIdentidade.substring(
    0,
    4
  )}...`
);
