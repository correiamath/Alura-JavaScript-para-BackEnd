const nomes = ["Maria", "Pedro", "Carol", "Lucas"];

nomes.forEach(function (nome) {
  console.log(nome);
});

nomes.forEach((nome) => {
  console.log(nome);
});

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);

const lista = [1, 2, 3, 4, 5];

for (let indice = 0; indice < lista.length; indice++) {
  console.log(lista[indice]);
}
