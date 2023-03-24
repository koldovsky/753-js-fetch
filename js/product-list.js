(function(){
    const products = [
        {
            id: '1',
            title: 'Baby Yoda',
            price: 10.99,
            description: 'lorem ipsum...',
            image: 'img/baby-yoda.svg'
        },
        {
            id: '2',
            title: 'Banana',
            price: 9.99,
            description: 'lorem ipsum...',
            image: 'img/banana.svg'
        },
        {
            id: '3',
            title: 'Girl',
            price: 12.99,
            description: 'lorem ipsum...',
            image: 'img/girl.svg'
        },
        {
            id: '4',
            title: 'Viking',
            price: 13.99,
            description: 'lorem ipsum...',
            image: 'img/viking.svg'
        },
    ];

    function renderProducts(products) {
        const productsContainer = document.querySelector('.products__list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += 
            `<article class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3 class="product-card__h3">${product.title}</h3>
                <p class="product-card__description">
                    ${product.description}
                </p>
                <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                    Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                    Buy - ${product.price}
                </button>
                </div>
            </article>  
            ` 
        }
    }

    renderProducts(products);

})();