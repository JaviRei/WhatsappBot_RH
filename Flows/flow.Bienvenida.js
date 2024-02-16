const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowFormulario = require("./flow.formulario");
const flowInfo = require("./flow.Info");

module.exports = addKeyword([EVENTS.WELCOME])
  .addAnswer("Bienvenido a _*Shades de México*_", {
    media:
      "https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/277572092_108342191837258_7274138010988978035_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=VI3MhwmvHBwAX9EsttD&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfDX0Iy-mHjNeG5HNwkEIdISyG9kS6-fevQBwOIPHLO7Pg&oe=65D53E69",
  })
  .addAnswer(
    [
      "Conocé nuestras vacantes Activas y desarrolla tus habilidades con nosotros ",
      "",
      "*_Selecciona el numero de la opción deseada:_*",
      "1️⃣  Vacantes Activas",
      "2️⃣  Aplicar directo Vacante",
    ],
    null,
    null,
    [(flowFormulario, flowInfo)]
  );
