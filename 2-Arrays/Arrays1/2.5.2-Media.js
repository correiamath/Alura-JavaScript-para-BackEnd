const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A média da sala de JavaScript é ${calculaMedia(salaJS)}`);
console.log(`A média da sala de Java é ${calculaMedia(salaJava)}`);
console.log(`A média da sala de Python é ${calculaMedia(salaPython)}`);

//1. Somar Todos os Números em um Array:
// Dado um array de números, crie uma função que retorna a soma de todos os elementos.
const numeros = [1, 2, 3, 4, 5];
const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(soma);

//2. Multiplicar Todos os Elementos de uma Lista:
// Dada uma lista de números, crie uma função que retorna o produto de todos os elementos.
const lista = [2, 3, 4, 5];
const produto = lista.reduce(
  (acumulador, elemento) => acumulador * elemento,
  1
);
console.log(produto);

//3. Concatenar Strings de um Array:
// Dado um array de strings, crie uma função que retorna uma única string resultante da concatenação de todos os elementos.
const palavras = ["Olá", " ", "Mundo", "!"];
const frase = palavras.reduce(
  (acumulador, palavra) => acumulador + palavra,
  ""
);
console.log(frase);

//4. Encontrar o Maior Valor em um Array:
// Dado um array de números, crie uma função que retorna o maior valor presente no array.
const numeros = [10, 5, 8, 20, 15];
const maiorValor = numeros.reduce(
  (acumulador, numero) => (numero > acumulador ? numero : acumulador),
  numeros[0]
);
console.log(maiorValor);

//5. Contar a Ocorrência de Cada Elemento:
// Dado um array, crie uma função que retorna um objeto contendo a contagem de cada elemento.
const elementos = ["a", "b", "a", "c", "b", "a"];
const contagem = elementos.reduce((acumulador, elemento) => {
  acumulador[elemento] = (acumulador[elemento] || 0) + 1;
  return acumulador;
}, {});
console.log(contagem);
