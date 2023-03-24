(function() {

    const slides = [
        '<div class="slide"><img src="img/baby-yoda.svg" alt="Baby Yoda"></div>',
        '<div class="slide"><img src="img/banana.svg" alt="Banana"></div>',
        '<div class="slide"><img src="img/viking.svg" alt="Viking"></div>',
        '<div class="slide"><img src="img/girl.svg" alt="Girl"></div>',
    ];

    const carousel = document.querySelector('.products__carousel');
    const slideContainer = carousel.querySelector('.products__carousel .carousel__slide');

    let currentSlide = 0;

    function renderSlides(slides) {
        slideContainer.innerHTML = slides[currentSlide];
        if (window.innerWidth > 768) {
            const secondSlide = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
            slideContainer.innerHTML += slides[secondSlide];
            if (window.innerWidth > 1024) {
                const thirdSlide = secondSlide + 1 >= slides.length ? 0 : secondSlide + 1;
                slideContainer.innerHTML += slides[thirdSlide];
            }
        }
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        renderSlides(slides);
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        renderSlides(slides);
    }

    // setInterval(nextSlide, 2000);
    renderSlides(slides);

    const btnNext = document.querySelector(".products__carousel.slide .slide__next");
    btnNext.addEventListener('click', nextSlide);

    const btnPrev = document.querySelector(".products__carousel.slide .slide__prev");
    btnPrev.addEventListener('click', prevSlide);

    window.addEventListener('resize', () => {
        renderSlides(slides);
    });
})();