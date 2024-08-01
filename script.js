document.getElementById('confirmationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    
    // Coletar dados do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const birthdate = document.getElementById('birthdate').value;
    
    // Adiciona o nome do usuário à mensagem
    const userNameElement = document.getElementById('userName');
    userNameElement.textContent = name;
    
    // Mostrar a mensagem "Faça o Pix" com animação
    const messageElement = document.getElementById('message');
    messageElement.classList.remove('hidden');
    messageElement.classList.add('visible');
});
