const numeros = [100, 200, 300, 400, 500, 600];

for (let indice = 0; indice < 6; indice++) {
  console.log(numeros[indice]);
}

const notas = [10, 10, 8, 5];

function gerarSenha() {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
  const comprimentoSenha = 32;
  let senha = "";

  for (let i = 0; i < comprimentoSenha; i++) {
    const indiceCaractere = Math.floor(Math.random() * caracteres.length);
    senha += caracteres.charAt(indiceCaractere);
  }

  return senha;
}

// Exemplo de uso
const senhaGerada = gerarSenha();
console.log(senhaGerada);
