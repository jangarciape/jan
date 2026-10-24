const { saveContact } = require('../models/contactModel');

function createContact(req, res) {
  const name = String(req.body.name || '').trim();
  const email = String(req.body.email || '').trim();
  const message = String(req.body.message || '').trim();

  if (name.length < 2 || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 5000) {
    if (req.accepts('html')) return res.redirect('/?error=1#contacto');
    return res.status(400).json({ ok: false, message: 'Revisa el nombre, el correo y el mensaje (de 10 a 5000 caracteres).' });
  }

  try {
    saveContact({ name, email, message });
    if (req.accepts('html')) return res.redirect('/?enviado=1#contacto');
    return res.status(201).json({ ok: true, message: 'Mensaje recibido. ¡Gracias por escribirme!' });
  } catch (error) {
    console.error('No se pudo guardar el contacto:', error);
    if (req.accepts('html')) return res.redirect('/?error=1#contacto');
    return res.status(500).json({ ok: false, message: 'No se pudo guardar el mensaje. Inténtalo más tarde.' });
  }
}

module.exports = { createContact };
