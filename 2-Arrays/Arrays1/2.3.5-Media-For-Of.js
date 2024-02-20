const colunaValoresLancamentos = 6; // coluna onde ficam os valores dos centros de custo
const colunaCentrosLancamentos = 8; // coluna onde ficam os códigos dos centros de custo

const planilhaAtiva = SpreadsheetApp.getActiveSpreadsheet();
const abaAtiva = planilhaAtiva.getActiveSheet();

const planilhaQuadro = SpreadsheetApp.openById(
  "1STBGPnufz-fDUpAd9ZhanR6cR9rpQEhWHIy_TFTxUKo"
);
const centrosInfo = planilhaQuadro
  .getSheetByName("dados")
  .getRange("A:C")
  .getValues()
  .flat()
  .filter((value) => value !== "");

const resumoCentros = [
  ...new Set(
    abaAtiva
      .getRange("H2:H")
      .getValues()
      .flat()
      .filter((value) => value !== "")
  ),
];
const linhaInicialResumo = 7; // linha onde se iniciam os lançamentos com resumo por centro de custo
const qtdresumoCentros = resumoCentros.length;
const resumoLancamentos = abaAtiva.getRange(
  linhaInicialResumo,
  1,
  qtdresumoCentros,
  3
);

function test() {
  abaAtiva.getRange("A:E").clear();

  const destinoAbaMesResumo = resumoCentros.map((codigoCentro) => {
    const indiceInfo = centrosInfo.indexOf(codigoCentro);
    if (indiceInfo !== -1) {
      const departamento = centrosInfo[indiceInfo - 1];
      const descricaoCentro = centrosInfo[indiceInfo + 1];
      return [codigoCentro, departamento, descricaoCentro];
    }
    return ["", "", ""];
  });

  const qtdLancamentos = abaAtiva //Quantidade de lançamentos
    .getRange("H:H")
    .getValues()
    .flat()
    .filter((value) => value !== "").length;
  const linhaPrimeiroLancamento = 1; // linha onde se iniciam os lançamentos

  const centrosLancados = abaAtiva //Centros dos lançamentos
    .getRange(linhaPrimeiroLancamento, colunaCentrosLancamentos, qtdLancamentos)
    .getValues()
    .flat();
  const valoresLancados = abaAtiva //Valores dos lançamentos
    .getRange(linhaPrimeiroLancamento, colunaValoresLancamentos, qtdLancamentos)
    .getValues()
    .flat();

  // Inicializa um objeto para armazenar as somas dos valores por centro
  const somaPorCC = {};

  // Loop sobre os centros únicos
  resumoCentros.forEach((centroUnico, index) => {
    // Filtra os valores correspondentes ao centro único
    const valoresDoCentro = valoresLancados.filter(
      (valor, i) => centrosLancados[i] === centroUnico
    );

    // Soma os valores e atribui ao centro no objeto de somaPorCC
    somaPorCC[centroUnico] = valoresDoCentro.reduce(
      (soma, valor) => soma + valor,
      0
    );
  });

  // Inserir as somas na coluna D a partir da linha
  const colunaResumoValores = 4; // Coluna D

  resumoLancamentos.setValues(destinoAbaMesResumo);

  resumoCentros.forEach((centroUnico, index) => {
    const linha = linhaInicialResumo + index;
    abaAtiva
      .getRange(linha, colunaResumoValores)
      .setValue(somaPorCC[centroUnico]);
  });

  const colunaResumoDescricoesCentro = 3;

  const resumoDescricoesCentro = [
    ...new Set(
      abaAtiva
        .getRange(
          linhaInicialResumo,
          colunaResumoDescricoesCentro,
          qtdresumoCentros
        )
        .getValues()
        .flat()
        .filter((value) => value !== "")
    ),
  ];

  const linhaInicialresumoDescricoesCentro = 2;
  resumoDescricoesCentro.forEach((departamento, index) => {
    const linha = linhaInicialresumoDescricoesCentro + index;
    abaAtiva
      .getRange(linha, colunaResumoDescricoesCentro)
      .setValue(departamento);
  });

  const resumoValores = resumoCentros.map(
    (centroUnico) => somaPorCC[centroUnico]
  );
  const resumoDescricoes = abaAtiva
    .getRange(
      linhaInicialResumo,
      colunaResumoDescricoesCentro,
      qtdresumoCentros
    )
    .getValues()
    .flat()
    .filter((value) => value !== "");

  // Inicializa um objeto para armazenar as somas dos valores por descrição de centro
  const somaPorDescricaoCentro = {};

  // Loop sobre as descrições únicas
  resumoDescricoesCentro.forEach((descricaoCentro) => {
    // Filtra os valores correspondentes à descrição do centro
    const valoresDaDescricao = resumoCentros.filter(
      (centroUnico) =>
        centrosInfo[centrosInfo.indexOf(centroUnico) + 1] === descricaoCentro
    );

    // Soma os valores e atribui à descrição do centro no objeto de somaPorDescricaoCentro
    somaPorDescricaoCentro[descricaoCentro] = valoresDaDescricao.reduce(
      (soma, centroUnico) => soma + somaPorCC[centroUnico],
      0
    );
  });

  // Extrair os valores da soma por descrição do objeto e armazenar em um array
  const valoresSomaPorDescricaoCentro = resumoDescricoesCentro.map(
    (descricaoCentro) => somaPorDescricaoCentro[descricaoCentro]
  );

  valoresSomaPorDescricaoCentro.forEach((valor, index) => {
    const linha = linhaInicialresumoDescricoesCentro + index;
    abaAtiva.getRange(linha, 4).setValue(valor);
  });
}
