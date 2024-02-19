const { addKeyword } = require("@bot-whatsapp/bot");
const getData = require("../formulas/get.Data");
const flowVacantes = require("./flow.Vacantes");

let vacante_activa = [];
num_vacantes = null;

// module.exports = addKeyword("1")
const flowInfo = addKeyword("1")
  .addAnswer(["*_Vacantes activas_*", "⌛..."])
  .addAction(async (_, { flowDynamic }) => {
    const data = await getData();
    for (key in data) {
      try {
        if (data[key].status == true) {
          vacante_activa = data[key].nombre_vacante;
          await flowDynamic(`*• ${parseInt(key) + 1}  ||*  ${vacante_activa}`);
          num_vacantes = parseInt(key) + 1;
        }
      } catch {
        console.error("Solicitud denegada");
      }
    }
  })
  .addAnswer(
    "Selecciona el numero de la vacante de tu interes",
    // { capture: true },
    async (ctx, { state, fallBack }) => {
      await state.update({ vacante: ctx.body });
      // const vars = state.getMyState();
      // console.log(vars);
      // console.log("eleccion de vacante");
      const data = await getData();

      eleccion = parseInt(ctx.body);
      if (Number.isNaN(eleccion)) {
        return fallBack("fallback activado");
      } else {
        console.log(`Acceso exitoso, elección de vacante`);
      }
    },
    [flowVacantes]
  );

module.exports = flowInfo;
