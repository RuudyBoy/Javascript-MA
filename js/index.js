import { renderProducts } from "./ui/renderProducts.js";
import { searchProducts } from "./ui/searchProducts.js";
import { displayMessage } from "./ui/displayMessage.js";

const url = "https://fakestoreapi.com/products";

async function getProducts() {

    try {
    const response = await fetch(url);

    const products = await response.json();

    console.log(products);

    renderProducts(products);
    searchProducts(products);

    } catch (error) {
        displayMessage("error", error, ".products-container")
    }

    
}

getProducts();
        
