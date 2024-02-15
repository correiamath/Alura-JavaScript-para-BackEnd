// Arquivo procurando-aluno.js

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibirNomeENota(aluno) {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    // const alunos = listaDeAlunosEMedias[0];
    // const medias = listaDeAlunosEMedias[1];
    // Em outra sintaxe: Cria-se duas contantes alunos e medias, sendo correspondentes a posição 0 e 1 da listaDeAlunosEMedias
    const [alunos, medias] = listaDeAlunosEMedias;

    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    console.log(`${aluno} tem a média ${mediaDoAluno}`);
  } else {
    console.log(`Aluno não encontrado`);
  }
}

exibirNomeENota("João");
