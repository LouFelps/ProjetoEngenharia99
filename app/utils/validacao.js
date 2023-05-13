  // Seleciona o formulário pelo ID
  const form = document.querySelector('#teste');
  // Seleciona o botão de envio pelo ID
  const enviarBtn = document.querySelector('#enviarDados');
  // Seleciona os campos de entrada de texto pelo nome
  const nomeInput = document.querySelector('input[name="nome"]');
  const emailInput = document.querySelector('input[name="email"]');
  const cidadeInput = document.querySelector('input[name="cidade"]');
  const contatoInput = document.querySelector('input[name="contato"]');
  const descricaoInput = document.querySelector('textarea[name="descricao"]');

  // Adiciona um ouvinte de eventos no formulário para interceptar o envio
  form.addEventListener('submit', (event) => {
    // Verifica se todos os campos de entrada de texto têm conteúdo
    if (nomeInput.value === '' || emailInput.value === '' || cidadeInput.value === '' || contatoInput.value === '' || descricaoInput.value === '') {
      // Se um dos campos estiver vazio, impede o envio do formulário
      event.preventDefault();
      alert('Por favor, preencha todos os campos.');
    }
  });

  // Adiciona ouvintes de eventos em todos os campos de entrada de texto
  nomeInput.addEventListener('input', validarCampos);
  emailInput.addEventListener('input', validarCampos);
  cidadeInput.addEventListener('input', validarCampos);
  contatoInput.addEventListener('input', validarCampos);
  descricaoInput.addEventListener('input', validarCampos);

  // Função que verifica se todos os campos de entrada de texto têm conteúdo
  function validarCampos() {
    if (nomeInput.value !== '' && emailInput.value !== '' && cidadeInput.value !== '' && contatoInput.value !== '' && descricaoInput.value !== '') {
      // Se todos os campos tiverem conteúdo, habilita o botão de envio
      enviarBtn.removeAttribute('disabled');
    } else {
      // Se um dos campos estiver vazio, desabilita o botão de envio
      enviarBtn.setAttribute('disabled', 'disabled');
    }
  }

module.exports = {
  validarCampos,
}
