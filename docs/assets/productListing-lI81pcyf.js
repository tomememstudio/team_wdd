import{a as c}from"./utils-C1ZufQCI.js";/* empty css              */import{P as n}from"./ProductData-kd0qf_o8.js";const a=c("category"),i=new n,o=document.querySelector(".product-list"),s=document.querySelector("#listing-title"),e={"880RR":"marmot-ajax-3.html","985RF":"northface-talus-4.html","985PR":"northface-alpine-3.html","344YJ":"cedar-ridge-rimrock-2.html"};function l(r){return r.split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function m(r){o.innerHTML=r.map(t=>`
        <li class="product-card">
          <a href="${e[t.Id]?`../product_pages/${e[t.Id]}`:"#"}">
            <img
              src="${t.Images.PrimaryMedium}"
              alt="${t.Name}"
            />
            <h3 class="card__brand">${t.Brand.Name}</h3>
            <h2 class="card__name">${t.NameWithoutBrand}</h2>
            <p class="product-card__price">$${t.FinalPrice.toFixed(2)}</p>
          </a>
        </li>
      `).join("")}async function d(){try{s.textContent=`Top Products: ${l(a)}`;const r=await i.getData(a);m(r)}catch(r){console.error("Error loading products:",r),o.innerHTML="<li>Unable to load products.</li>"}}d();
