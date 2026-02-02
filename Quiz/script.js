const quiz = [
    {
      question: "Onde foi nosso primeiro encontro?",
      answers: ["Cinema", "Restaurante", "Parque", "Shopping"],
      correct: 0
    },
    {
      question: "Qual é minha comida favorita?",
      answers: ["Pizza", "Hambúrguer", "Lasanha", "Sushi"],
      correct: 3
    },
    {
      question: "O que eu mais amo em você?",
      answers: ["Seu sorriso", "Seu jeito", "Seu abraço", "Tudo 🤍"],
      correct: 3
    }
  ];
  
  let current = 0;
  
  const questionEl = document.getElementById("question");
  const buttons = document.querySelectorAll(".btn");
  const resultEl = document.getElementById("result");
  const nextBtn = document.getElementById("next");
  
  loadQuestion();
  
  function loadQuestion() {
    resultEl.textContent = "";
    nextBtn.style.display = "none";
  
    questionEl.textContent = quiz[current].question;
    buttons.forEach((btn, index) => {
      btn.textContent = quiz[current].answers[index];
      btn.disabled = false;
    });
  }
  
  function checkAnswer(index) {
    buttons.forEach(btn => btn.disabled = true);
  
    if (index === quiz[current].correct) {
      resultEl.textContent = "Acertou! 😍🤍";
      resultEl.style.color = "green";
    } else {
      resultEl.textContent = "Errado 😅 mas eu te amo 🤍";
      resultEl.style.color = "red";
    }
  
    nextBtn.style.display = "block";
  }
  
  function nextQuestion() {
    current++;
  
    if (current < quiz.length) {
      loadQuestion();
    } else {
      questionEl.textContent = "Fim do Quiz 🤍";
      resultEl.textContent = "Você é o amor da minha vida 🥹🤍";
      nextBtn.style.display = "none";
      document.querySelector(".answers").style.display = "none";
    }
  }
  