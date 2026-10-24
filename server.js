require('dotenv').config();
const app = require('./src/app');

const port = Number(process.env.PORT) || 3000;
const host = '0.0.0.0';
app.listen(port, host, () => {
  console.log(`Portafolio escuchando en el puerto ${port} (${process.env.NODE_ENV || 'development'}).`);
});
