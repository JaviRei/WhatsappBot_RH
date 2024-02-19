const { addKeyword } = require("@bot-whatsapp/bot");
const getData = require("../formulas/get.Data");

var data = getData();
var res = [];

for (key in data) {
  try {
    if (data[key].status == true) {
      console.log("ID Activa: ", res);
      return (res = data[key].id);
    }
  } catch {
    console.error("Solicitud denegada");
  }
}

const flowVacantes = addKeyword("2").addAnswer(
  "Entraste al FORMULARIO",
  null,
  async () => {
    console.log(res);
  }
);

module.exports = { flowVacantes };
