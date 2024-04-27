const express = require('express');
const middlewares = require('./middlewares');
const routes = require('./routes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

middlewares.setupAPP(app);
routes.setup(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});