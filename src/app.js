const express = require('express');
const helmet = require('helmet');
const path = require('path');
const siteRoutes = require('./routes/siteRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.disable('x-powered-by');
app.use(helmet({ contentSecurityPolicy: false }));
app.use(express.urlencoded({ extended: false, limit: '20kb' }));
app.use(express.json({ limit: '20kb' }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/', siteRoutes);
app.use('/api/contacto', contactRoutes);
app.use((req, res) => res.status(404).render('404', { title: 'Página no encontrada' }));
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ ok: false, message: 'Ocurrió un error. Inténtalo más tarde.' });
});

module.exports = app;
