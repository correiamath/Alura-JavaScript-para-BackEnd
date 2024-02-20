//Tipo de dado
// Booleanos

// conversao explícita
// conversao implícita

const numero = 456;
const numeroString = "456";

console.log(typeof numero);
console.log(typeof numeroString);

console.log(numero == numeroString);
console.log(numero + numeroString); //numero + string vai acabar concatenando os valores
console.log(numero + Number(numeroString)); //aqui haverá a soma dos valores

// String()
// Vamos fazer alguns exemplos de conversão de números e booleanos através de String():

let telefone1 = 12341234;
console.log("O telefone é " + String(telefone1)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

// Outra opção para transformarmos um valor em String é usar o toString():

let telefone2 = 12341234;
console.log("O telefone é " + telefone2.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

let usuarioConectado = false;
console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
usuarioConectado = true;
console.log(String(usuarioConectado)); // agora teremos uma string “true”.

// Number()
// Vamos fazer alguns exemplos de conversão de textos e booleanos através de Number():

// Calcular a área de um retângulo
let largura = "10";
let altura = "5";
console.log(Number(largura) * Number(altura)); // teremos a conversão de String para números, possibilitando a realização da multiplicação
console.log(+largura * +altura); // teremos a conversão de String para números realizado usando o + antes das variáveis

let meuNome = "leonardo";
console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
console.log(+meuNome); // a conversão também retornará NaN

let usuarioConectado2 = false;
console.log(Number(usuarioConectado2)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
usuarioConectado2 = true;
console.log(Number(usuarioConectado2)); // agora teremos a conversão de true (verdadeiro) para o número 1.
