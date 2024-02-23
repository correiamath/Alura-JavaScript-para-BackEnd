const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];
const reprovados = alunos.filter((aluno, indice) => {
  return medias[indice] < 7;
});
console.log(reprovados);

//Exemplos:

1; //Filtrar Números Pares://
// Dado um array de números, crie uma função que filtre apenas os números pares.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

2; //Filtrar Palavras com Tamanho Específico://
// Dada uma lista de palavras, crie uma função que filtre apenas as palavras com mais de três caracteres.
const palavras = ["cachorro", "gato", "elefante", "pato", "cobra"];
const palavrasFiltradas = palavras.filter((palavra) => palavra.length > 3);
console.log(palavrasFiltradas);

3; //Filtrar Números Maiores que 50://
// Dado um array de números, crie uma função que filtre apenas os números maiores que 50.
const numerosGrandes = [20, 60, 30, 70, 40, 80, 50];
const numerosFiltrados = numerosGrandes.filter((numero) => numero > 50);
console.log(numerosFiltrados);

4; //Filtrar Produtos por Preço://
// Dada uma lista de produtos, crie uma função que filtre apenas os produtos com preço inferior a R$ 100.
const produtos = [
  { nome: "Notebook", preco: 1200 },
  { nome: "Smartphone", preco: 800 },
  { nome: "Tablet", preco: 150 },
  { nome: "Fone de Ouvido", preco: 50 },
];
const produtosBaratos = produtos.filter((produto) => produto.preco < 100);
console.log(produtosBaratos);

5; //Filtrar Idades entre 18 e 30 anos://
// Dada uma lista de pessoas com suas idades, crie uma função que filtre apenas as pessoas com idade entre 18 e 30 anos.
const pessoas = [
  { nome: "Ana", idade: 25 },
  { nome: "João", idade: 35 },
  { nome: "Maria", idade: 22 },
  { nome: "Pedro", idade: 28 },
];
const pessoasJovens = pessoas.filter(
  (pessoa) => pessoa.idade >= 18 && pessoa.idade <= 30
);
console.log(pessoasJovens);
