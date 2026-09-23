import ProductData from "./ProductData.mjs";
import { getParam } from "./utils.mjs";

const category = getParam("category");
const dataSource = new ProductData();

const productList = document.querySelector(".product-list");
const listingTitle = document.querySelector("#listing-title");

const productPages = {
    "880RR": "marmot-ajax-3.html",
    "985RF": "northface-talus-4.html",
    "985PR": "northface-alpine-3.html",
    "344YJ": "cedar-ridge-rimrock-2.html",
};

function formatCategory(category) {
    return category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function renderProducts(products) {
    productList.innerHTML = products
        .map(
            (product) => `
        <li class="product-card">
          <a href="${productPages[product.Id]
                    ? `../product_pages/${productPages[product.Id]}`
                    : "#"
                }">
            <img
              src="${product.Images.PrimaryMedium}"
              alt="${product.Name}"
            />
            <h3 class="card__brand">${product.Brand.Name}</h3>
            <h2 class="card__name">${product.NameWithoutBrand}</h2>
            <p class="product-card__price">$${product.FinalPrice.toFixed(2)}</p>
          </a>
        </li>
      `,
        )
        .join("");
}

async function init() {
    try {
        listingTitle.textContent = `Top Products: ${formatCategory(category)}`;

        const products = await dataSource.getData(category);

        renderProducts(products);
    } catch (error) {
        console.error("Error loading products:", error);
        productList.innerHTML = "<li>Unable to load products.</li>";
    }
}

init();