fetch("product.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        let output = "";
        for (let i in products) {
            let product = products[i];
            output += `
       
       <div class="product">
        <img src="${product.image}" alt="${product.description}">
        <p class="title">${products.title}</p>
        <p class="description">${product.description}</p>
        <p class="price"> 
        <span>${product.price}</span>
        <span>&euro;</span>
        </p>
        <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
        </div>
        `;
        }

        document.querySelector(".products").innerHTML = output;
    });

fetch("product.json").then(function (t) { return t.json() }).then(function (t) {
    let s = ""; for (let c in t) {
        let i = t[c]; s += `
    <div class="product">
    <img src="${i.image}" alt="${i.description}">
    <p class="title">${i.title}</p>
    <p class="description">${i.description}</p>
    <p class="price">
    <span>${i.price}</span>
    <span>&euro;</span>

    <p/>
    <p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
    </div>
    `} document.querySelector(".products").innerHTML = s
});