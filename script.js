// Obtém a referência do elemento com o ID "greeting"
const greetingElement = document.getElementById("greeting");
// Obtém a hora atual do sistema
const currentHour = new Date().getHours();
// Define a saudação com base na hora atual
const greetingMessage =
  currentHour >= 5 && currentHour < 12
    ? "Bom dia"
    : currentHour >= 12 && currentHour < 18
    ? "Boa tarde"
    : "Boa noite";
greetingElement.textContent = greetingMessage;

