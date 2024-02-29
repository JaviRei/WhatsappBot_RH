require("@bot-whatsapp/provider/baileys");
const { addKeyword } = require("@bot-whatsapp/bot");
const getData = require("../formulas/get.Data");
const flowNoAplica = require("./flowNoAplica");

// var data = getData();

module.exports = addKeyword(["1", "2", "3", "4", "5"]).addAction(
  async (ctx, { state, provider, fallBack, gotoFlow }) => {
    const data = await getData();
    const seleccion = state.getMyState();
    let vac = seleccion.vacante - 1;

    console.log(vac);

    const id = ctx.key.remoteJid;

    const nombre_vacante = data[vac].nombre_vacante;
    const img = data[vac].url;
    const horario = data[vac].horario;
    const prestaciones = data[vac].prestaciones;
    const ubicacion = data[vac].ubicacion;

    if (vac >= 0 || vac || vac < 6) {
      //Nombre de Vacante
      await provider.sendText(id, `${nombre_vacante}\n`);
      await provider.sendMedia(id, img);

      //Horario
      await provider.sendText(id, `*_NUESTROS HORARIOS SON:_*\n${horario}\n`);
      //Prestaciones
      await provider.sendText(id, `*_PRESTACIONES:_*\n${prestaciones}\n`);
      //Ubicaciones
      await provider.sendText(
        id,
        `*_UBICACIÓN:_*\n${ubicacion}\n 📍 Ubicación en _Maps_ ⬇️`
      );
      await provider.sendLocation(id, 20.639139408911632, -103.36872968796463);
      return gotoFlow(flowNoAplica);
    } else {
      return fallBack();
    }
  }
);
