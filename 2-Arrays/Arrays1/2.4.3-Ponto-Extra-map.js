const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1; // se nota + 1 >= 10 então 10, se não nota+1
});
console.log(notasAtualizadas);
