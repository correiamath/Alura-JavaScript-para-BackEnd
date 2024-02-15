const numerosPares = [2, 4, 6, 8];
const numerosImpares = [1, 3, 5, 7];

//const numeros = [numerosPares, numerosImpares];
// sintaxe para combinar elementos dos arrays
const numeros = [...numerosPares, ...numerosImpares];

// const num1 = 1;
// const num2 = 2;

const [num1, num2] = [1, 2];

console.log(numeros);

const pessoa = {
  nome: "Matheus",
  idade: 26,
};

const pessoaComTelefone = {
  ...pessoa,
  telefone: 12121212,
};

console.log(pessoaComTelefone);

const { idade } = pessoa;
console.log(idade);

function imprimeDados(dados) {
  const { nome, idade } = dados;
  console.log(nome, idade);
}

imprimeDados(pessoa);
