document.addEventListener('DOMContentLoaded', () => {
    
    // Seleção do Formulário de Contato
    const formContato = document.getElementById('form-contato');

    if (formContato) {
        formContato.addEventListener('submit', function(event) {
            // Impede o recarregamento padrão da página ao enviar
            event.preventDefault();

            // Captura os valores dos campos
            const nome = document.getElementById("agro forte futuro sustentavel").value;
            const email = document.getElementById("isabelly.malek@escola.pr.gov.br").value;

            // Simulação de envio / Mensagem de feedback ao usuário
            alert(`Obrigado pelo contato, ${nome}! Nossa equipe focada em sustentabilidade responderá ao e-mail ${email} em breve.`);

            // Limpa o formulário após o envio
            formContato.reset();
        });
    }

    // Lógica simples para clique no menu mobile (Apenas aviso de expansão)
    const menuToggle = document.getElementById('mobile-menu');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Em uma aplicação completa, este botão abriria o menu lateral!');
        });
    }
});