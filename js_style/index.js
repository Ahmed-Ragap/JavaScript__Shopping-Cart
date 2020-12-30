
let card_products = document.querySelector('.card-products');
let toggle_show = document.querySelector('.card-products div');

let view_all = document.querySelector('.view_all_products');
let incress = document.querySelector('ul span.badge');
 let toggle_class = document.querySelector('ul i.fa-cart-plus');
 let massage_alert = document.getElementById('massage')



// start products style_____
let product_dom = document.querySelector('.products');

let products = [
    {
        id: 1,
        title:'item one',
        size:'small',
        imagUrl:'./img/product_2.jpeg'
    },
    {
        id: 2,
        title:'item tow',
        size:'large',
        imagUrl:'./img/product_1.jpg'
    }
]

function makeproduct() {
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
    <button class="addToCard" id='addcard' onclick="addcard(${item.id})">add to card</button>
    <i class="favorite fa fa-heart-o"></i>
</div>
</div>
`;
 })
 product_dom.innerHTML = productUI;
}
makeproduct();
//add to card button functions
let addtocard = document.querySelector('#addcard'); 
let addeditem = localStorage.getItem('product_item') ? JSON.parse( localStorage.getItem('product_item')) : [];
function addcard(id) {
    let CardProductItems = document.querySelectorAll('.card-products div p');
    if (localStorage.getItem('username')) {
        let chooseitem = products.find((item) => item.id === id);
        toggle_show.innerHTML += `<p> ${chooseitem.title} </p>`
        addeditem = [...addeditem, chooseitem];
        localStorage.setItem('product_item', JSON.stringify(addeditem));
        incress.style.display = 'block';
        incress.innerHTML = CardProductItems.length + 1;
      } else {
          window.location = 'login.html'
      }
   
   
}




function open_products() {
    card_products.classList.toggle('toggle');
    view_all.style.display = 'block';
   
}



