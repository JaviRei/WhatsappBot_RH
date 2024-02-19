const { addKeyword } = require("@bot-whatsapp/bot");
const flowVacantes = require("./flow.acantes");
const getData = require("../formulas/get.Data");
const flowAcantes = require("./flow.acantes");

let vacante_activa = [];
num_vacantes = null;

// module.exports = addKeyword("1")
const flowInfo = addKeyword("1")
  .addAnswer("_*VACANTES ACTIVAS:*_")
  .addAction(async (_, { flowDynamic }) => {
    try {
      const data = await getData();
      for (const key in data) {
        if (data[key].status == true) {
          vacante_activa[key] = data[key].nombre_vacante;
          await flowDynamic(`*🔸 ${parseInt(key) + 1}  ||*  ${vacante_activa}`);
          num_vacantes = parseInt(key) + 1;
        }
      }
      console.log(
        `Datos encontrados con exito, estas son las vacantes activas ${vacante_activa}`
      );
    } catch {
      console.log("No se encontraron datos para la vacante");
    }
  })

  .addAnswer(
    "Selecciona el numero de la vacante de tu interes:",
    { capture: true },
    async (ctx, { state, fallBack }) => {
      await state.update({ vacante: ctx.body });
      const data = await getData();

      eleccion = parseInt(ctx.body);
      if (Number.isNaN(eleccion)) {
        return fallBack("fallback activado");
      } else {
        console.log(`Acceso exitoso, elección de vacante`);
      }
    },
    [flowAcantes]
  );
module.exports = flowInfo;
