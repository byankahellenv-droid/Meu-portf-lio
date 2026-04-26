// Scroll suave
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// Validação do formulário
document.getElementById("formContato").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (!nome || !email || !mensagem) {
        alert("Preencha todos os campos!");
    } else {
        alert("Mensagem enviada com sucesso!");
    }
});

// Dark mode
const btn = document.getElementById("darkModeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("light");
});