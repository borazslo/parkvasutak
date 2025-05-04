const fs = require('fs');
const Ajv = require('ajv');
const addFormats = require('ajv-formats'); // Importáljuk az ajv-formats csomagot


const ajv = new Ajv();
addFormats(ajv); // Engedélyezzük a formátumok ellenőrzését


const schema = JSON.parse(fs.readFileSync('parkvasutak-schema.json', 'utf8'));
const data = JSON.parse(fs.readFileSync('parkvasutak.json', 'utf8'));

const validate = ajv.compile(schema);
const valid = validate(data);

if (!valid) {
  console.error('Validation errors:', validate.errors);
  process.exit(1);
} else {
  console.log('parkvasutak.json is valid.');
}