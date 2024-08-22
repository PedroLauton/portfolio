document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.container__conteudo__projetos__card');
    const indicadoresContainer = document.querySelector('.container__conteudo__projetos__indicadores');
    let currentSlide = 0;

    // Função para mostrar apenas o slide principal para telas menores que 1440px
    const showSlide = (index) => {
        slides.forEach((slide) => {
            slide.style.display = 'none';
            slide.classList.remove('tranform'); // Remove a classe 'tranform' de todos os slides
        });

        const prevIndex = (index - 1 + slides.length) % slides.length;
        const nextIndex = (index + 1) % slides.length;

        if (window.innerWidth >= 1440) {
            // Mostrar três slides para telas a partir de 1440px
            slides[prevIndex].style.display = 'flex';
            slides[prevIndex].classList.add('tranform');
            slides[index].style.display = 'flex';
            slides[nextIndex].style.display = 'flex';
            slides[nextIndex].classList.add('tranform');
            slides[index].style.order = '2';
            slides[prevIndex].style.order = '1';
            slides[nextIndex].style.order = '3';
        } else if (window.innerWidth >= 768) {
            // Mostrar apenas o slide principal para telas entre 768px e 1439px
            slides[index].style.display = 'flex';
        } else {
            // Mostrar todos os slides em ordem original para telas menores que 768px
            slides.forEach((slide) => {
                slide.style.display = 'flex';
                slide.style.order = 'unset'; // Remove qualquer ordenação aplicada pelo JS
                slide.classList.remove('tranform');
            });
        }
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateIndicadores();
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateIndicadores();
        showSlide(currentSlide);
    };

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

    document.querySelector('.seta-direita').addEventListener('click', nextSlide);
    document.querySelector('.seta-esquerda').addEventListener('click', prevSlide);

    const handleResize = () => {
        if (window.innerWidth < 768) {
            slides.forEach((slide) => {
                slide.style.display = 'flex';
                slide.style.order = 'unset'; // Remove qualquer ordenação aplicada pelo JS
                slide.classList.remove('tranform'); // Remove a classe 'tranform' de todos os slides
            });
        } else {
            showSlide(currentSlide);
        }
    };

    handleResize(); // Executar quando a página carregar
    window.addEventListener('resize', handleResize);

    updateIndicadores();
    showSlide(currentSlide); // Mostrar o slide inicial
});


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.cabecalho__menu__lista__item__links');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            links.forEach(l => l.classList.remove('sobre'));
            this.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('.cabecalho__conteudo__link__lista__item');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            links.forEach(l => l.classList.remove('sobre'));
            this.classList.add('active');
        });
    });
});
