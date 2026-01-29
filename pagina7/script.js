// 💘 Data de início do namoro
const dataInicio = new Date("2025-12-26T11:15:00");

// 🎂 Aniversário da Sophia
const aniversario = { dia: 10, mes: 2 };

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicio;

  const segundos = Math.floor(diff / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas % 24;
  document.getElementById("minutos").textContent = minutos % 60;
  document.getElementById("segundos").textContent = segundos % 60;

  verificarAniversario(agora);
}

function verificarAniversario(data) {
  const mensagem = document.getElementById("mensagemEspecial");

  if (
    data.getDate() === aniversario.dia &&
    data.getMonth() + 1 === aniversario.mes
  ) {
    mensagem.textContent =
      "🎉 Feliz aniversário, meu amor! Sophia, você é o melhor presente da minha vida 💖🎂";
  }
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

setInterval(atualizarContador, 1000);
atualizarContador();
