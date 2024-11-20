document.addEventListener('DOMContentLoaded', function () {
  // ==== FUNCIONALIDADE DE LOGIN ====
  const loginForm = document.querySelector('form#login-form'); // Certifique-se de usar um ID único no formulário de login
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita o envio padrão do formulário de login

      // Obter valores do formulário de login
      const username = document.getElementById('username')?.value.trim();
      const password = document.getElementById('password')?.value.trim();

      // Validar credenciais padrão
      const defaultUsername = 'admin';
      const defaultPassword = 'admin';

      if (username === defaultUsername && password === defaultPassword) {
        alert('Login bem-sucedido! Redirecionando...');
        window.location.href = 'journal.html'; // Redireciona para a página inicial
      } else {
        alert('Nome de usuário ou senha inválidos. Tente novamente.');
      }
    });
  }

  // ==== FUNCIONALIDADE "ENTENDA O CASO" ====
  const casoForm = document.getElementById('entenda-caso');
  const saidaGerada = document.getElementById('saida-gerada');

  if (casoForm && saidaGerada) {
    casoForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Evita recarregar a página ao enviar o formulário

      // Obter valores do formulário "Entenda o Caso"
      const dataPublicacao = document.getElementById('data-publicacao').value;
      const descricaoCaso = document.getElementById('descricao-caso').value;
      const contextoInformacao = document.getElementById(
        'contexto-informacao'
      ).value;
      const parteFonte = document.getElementById('parte-fonte').value;
      const porQueEntender = document.getElementById('por-que-entender').value;
      const linkVideo = document.getElementById('link-video').value;

      // Simular exibição dos dados no frontend
      const textoGerado = `
        Data de publicação da notícia: ${dataPublicacao}\n\n
        Descrição do caso: ${descricaoCaso}\n\n
        Contexto e informação adicional: ${contextoInformacao}\n\n
        Parte/Fonte: ${parteFonte}\n\n
        Por que entender o caso importa? ${porQueEntender}\n\n
        ${linkVideo ? `Link do vídeo: ${linkVideo}` : ''}
      `;
      saidaGerada.textContent = textoGerado;

      // Limpar o formulário
      casoForm.reset();
    });
  } else if (!casoForm && !loginForm) {
    console.warn('Nenhum formulário correspondente foi encontrado no DOM.');
  }
});
