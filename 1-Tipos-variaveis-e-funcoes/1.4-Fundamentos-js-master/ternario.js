{
  let idadeMinima;
  const idadeCliente = 18;
  const countryCliente = "EUA";

  if (
    idadeCliente >=
    (function () {
      if (countryCliente === "EUA") {
        idadeMinima = 21;
      } else {
        idadeMinima = 18;
      }
      return idadeMinima;
    })()
  ) {
    console.log("Autorizado");
  } else {
    console.log("Não autorizado");
  }
}

{
  var idadeMinima = 18;
  const idadeCliente = 18;
  //condicao                                 //true          //false
  console.log(idadeCliente >= idadeMinima ? "Autorizado" : "Não autorizado");
}
