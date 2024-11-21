// Animação do Formulário
document.getElementById("form-contato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a animação de envio
    const submitButton = document.getElementById("submitButton");
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    // Simula o envio do formulário
    setTimeout(function() {
        document.getElementById("form-mensagem").textContent = "Sua mensagem foi enviada com sucesso!";
        submitButton.textContent = "Enviar";
        submitButton.disabled = false;

        // Limpa o formulário
        document.getElementById("form-contato").reset();
    }, 2000); // Simula 2 segundos de envio
});

// Animação de Entrada para Cards de Contato
window.addEventListener("scroll", function() {
    const infoCards = document.querySelectorAll(".info-card");
    infoCards.forEach(function(card) {
        const cardPosition = card.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (cardPosition < screenPosition) {
            card.classList.add("animado");
        }
    });
});