function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function abrirCarta(cartaId) {
  const textos = {
    carta1: "Desde que te conheci, minha vida mudou completamente, me sinto amada novamente. 💖",
    carta2: "Sinto sua falta todos os dias. Quero poder te ver, te abraçar e te beijar. 🐾",
    carta3: "Nosso futuro vai ser incrivel, cheio de amor, viagens e muitas risadas meu bem. ✨"
  };
  document.getElementById('cartaTexto').innerText = textos[cartaId];
}

function verificarSenha() {
  const senha = document.getElementById('senha').value;
  const mensagem = document.getElementById('mensagemSecreta');

  if (senha.toLowerCase() === "baby") {
    mensagem.innerHTML = "<p>💌 Te amo mais que chocolate! Obrigada por ser meu tudo! 💕</p>";
  } else {
    mensagem.innerHTML = "<p>❌ Senha incorreta! Tenta de novo 😢</p>";
  }
}

function responderQuiz(acertou) {
  const resposta = document.getElementById('respostaQuiz');
  if (acertou) {
    resposta.innerHTML = "✅ Isso mesmo! Você lembra de tudo como o melhor namorado do mundo que é 💘";
  } else {
    resposta.innerHTML = "❌ Ops! Errou... mas ainda te amo muito 😘";
  }
}