// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

var removeFromCart = function(itemId) {
  var contents = readCart();
  delete contents[itemId];
  createCookie('cart', JSON.stringify(contents), 60);
  updateCart();
};
var addToCart = function(itemId) {
  var contents = readCart();
  if (contents[itemId]) {
    contents[itemId]++;
  }
  else {
    contents[itemId] = 1;
  }
  createCookie('cart', JSON.stringify(contents), 60);
  updateCart();
};
var updateCart = function() {
  var content = readCart();
  var keys = Object.keys(content);
  var count = 0;
  var textList = [];
  for (var i = 0; i < keys.length; i++) {
    count += content[keys[i]];
    var idText = '&ids[]=' + keys[i];
    textList.push(idText);
  }


  var cart = count + (count == 1 ? ' asi' : ' asja');
//  var ostukorv = $('#cart').text('Sul on ostukorvis ' + cart);
///products/info?&ids[]=3&ids[]=2
  var ostukorv  = $('#cart');
  ostukorv.empty();
  var cartLink2 = $('<a href="cart/list?' + textList +'" class="go-to-cart btn btn-sm">' +'Sul on ostukorvis '+ cart +  '</a>');
   ostukorv.append(cartLink2);



};
var searchProducts = function() {
  var query = $('#product-search').val();
  $.get('/search?q=' + query, function(productList) {

    var products = $('#products');
    products.empty();
    console.log(productList);

    for (i = 0; i < productList.length; i++) {
      var productRectangle  = $('<div class="col-md-4">');
      productRectangle.append('<h2>'+ productList[i].name +'</h2>');
      productRectangle.append('<p>'+ productList[i].description +'</p>');
      var cartLink = $('<a href="#" class="add-to-cart btn btn-success btn-sm">Lisa ostukorvi</a>');
      cartLink.data('product-id', productList[i].id);
      productRectangle.append(cartLink);
      products.append(productRectangle);
    }
  });

};

var searchTimeout = false;

var ready = function() {
  $('#product-search').keyup(function() {
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }
    searchTimeout = setTimeout(searchProducts, 150);
  });

  $('#products').on('click', '.add-to-cart', function(e) {
    e.preventDefault();
    var link = $(this);
    var id = link.data('product-id');
    addToCart(id);
  });

  updateCart();
  searchProducts();
};
$(document).on('ready', ready);
$(document).on('page:load', ready);
