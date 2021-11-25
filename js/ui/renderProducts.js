export function renderProducts(productsToRender) {
    const productsContainer = document.querySelector(".products-container");
    productsContainer.innerHTML = "";

    productsToRender.forEach(function (product) {
        productsContainer.innerHTML += `<div class="products">
                                        <h4>${product.title}</h4>
                                        <p>${product.price}</p>  
                                    </div>`;
    });
}