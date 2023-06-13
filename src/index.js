import app from "./app.js";
import { PORT } from "./config.js";

// Iniciar el servidor
app.listen(PORT, () => {
  console.log('Servidor Express iniciado en el puerto', PORT);
});
