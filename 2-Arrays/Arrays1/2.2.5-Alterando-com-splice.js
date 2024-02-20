const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
nomes.splice(1, 2); //a partir da posição 1, remove 2 elementos.
nomes.push("Rodrigo");

console.log(nomes);

console.log("###############################");
animaisDoAquario = ["🐋", "🐙", "🐬", "🦈"];

animaisDoAquario.splice(1, 0, "🐠"); //a partir da posição 1, remove 0 elementos e adiciona "🐠".
console.log(animaisDoAquario);
animaisDoAquario.splice(3, 2, "🐟"); //a partir da posição 3, remove 2 elementos e adiciona "🐟".
console.log(animaisDoAquario);
