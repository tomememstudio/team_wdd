import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData();

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

// Add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// Load the large product image from the API
async function loadProductImage() {
  const button = document.getElementById("addToCart");
  const product = await dataSource.findProductById(button.dataset.id);

  document.querySelector(".product-detail img").src =
    product.Images.PrimaryLarge;
}

// Add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

loadProductImage();