function home(req, res) {
  const sent = req.query.enviado === '1';
  const error = req.query.error === '1';
  res.render('index', {
    title: 'Jan Piert Garcia Arevalo — Portafolio',
    sent,
    error,
    contactEndpoint: '/api/contacto'
  });
}

module.exports = { home };
