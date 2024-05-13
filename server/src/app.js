const express = require('express');
const routerItems = require('./routers/itemsRoutes');

const app = express();
const PUERTO = 3001;

app.use(express.json());

// Routers
app.use('/api/items', routerItems);

// server running...
app.listen(PUERTO, () => {
  console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});