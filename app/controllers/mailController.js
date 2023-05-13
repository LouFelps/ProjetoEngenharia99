const transporter = require('../lib/nodeMail')
const cron = require('node-cron')
const Donate = require('../models/donate');
const connection = require('../../config/database')

//Botão que confirma envio dos dados para o banco de dados e envio de email para o usuario
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
      res.send('Falhou')
    } else {
      console.log('Email sent: ' + info.response);
      // res.send('Dados Enviados com sucesso!');
    }
  });
  res.redirect('/agradecimento')
};


// Envio de email programado para o sistema.
const newMailOptions = {
  from: 'luviodoacoes@gmail.com',
  to: 'luviodoacoes@gmail.com',
  subject: 'Doações pendentes.',
  text: 'Há doações pendentes no sistema'
};

cron.schedule('* * * * *', () => {
  connection.query('SELECT COUNT(*) as count FROM doacoes WHERE doacaoRealizada = 0', function (error, results, fields) {
    if (error) throw error;

    const count = results[0].count;

    if (count === 0) {
      console.log('Não há doações pendentes');
    }
    if(count > 0) {
        transporter.sendMail(newMailOptions, function(error, info){
          if (error) {
            console.log(error);
            res.send('Falhou')
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      console.log(`Há ${count} doações pendentes`);
    }
  });
})


module.exports = {
  enviarDados,
}
