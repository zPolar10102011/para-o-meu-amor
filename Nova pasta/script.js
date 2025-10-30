const frases = [
  "Você é o meu pedacinho de paz 💫",
  "Cada batida do meu coração leva o seu nome 💓",
  "Você é o motivo do meu sorriso diário 😍",
  "Meu amor por você cresce a cada segundo 🌹",
  "Quando penso em amor, penso em você 💖",
  "Você é o meu final feliz ✨",
  "O mundo é mais bonito com você nele 💕",
  "Você é o meu lar, onde eu sempre quero voltar 🏡",
  "Entre bilhões, eu escolheria você mil vezes 💘",
  "Te amo daqui até o infinito e além 💫",
  "Eu te amo mil milhões ❤️",
  "Eu te amo, Amanda ❤️",
  "Eu não preciso de estrelas quando tenho o brilho do seu olhar 🌹",
  "Quando olho pra você, entendo por que o sol insiste em nascer todos os dias 💫",
  "Você é o meu lugar favorito 🌍❤️",
  "Te encontro em cada pensamento 💭💘",
  "Seu sorriso ilumina meu dia ☀️😊",
  "Amar você é fácil demais 💞",
  "Só você me traz paz 🌙✨",
  "Meu coração sorri quando te vê 💓😊",
  "Tudo em você me encanta 💫",
  "Você é meu refúgio em dias cinzas ☁️💖",
  "Um olhar e já me perco 👀💘",
  "Com você, tudo faz sentido 💭💞",
  "Sua voz é a minha melodia favorita 🎶❤️",
  "Meu abrigo tem o seu abraço 🤗💗",
  "Só penso em você… sempre 💭💋",
  "Você é o meu acaso mais bonito 🌸",
  "Cada mensagem sua vira sorriso 😊💬",
  "O amor mora no seu olhar 💕👁️",
  "Você me faz acreditar em destino ✨💫",
  "Amor é pouco pra o que sinto 💖🔥",
  "Só quero você, mais nada ❤️",
  "Sua ausência grita, seu toque acalma 🤍",
  "Metade de mim é saudade sua 💌",
  "Meu coração já tem dona 💘🔐",
  "Você é o caos mais lindo da minha vida 💥💞",
  "A vida fica leve com você 🍃💗",
  "Um beijo seu vale o mundo 🌎💋",
  "Você é a minha melhor escolha 💖🙌",
  "Meu sol nasceu quando te conheci ☀️💓",
  "Amar você é meu vício bom 💞🔥",
  "Nada é tão bonito quanto nós dois 💫❤️",
  "Seu amor é o meu destino 💘✨"
];

const gameArea = document.getElementById("gameArea");
const popup = document.getElementById("popup");
const messageEl = document.getElementById("loveMessage");
const closeBtn = document.getElementById("closeBtn");
const finalMessage = document.getElementById("finalMessage");

let coracoesRestantes = 0;

// Criar corações aleatórios na tela
function criarCoracoes(qtd = 10) {
  coracoesRestantes = qtd;
  for (let i = 0; i < qtd; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.top = Math.random() * 80 + "%";
    heart.addEventListener("click", () => mostrarMensagemAleatoria(heart));
    gameArea.appendChild(heart);
  }
}

// Mostrar frase de amor aleatória
function mostrarMensagemAleatoria(elemento) {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  messageEl.textContent = frase;
  popup.classList.remove("hidden");
  elemento.remove(); 
  coracoesRestantes--;

  if (coracoesRestantes === 0) {
    setTimeout(() => {
      popup.classList.add("hidden");
      mostrarMensagemFinal();
    }, 500);
  }
}

// Fechar o popup
closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Mostrar mensagem final
function mostrarMensagemFinal() {
  finalMessage.classList.remove("hidden");
  finalMessage.classList.add("fade-in");
}

// Iniciar o jogo
criarCoracoes(20);
