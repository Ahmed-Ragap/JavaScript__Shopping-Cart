let product_item = localStorage.getItem('product_item');
 let product_dom = document.querySelector('.products');
 let incress = document.querySelector('ul span.badge');


if (product_item) {
    let item = JSON.parse(product_item);
    makeproduct(item);
 
}


function makeproduct(products) {
    let productUI = products.map((item) => {
return`

<div class="product-item">
<img class="product-item-img" src="${item.imagUrl}" alt="image">
<div class="product-desc">
    <h2>${item.title}</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, a!</p>
    <span>size:${item.size}</span>

</div>
<div class="product-item-action">
    <button class="addToCard" id='addcard' onclick="remove from cart(${item.id})">remove to card</button>
</div>
</div>
`;
 })
 product_dom.innerHTML = productUI;
}