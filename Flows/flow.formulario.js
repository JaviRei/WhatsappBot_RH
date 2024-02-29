const { addKeyword } = require("@bot-whatsapp/bot");

const flowFormulario = addKeyword(["1", "aplicar"]).addAnswer(
  "Entraste al formulario"
);

module.exports = flowFormulario;
