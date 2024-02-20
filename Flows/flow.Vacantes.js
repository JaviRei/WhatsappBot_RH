const { addKeyword } = require("@bot-whatsapp/bot");
const getData = require("../formulas/get.Data");

// var data = getData();

module.exports = addKeyword(["1", "2", "3", "4", "5"]).addAction(
  async (ctx, { flowDynamic, state, provider }) => {
    console.log("Accedimos a Vacantes");

    const data = await getData();
    const seleccion = state.getMyState();
    const id = ctx.key.remoteJid;
    //
    let vac = seleccion.vacante;
    const nombre_vacante = data[vac].nombre_vacante;
    const img = data[vac].img;
    const horario = data[vac].horario;
    const prestaciones = data[vac].prestaciones;
    const ubicacion = data[vac].ubicacion;

    if (vac === 2) {
      await flowDynamic({ media: img });
      await flowDynamic({
        body: `${nombre_vacante}\n${horario}\n${prestaciones}\n${horario}\n${prestaciones}\n${ubicacion}\n`,
      });
      await provider.sendLocation(id, 20.63921097868601, -103.3686870002755);
    }

    // switch (vac) {
    //   case 1:
    //
    //     break;
    //   case 2:
    //     await flowDynamic({ media: img });
    //     await flowDynamic({
    //       body: `${nombre_vacante}\n${horario}\n${prestaciones}\n${horario}\n${prestaciones}\n${ubicacion}\n`,
    //     });
    //     await provider.sendLocation(id, 20.63921097868601, -103.3686870002755);
    //     break;
    //   case 3:
    //     break;
    //   case 4:
    //     break;
    //   case 5:
    //     break;

    //   default:
    //     break;
    // }
  }
);
