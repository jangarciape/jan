const fs = require('fs');
const path = require('path');

const dataDirectory = process.env.DATA_DIR
  ? path.resolve(process.env.DATA_DIR)
  : path.join(__dirname, '..', '..', 'data');
const dataFile = path.join(dataDirectory, 'contacts.jsonl');

function saveContact({ name, email, message }) {
  fs.mkdirSync(dataDirectory, { recursive: true });
  const record = { name, email, message, createdAt: new Date().toISOString() };
  fs.appendFileSync(dataFile, `${JSON.stringify(record)}\n`, { encoding: 'utf8', mode: 0o600 });
}

module.exports = { saveContact };
