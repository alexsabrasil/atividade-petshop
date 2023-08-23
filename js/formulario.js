const mensagemEnvio = document.getElementById("mensagem-envio");
const formulario = document.getElementById("pedido-form");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); // Evita o envio do formulário (apenas para este exemplo)

  mensagemEnvio.style.display = "block"; // Exibe a mensagem

  setTimeout(function () {
    mensagemEnvio.style.display = "none"; // Esconde a mensagem após 3 segundos
  }, 3000);
});
