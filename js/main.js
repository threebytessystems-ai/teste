document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os elementos que terão a transição
    const elementosAnimados = document.querySelectorAll('.fade-in');

    // Cria o observador para verificar quando o elemento entra na tela
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                // Adiciona a classe 'visible' para iniciar a transição CSS
                entrada.target.classList.add('visible');
                // Para a animação não repetir ao rolar para cima:
                observer.unobserve(entrada.target); 
            }
        });
    }, {
        threshold: 0.15 // Dispara a animação quando 15% do elemento estiver visível
    });

    // Inicia a observação em cada elemento
    elementosAnimados.forEach(elemento => {
        observer.observe(elemento);
    });
});
