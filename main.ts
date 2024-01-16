let idadeUsuario: number = 17;

if (idadeUsuario <= 15) {
  console.log("Você ainda não tem idade mínima para votar");
} else if (idadeUsuario <= 18 || idadeUsuario > 69) {
  console.log("Você já pode votar se quiser, porém, seu voto é facultativo");
} else {
  console.log("Voto obrigatório!");
}
