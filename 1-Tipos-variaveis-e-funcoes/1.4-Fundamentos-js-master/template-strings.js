const nome = "Ju";
const idade = 2021 - 1981;
const cidadeDeNascimento = "São Paulo";

// const apresentacao = "meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
// utiliza aspas e acento grave para concatenar as variáveis ao texto

const apresentacao = `meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;

console.log(apresentacao);

let d = "";
let a = [];

console.log(d == 0);
console.log(a == 0);
if (d) {
  console.log(1);
} else {
  console.log(0);
}
