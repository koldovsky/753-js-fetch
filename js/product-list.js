(async function(){

    // fetch('api/products.json')
    //   .then( response => response.json() )
    //   .then( products => renderProducts(products) );
    let currencies;
    const response = await fetch('api/products.json');
    const products = await response.json();
    renderProducts(products, 1);

    function renderProducts(products, rate) {
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
                    Buy - ${(product.price * rate).toFixed(2)}
                </button>
                </div>
            </article>  
            ` 
        }
    }

    const convertButton = document.querySelector('.products__convert');
    convertButton.addEventListener('click', convertCurrency);

    async function convertCurrency() {
        if (!currencies) {
            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            currencies = await response.json();
        }
        const currency = document.querySelector('.products__currency').value;
        const rate = currencies.rates[currency];
        renderProducts(products, rate);
    }


})();