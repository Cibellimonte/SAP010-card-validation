import { validator } from "./validator.js";

let clickCount = 0; // Variável para contar o número de cliques

window.validateCard = function () {
  const cardNumber = document.getElementById("cardNumber").value;
  const resultElement = document.getElementById("result");

  clickCount++; // Incrementa o contador a cada clique

  if (clickCount === 2) {
    resultElement.innerHTML =
      '<span class="message">Por favor, insira um novo número de cartão.</span>';
    document.getElementById("cardNumber").value = ""; // Limpa o campo de input
    clickCount = 0; // Reseta o contador para permitir novo número no próximo clique
    return;
  }

  if (cardNumber.trim() === "") {
    resultElement.innerHTML = ""; // Limpa a mensagem
    return;
  }

  const isValid = validator.isValid(cardNumber);
  const maskedCardNumber = validator.maskify(cardNumber);

  if (isValid) {
    resultElement.innerHTML =
      '<span class="valid">Cartão de crédito é válido!</span>';
  } else {
    resultElement.innerHTML =
      '<span class="invalid">Cartão de crédito é inválido!</span>';
  }

  console.log("Cartão mascarado:", maskedCardNumber);
  document.getElementById("cardNumber").value = maskedCardNumber; // Mostra o número mascarado no campo de input
};
