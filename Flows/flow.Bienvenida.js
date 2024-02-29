const { addKeyword, EVENTS } = require("@bot-whatsapp/bot");
const flowFormulario = require("./flow.formulario");
const flowInfo = require("./flow.Info");

module.exports = addKeyword([EVENTS.WELCOME, "menu"])
  .addAnswer("Bienvenido a _*Shades de México*_", {
    media:
      "https://scontent.fgdl9-1.fna.fbcdn.net/v/t39.30808-6/277572092_108342191837258_7274138010988978035_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=127Nr-xJxIsAX-0iTRC&_nc_ht=scontent.fgdl9-1.fna&oh=00_AfB38hD_MR6DuaXZrSkUD_FTsc8M-2BwipWCQGn-k4CoLQ&oe=65DD2769",
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
