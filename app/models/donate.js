const db = require('../../config/database');

const Donate = function(donate) {
  this.nome = donate.nome;
  this.email = donate.email;
  this.cidade = donate.cidade;
  this.tipo = donate.tipo;
  this.contato = donate.contato;
  this.descricao = donate.descricao;
  this.doacaoRealizada = donate.doacaoRealizada;
};

Donate.create = function(newDonate) {
  db.query('INSERT INTO doacoes SET ?', newDonate, function(err, results) {
    if (err) {
      console.log('Error while inserting donate', err);
      return false;
    } else {
      console.log('Donate saved successfully');
      console.log('results:', results);
      return true;
    }
  });
};
module.exports = {
  Donate,
}
