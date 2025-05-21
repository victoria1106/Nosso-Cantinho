// Objeto para armazenar se as perguntas estão corretas
const answersStatus = {
  result1: false,
  result2: false,
};

function checkAnswer(button, correctAnswer, resultId) {
  const result = document.getElementById(resultId);
  const tryAgainBtn = document.getElementById('tryAgainBtn');
  const nextBtn = document.getElementById('nextBtn');

  const userAnswer = button.innerText.trim().toLowerCase();
  const expectedAnswer = correctAnswer.trim().toLowerCase();

  if (userAnswer === expectedAnswer) {
    result.innerText = "Acertou! 💕";
    result.style.color = "#d6336c";

    // Marca essa pergunta como correta
    answersStatus[resultId] = true;
  } else {
    result.innerText = "Hmm... tenta de novo, amor! 😽";
    result.style.color = "#555";

    // Marca essa pergunta como errada
    answersStatus[resultId] = false;
  }

  // Se todas as perguntas estiverem certas, libera botão próximo
  if (Object.values(answersStatus).every(status => status === true)) {
    nextBtn.disabled = false;
    tryAgainBtn.style.display = 'none';
  } else {
    nextBtn.disabled = true;
    tryAgainBtn.style.display = 'inline-block';
  }
}

// Função que reseta o quiz para tentar novamente
function resetQuiz() {
  // Limpa todos os resultados
  for (const key in answersStatus) {
    answersStatus[key] = false;
    const result = document.getElementById(key);
    if (result) {
      result.innerText = '';
    }
  }

  // Esconde botão tente novamente e bloqueia botão próximo
  document.getElementById('tryAgainBtn').style.display = 'none';
  document.getElementById('nextBtn').disabled = true;
}



function finalSurprise() {
  document.getElementById('surprise').innerHTML = `
    <p>💋 MUAAAH! Te amo muito, Baby! 💋</p>
    <img src="https://i.pinimg.com/originals/ef/96/87/ef9687b36e36605b375b4e9b0cde51db.gif" 
         alt="Beijo animado" 
         style="width:100%;border-radius:10px;margin-top:10px">
  `;
}