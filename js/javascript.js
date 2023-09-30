// Função para verificar a posição da página e aplicar a classe 'top' ao elemento quando estiver no topo
function updateElementOnScroll() {
    const elemento = document.getElementById('elemento');
    if (window.scrollY === 0) {
        elemento.classList.add('top');
    } else {
        elemento.classList.remove('top');
    }
}

// Adicione um ouvinte de evento para chamar a função quando a página é rolada
window.addEventListener('scroll', updateElementOnScroll);

// Chame a função uma vez para definir o estado inicial, caso a página já esteja no topo no carregamento
updateElementOnScroll();
