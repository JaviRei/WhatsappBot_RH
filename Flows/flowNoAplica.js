const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowFormulario = require("./flow.formulario");
// const flowBienvenida = require("./flow.Bienvenida");

module.exports = addKeyword([EVENTS.ACTION]).addAnswer(
  [
    "*Escribe la opción deseada...*",
    "APLICAR - Aplica a esta la vacante",
    "MENU - Salir al menu principal ",
  ],
  { capture: true },
  async (ctx, { endFlow }) => {
    try {
      if (ctx === "menu") {
        console.log("Finalizando info de vacantes");
        return endFlow;
      }
    } catch (error) {
      console.error("No escribio bien la palabra");
    }
  },
  [flowFormulario]
);
// .addAction({ capture: true }, async (ctx, { endFlow }) => {
//   try {
//     if (ctx === "menu") {
//       console.log("Finalizando info de vacantes");
//       return endFlow;
//     }
//   } catch (error) {
//     console.error("No escribio bien la palabra");
//   }
// });
