const letters = {
  amor: `Sophia, meu amor 🤍
essa cartinha é para te lembrar de que eu te amo mil milhões.
e te escolho todos os dias como a minha mulher.`,

  saudade: `Minha Princesa 🤍
se a saudade bateu,
é porque o amor é real.
logo a gente se encontra de novo
(O que é um ano comparado a vida inteira).`,

  triste: `Meu Bem 🤍
se hoje estiver difícil,
se apoia em mim, vou estar sempre ao seu lado.`,

  duvida: `Sophia 🤍
se a dúvida aparecer,
lembre: Eu te amo, e sempre vou te amar,
des da primeira vez que eu te vi, eu sabia que seria você,
seria nós para sempre.
`,

  feliz: `Oi Meu Amor 🤍
A sua felicidade me faz feliz,
espero que podemos ser felizes juntos.`,

  ciumes: `Sophia 🤍
meu coração é seu.
sem medo,
sem insegurança,
sei que a distância dificulta,
mas eu sou todo seu, e só tenho olhos para você`,

  seguranca: `Souza 🤍
você está segura comigo.
eu sempre vou ficar independente do que aconteça.`,

  madrugada: `Sophia 🤍
se você abriu isso de madrugada,
provavelmente você não está conseguindo dormir, saiba que eu estou com você mesmo que não fisicamente, vou estar sempre pensando em você e orando por você, você não está sozinha`
};

function openLetter(type){
  document.getElementById("letter-text").innerText = letters[type];
  document.getElementById("overlay").style.display = "flex";
}

function closeLetter(){
  document.getElementById("overlay").style.display = "none";
}
