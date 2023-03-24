// IIFE
(function() {
    
    const titles = [
        'HELLO!',
        'Welcome!',
        'Nice to see you!',
        'Best website welcomes you!'
    ];

    function getRandomTitle(titles) {
        const randomIdx = Math.floor(Math.random() * titles.length);
        return titles[randomIdx];
    }

    const title = document.querySelector('.header-banner__h1');
    title.innerText = getRandomTitle(titles);
    title.classList.add('special');
    
})();