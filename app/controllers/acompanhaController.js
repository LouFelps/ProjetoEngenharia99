const transporter = require('../lib/nodeMail')
const Rastreio = require('../models/rastreio');

const acompanhamento = function(req,res) {
  res.render('acompanhamento.ejs')
};


const enviarRastreio = async function(req, res) {
  console.log('entrou');
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
      res.send('Falhou')
    } else {
      console.log('Email sent: ' + info.response);
      // res.send('Dados Enviados com sucesso!');
    }
  });
  res.redirect('/agradecimento')
};




module.exports = {
  acompanhamento,
  enviarRastreio,

}

