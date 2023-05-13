const home = function(req, res) {
  res.render('home.ejs');
};
const agradecimento = function(req,res) {
  res.render('agradecimento.ejs')
};

module.exports = {
  home,
  agradecimento,
};
