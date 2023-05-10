const Donate = require('../models/donate');
const transporter = require('../lib/nodeMail')

const home = function(req, res) {
  res.render('home.ejs');
};

const enviarDados = async function(req, res) {
  console.log('entrou');
  const body = req.body;
  const tipo1 = body.Jogo;
  const tipo2 = body['Video Game'];
  const newDonate = {
    nome: body.nome,
    email: body.email,
    cidade: body.cidade,
    contato: body.contato,
    tipo: `${tipo1};${tipo2}`,
    descricao: body.descricao,
  };
  console.log('newDonate:', newDonate);
  const teste = await Donate.create(newDonate, res)
  console.log('teste:', teste);
  const mailOptions = {
    from: 'luviodoacoes@gmail.com',
    to: newDonate.email,
    subject: 'Teste',
    text: 'Obrigado por se inscrever para agiotagem.'
  };
  await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send(teste);
};

module.exports = {
  home,
  enviarDados,
};
