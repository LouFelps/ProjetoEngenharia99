const db = require('../../config/database');

const Rastreio = function(rastreio) {
  this.codigo = rastreio.codigo;
}

module.exports = {
  Rastreio,
}
