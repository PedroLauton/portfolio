document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.container__conteudo__projetos__card');
    const indicadoresContainer = document.querySelector('.container__conteudo__projetos__indicadores');
    let currentSlide = 0;
    // Função para mostrar o slide atual
    const showSlide = (index) => {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'flex';
    };
    // Função para avançar para o próximo slide
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateIndicadores();
        showSlide(currentSlide);
    };
    // Função para voltar para o slide anterior
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateIndicadores();
        showSlide(currentSlide);
    };
    // Atualizar os indicadores de slide
    const updateIndicadores = () => {
        indicadoresContainer.innerHTML = ''; // Limpar os indicadores
        slides.forEach((slide, index) => {
            const indicador = document.createElement('span');
            indicador.classList.add('indicador');
            if (index === currentSlide) {
                indicador.classList.add('ativo');
            }
            indicador.addEventListener('click', () => {
                currentSlide = index;
                updateIndicadores();
                showSlide(currentSlide);
            });
            indicadoresContainer.appendChild(indicador);
        });
    };
    // Evento de clique na seta da direita
    document.querySelector('.seta-direita').addEventListener('click', nextSlide);
    // Evento de clique na seta da esquerda
    document.querySelector('.seta-esquerda').addEventListener('click', prevSlide);
    // Exibir todos os slides quando a tela for menor que 768px
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const handleResize = () => {
        if (mediaQuery.matches) {
            slides.forEach((slide) => {
                slide.style.display = 'flex';
            });
        } else {
            showSlide(currentSlide);
        }
    };
    handleResize(); // Executar quando a página carregar
    mediaQuery.addListener(handleResize); // Executar quando a tela for redimensionada
    // Inicializar os indicadores de slide
    updateIndicadores();
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.cabecalho__menu__lista__item__links');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            links.forEach(l => l.classList.remove('active'));
            links.forEach(l => l.classList.remove('sobre'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.cabecalho__conteudo__link__lista__item');

    links.forEach(link => {
        link.addEventListener('click', function() {
            // Remove a classe 'active' de todos os links
            links.forEach(l => l.classList.remove('active'));
            links.forEach(l => l.classList.remove('sobre'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });
});