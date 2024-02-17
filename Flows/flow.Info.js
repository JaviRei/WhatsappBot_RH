const { addKeyword, addAnswer } = require("@bot-whatsapp/bot");
const flowFormulario = require("./flow.formulario");
const getData = require("../formulas/get.Data");
const flowVacantes = require("./flow.Vacantes");

let vacante_activa = [];
var num_vacantes;

const seleccion = addKeyword(".").addAnswer(
  "Escribe el numero de la vacante deseada",
  { capture: true },
  async (ctx, { fallBack, state }) => {
    eleccion = parseInt(ctx.body);
    console.log(eleccion);
    console.log(num_vacantes);
    if (!Number.isNaN(eleccion) && eleccion <= num_vacantes) {
      try {
        await state.update({ vacante: ctx.body });
        console.log("Acceso exitoso, elección de vacante");
      } catch {}
    } else {
      return fallBack();
    }
  },
  [flowFormulario, flowVacantes]
);

module.exports = addKeyword("1").addAnswer(
  ["*_Vacantes activas_*", "⌛..."],
  null,
  async (_, { flowDynamic, gotoFlow }) => {
    const data = await getData();
    for (key in data) {
      try {
        if (data[key].status == true) {
          vacante_activa = data[key].nombre_vacante;
          await flowDynamic(`*• ${parseInt(key) + 1}  ||*  ${vacante_activa}`);
          num_vacantes = parseInt(key) + 1;
          console.log("Vacante Activa", vacante_activa);
        }
      } catch {
        console.error("Solicitud denegada");
      }
    }
    return gotoFlow(seleccion);
  }
);
