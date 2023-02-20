
//Desktop Menu
const desktopMenu = document.querySelector('.desktop-menu');
const navbarEmail = document.querySelector('.navbar-email');

navbarEmail.addEventListener('click', () => {

  if(shoppingCar.classList.contains('inactive') == false) {
    shoppingCar.classList.add('inactive');
  }else if(productDetailContainer.classList.contains('inactive') == false){
    productDetailContainer.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
});

//Mobile Menu
const mobileMenu = document.querySelector('.mobile-menu');
const imgMenu = document.querySelector('.menu');
const mobileMenuArrowIcon = document.querySelector('.arrow');

imgMenu.addEventListener('click', () => {
  if(shoppingCar.classList.contains('inactive') == false){
    shoppingCar.classList.add('inactive');
  }else if(productDetailContainer.classList.contains('inactive') == false){
    productDetailContainer.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
});

mobileMenuArrowIcon.addEventListener('click',closeShopingCartMobile);

function closeShopingCartMobile(){
  shoppingCar.classList.add('inactive');
}

//shopping cart
const shoppingCarImg = document.querySelector('.navbar-shopping-cart');
const shoppingCar = document.querySelector('#shoppingCartContainer');

shoppingCarImg.addEventListener('click', () => {
  if(desktopMenu.classList.contains('inactive') == false){
    desktopMenu.classList.add('inactive');
  }else if(mobileMenu.classList.contains('inactive') == false){
    mobileMenu.classList.add('inactive');
  }else if(productDetailContainer.classList.contains('inactive') == false){
    productDetailContainer.classList.add('inactive');
  }
  shoppingCar.classList.toggle('inactive');
});


//Product Detail Aside
const productDetailContainer = document.querySelector('#productDetail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click',closeProductDetailAside);

function openProductDetailAside(){
  if(desktopMenu.classList.contains('inactive') == false){
    desktopMenu.classList.add('inactive');
  }else if(shoppingCar.classList.contains('inactive') == false){
    shoppingCar.classList.add('inactive');
  }else if(mobileMenu.classList.contains('inactive') == false){
    mobileMenu.classList.add('inactive');
  }
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}



//Products

const cardsContainer = document.querySelector('.cards-container')
const productList = [];

productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
  name: 'Camera',
  price: 150,
  image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
  name: 'Clock',
  price: 80,
  image: 'https://images.pexels.com/photos/5412086/pexels-photo-5412086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
  name: 'Rubik Cube',
  price: 100,
  image: 'https://images.pexels.com/photos/19677/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

//Creation of products

 function renderProducts(productList){
  for(product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener('click',openProductDetailAside);
  
    const productinfo = document.createElement('div');
    productinfo.classList.add('product-info');
  
    const productChar = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productChar.append(productPrice,productName);
  
    const productInfoFigure = document.createElement('figure');
   
  
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
    productImgCart.setAttribute('class', 'add-to-cart-button-unfocused')
  
    productInfoFigure.appendChild(productImgCart)
  
    productinfo.append(productChar,productInfoFigure);
  
    productCard.append(productImg, productinfo);
  
    cardsContainer.appendChild(productCard);
   }
 }

renderProducts(productList);



