// selecionando os elementos do HTML
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const botao = document.getElementById("btnSomar");
const resultado = document.getElementById("resultado");

// função que será executada ao clicar no botão
botao.addEventListener("click", function () {
  const valor1 = Number(numero1.value); // converte os valores dos inputs para número
  const valor2 = Number(numero2.value);

  const soma = valor1 + valor2;

  resultado.textContent = `O resultado é: ${soma}`;
});
