const validator = {
  isValid: function (cardNumber) {
    cardNumber = cardNumber.replace(/\s/g, ""); // Remover espaços em branco
    return this.luhnAlgorithm(cardNumber); // Verificar se tem exatamente 16 dígitos numéricos e aplicar o algoritmo de Luhn
  },

  maskify: function (cardNumber) {
    return cardNumber.replace(/.(?=.{4})/g, "#"); // Substituir todos os dígitos por "#", exceto os últimos 4 dígitos
  },

  luhnAlgorithm: function (cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      console.log(digit)

      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  }
};

export { validator };
